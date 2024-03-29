//---- ON INITIALIZATION

import {preloadWc5eTemplates} from "./config_templates.js";
import RaceSelector from "../module/actor/apps/race-selector.js";

Hooks.once('init', async function () {

    if (typeof Babele !== 'undefined') {

        Babele.get().register({
            module: 'warcraft5e',
            lang: 'de',
            dir: 'lang/compendium/de'
        });
    }

    //Add warcraft items to proficiencySelector Search
    libWrapper.register('warcraft5e', 'dnd5e.applications.ProficiencySelector.getBaseItem', function (wrapped, ...args) {

        let identifier = args[0];
        let indexOnly = false;
        let fullItem = false;
        if (args[1]) {
            indexOnly = args[1].indexOnly;
            fullItem = args[1].fullItem;
        }

        let pack = "warcraft5e.wc5e_items_weapons";
        let [scope, collection, id] = identifier.split(".");
        if (scope && collection) pack = `${scope}.${collection}`;
        if (!id) id = identifier;

        // Return extended index if cached, otherwise normal index, guaranteed to never be async.
        if (indexOnly) {
            let cachedIndex = dnd5e.applications.ProficiencySelector._cachedIndices[pack]?.get(id) ?? game.packs.get(pack)?.index.get(id);
            if (!cachedIndex) {
                return wrapped(...args);
            }
            return cachedIndex;
        }

        // Full Item5e document required, always async.
        if (fullItem) {
            return dnd5e.packs.get(pack)?.getDocument(id);
        }

        // Returned cached version of extended index if available.
        if (dnd5e.applications.ProficiencySelector._cachedIndices[pack]) {
            let cachedIndex = dnd5e.applications.ProficiencySelector._cachedIndices[pack].get(id);
            if (!cachedIndex) {
                return wrapped(...args);
            }
            return cachedIndex;
        }

        // Build the extended index and return a promise for the data
        const packObject = game.packs.get(pack);
        if (!packObject) return;

        return game.packs.get(pack)?.getIndex({
            fields: ["system.armor.type", "system.toolType", "system.weaponType"]
        }).then(index => {
            dnd5e.applications.ProficiencySelector._cachedIndices[pack] = index;
            let check = index.get(id);
            if (typeof (check) !== 'undefined') {
                return index.get(id);
            }
            return wrapped(...args);
        });

        let result = wrapped(...args);
        return result;
    });

    //fix class names with spaces
    libWrapper.register('warcraft5e', 'dnd5e.documents.Actor5e.loadClassFeatures', function (wrapped, ...args) {
        let oldArgument = args[0].className;
        args[0].className = oldArgument.replace(/ /i, '');
        let result = wrapped(...args);
        return result;
    });

    //Add Events for the Character Sheet
    libWrapper.register('warcraft5e', 'dnd5e.applications.actor.ActorSheet5e.prototype._onConfigMenu', function (wrapped, ...args) {

        let event = args[0];

        event.preventDefault();
        const button = event.currentTarget;
        let app;
        switch (button.dataset.action) {
            case "race":
                app = new RaceSelector(this.object);
                break;
        }
        app?.render(true);

        let result = wrapped(...args);
        return result;
    });

    //rolls malfunction / mishap for items without attack roll
    libWrapper.register('warcraft5e', 'dnd5e.documents.Item5e.prototype.roll', function (wrapped, ...args) {
        console.log('ROLLING');
        if (!this.hasAttack) {
            console.log('NO ATTACK');
            let flags = this.flags;
            if (typeof (flags.wc5e) !== "undefined") {
                let mrmin = 0;
                let mrmax = 0;
                if (typeof (flags.wc5e.mrmin) !== "undefined" &&
                    typeof (flags.wc5e.mrmax) !== "undefined" &&
                    flags.wc5e.mrmin !== null &&
                    flags.wc5e.mrmax !== null) {

                    mrmin = flags.wc5e.mrmin;
                    mrmax = flags.wc5e.mrmax;

                    let roll = new Roll('1d20');
                    roll.evaluate({async:false});
                    roll.toMessage({flavor: 'Rolling for Malfunction'});
                    if (roll !== null) {
                        let rollResult = roll.terms[0].results[0].result;
                        if (rollResult <= mrmax) {
                            ChatMessage.create({content: 'Oh no! MALFUNCTION! (' + mrmin + ' - ' + mrmax + ')'});
                            let dnd5ePackage = game.packs.get("warcraft5e.wc5e_rolltables");
                            dnd5ePackage.getDocument('02jo8OAWgsD6E0hi').then(table => {
                                    table.draw();
                                }
                            )
                        }
                    }
                }
            }
        }
        let result = wrapped(...args);
        return result;
    });

    //rolls malfunction / mishap / capacity
    libWrapper.register('warcraft5e', 'dnd5e.documents.Item5e.prototype.rollAttack', async function (wrapped, ...args) {
        let flags = this.flags;
        let mrmin = 0;
        let mrmax = 0;
        let ammo = 0;
        if (typeof (flags.wc5e) !== "undefined") {
            if (typeof (flags.wc5e.ammo) !== "undefined") {
                ammo = flags.wc5e.ammo;
                if (ammo === null) {
                    ammo = flags.wc5e.capacity;
                    flags.wc5e.ammo = ammo;
                } else {
                    if (ammo === 0) {
                        const token = this.actor.token;
                        const html = await renderTemplate("modules/warcraft5e/templates/chat/reload.html", {
                            actor: this.actor,
                            tokenId: token?.uuid || null,
                            item: this,
                        });
                        ChatMessage.create({
                            content: html
                        });
                        return false;
                    }
                }
            }
            if (typeof (flags.wc5e.mrmin) !== "undefined" &&
                typeof (flags.wc5e.mrmax) !== "undefined" &&
                flags.wc5e.mrmin !== null &&
                flags.wc5e.mrmax !== null) {
                mrmin = flags.wc5e.mrmin;
                mrmax = flags.wc5e.mrmax;
            }
        }
        let result = wrapped(...args);
        result.then(roll => {
            if (roll !== null) {
                let rollResult = roll.terms[0].results[0].result;
                if (rollResult <= mrmax) {
                    ChatMessage.create({content: 'Oh no! MALFUNCTION! (' + mrmin + ' - ' + mrmax + ')'});
                    let dnd5ePackage = game.packs.get("warcraft5e.wc5e_rolltables");
                    dnd5ePackage.getDocument('02jo8OAWgsD6E0hi').then(table => {
                            table.draw();
                        }
                    )
                }

                if (ammo !== 0) {
                    ammo = ammo - 1;
                    this.update({['flags.wc5e.ammo']: ammo});
                }
            }
        });
        return result;
    });

    //splits damage types (like concussive) into their respective sub damage types
    libWrapper.register('warcraft5e', 'dnd5e.documents.Item5e.prototype.rollDamage', function (wrapped, ...args) {
        this.labels.damageTypes = this.labels.damageTypes.replace(/Concussive/i, "Concussive (Thunder, Bludgeoning)");
        let result = wrapped(...args);
        return result;
    });

    //Adds functionality to chat buttons
    libWrapper.register('warcraft5e', 'dnd5e.documents.Item5e._onChatCardAction', async function (wrapped, ...args) {
        let event = args[0];
        event.preventDefault();

        // Extract card data
        const button = event.currentTarget;
        const action = button.dataset.action;

        if (action === 'reload') {
            button.disabled = true;

            const card = button.closest(".chat-card");
            const messageId = card.closest(".message").dataset.messageId;
            const message = game.messages.get(messageId);

            const actor = await this._getChatCardActor(card);
            if (!actor) return;

            const storedData = message.getFlag("dnd5e", "itemData");
            const item = storedData ? new this(storedData, {parent: actor}) : actor.items.get(card.dataset.itemId);
            item.update({['flags.wc5e.ammo']: item.flags.wc5e.capacity});
            return;
        }

        let result = wrapped(...args);
        return result;
    });

    console.log(dnd5e);
    return preloadWc5eTemplates();
});