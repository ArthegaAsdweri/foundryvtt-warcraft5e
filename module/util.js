
export function renderWcDescription(description) {
    let descString = '';
    for (let p of description) {
        if(typeof(p.title) !== 'undefined') {
            descString += `<h4>${game.i18n.localize(p.title)}</h4>`
        }
        if(typeof(p.value) !== 'undefined') {
            descString += `<p>${game.i18n.localize(p.value)}</p>`;
        }
        if(typeof(p.options) !== 'undefined') {
            let options = p.options;
            let optionString = '';
            for(let o of options) {
                optionString += `<li>${game.i18n.localize(o)}</li>`;
            }
            descString += `<ul>${optionString}</ul>`;
        }
    }
    return descString;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}