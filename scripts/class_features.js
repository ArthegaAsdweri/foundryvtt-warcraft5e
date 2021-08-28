console.log('>> Wc5e: Adjusting 5e ClassFeatures');

import {ClassFeatures} from "../../../systems/dnd5e/module/classFeatures.js";

delete ClassFeatures.bard;
delete ClassFeatures.barbarian;
delete ClassFeatures.cleric;
delete ClassFeatures.fighter;
delete ClassFeatures.ranger;
delete ClassFeatures.sorcerer;
delete ClassFeatures.wizard;


ClassFeatures.alchemist = {
   "subclasses": {
     "path-of-the-apothecary": {
       "label": "Path of the Apthecary",
       "source": "XGE pg. 9"
     },
     "path-of-the-mutant": {
       "label": "Path of the Mutant",
       "source": "SCAG pg. 121"
     },
     "path-of-the-transmutor": {
       "label": "Path of the Transmutor",
       "source": "PHB pg. 49",
     }
   },
   "features": {
     "1": ["Compendium.warcraft5e.class_feats.URtICjZp9BRWdVlL"]
   }
}

ClassFeatures.tinker = {
   "subclasses": {
     "arms": {
       "label": "Bomber",
       "source": "PHB page 146",
       "features": {
         "3": ["Compendium.warcraft5e.wc5e_class_feats.IHkdG7wrZ62CpvtN"],
         "6": ["Compendium.warcraft5e.wc5e_class_feats.YaZ6QGI1PROtCSFC"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.trtveMlKtVaDTEyX"],
         "14": ["Compendium.warcraft5e.wc5e_class_feats.f9e8WTH6rtXrZ2W5"]
       }
     },
     "fury": {
       "label": "Warrior of Fury",
       "source": "PHB page 147",
       "features": {
         "3": ["Compendium.warcraft5e.wc5e_class_feats.F9WjNpgB8SgAmZJr"],
         "6": ["Compendium.warcraft5e.wc5e_class_feats.nJQ8RrxdQEV7ehjd"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.wF27kRxdBTRfaUpp"],
         "14": ["Compendium.warcraft5e.wc5e_class_feats.vvNZakY2Z8al9mWh"]
       }
     },
     "protection": {
       "label": "Warrior of Protection",
       "source": "PHB page 147",
       "features": {
         "3": ["Compendium.warcraft5e.wc5e_class_feats.weVaL0aKagU09Ox3"],
         "6": ["Compendium.warcraft5e.wc5e_class_feats.HfkNtAfjkgE37g5B"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.PFIfmXoDtbrySQVv"],
         "14": ["Compendium.warcraft5e.wc5e_class_feats.GYrmVcJOj9HJnOKA"]
       }
     }
   },
   "features": {
     "1": [
         "Compendium.warcraft5e.wc5e_class_feats.0tVoLOidfrTrY0CJ",
         "Compendium.warcraft5e.wc5e_class_feats.BxFovVOtLQ9XyD03",
         "Compendium.warcraft5e.wc5e_class_feats.kHW3aF52oqfQmbxB"
     ],
     "2": [
         "Compendium.warcraft5e.wc5e_class_feats.YVUjckHkEyV9W0oU",
         "Compendium.warcraft5e.wc5e_class_feats.5FiNPLnuI2DzFuj5"
     ],
     "3": [
         "Compendium.warcraft5e.wc5e_class_feats.zkaE7Ux6nFOdKSF2"
     ],
     "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
     "5": [
         "Compendium.warcraft5e.wc5e_class_feats.UqsLXbxQqyYYrl8P",
         "Compendium.warcraft5e.wc5e_class_feats.SHZG5Wddrg2jWLa5"
     ],
     "7": ["Compendium.warcraft5e.wc5e_class_feats.2bHy7g5yI4pfCGha"],
     "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
     "9": ["Compendium.warcraft5e.wc5e_class_feats.JdAXjMxVRIm1S83C"],
     "10": [
         "Compendium.warcraft5e.wc5e_class_feats.sKw4cffExx8pfW6O"
     ],
     "11": [
         "Compendium.warcraft5e.wc5e_class_feats.vH3lv5vHjBAW1FBf",
         "Compendium.warcraft5e.wc5e_class_feats.s0WyJ609hEA2FnwZ"
     ],
     "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
     "13": ["Compendium.warcraft5e.wc5e_class_feats.KCzDiZJsJ0ZNgxFM"],
     "15": [
         "Compendium.warcraft5e.wc5e_class_feats.YVUjckHkEyV9W0oU",
         "Compendium.warcraft5e.wc5e_class_feats.Pfnsk5vTjTJK5yJo"
     ],
     "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
     "17": ["Compendium.warcraft5e.wc5e_class_feats.pi3ZVUfOt67NRxz1"],
     "18": ["Compendium.warcraft5e.wc5e_class_feats.lkuZuFTvus8lphWf"],
     "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
     "20": ["Compendium.warcraft5e.wc5e_class_feats.OddXpvUlobuwrFOK"]
   }
}

ClassFeatures.warrior = {
   "subclasses": {
     "arms": {
       "label": "Warrior of Arms",
       "source": "PHB page 146",
       "features": {
         "3": [
             "Compendium.warcraft5e.wc5e_class_feats.jZZ3jr0aiZLwdcxv",
             "Compendium.warcraft5e.wc5e_class_feats.C5BAim49sUa3Qegt"
         ],
         "7": ["Compendium.warcraft5e.wc5e_class_feats.pzV0GxhXY8Jq2sWn"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.lRbedzZp3cixTZpc"],
         "15": ["Compendium.warcraft5e.wc5e_class_feats.CE1HZQNeawepBtXI"],
         "18": ["Compendium.warcraft5e.wc5e_class_feats.UhPWa7DK3HBXtwsC"]
       }
     },
     "fury": {
       "label": "Warrior of Fury",
       "source": "PHB page 147",
       "features": {
         "3": ["Compendium.warcraft5e.wc5e_class_feats.na8IZmJwynNkz1iL"],
         "7": ["Compendium.warcraft5e.wc5e_class_feats.tOcK4KygovPeQIqG"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.WV4HWROfS9LE2h9J"],
         "15": ["Compendium.warcraft5e.wc5e_class_feats.3vYZozTLrSTVh0Jg"],
         "18": ["Compendium.warcraft5e.wc5e_class_feats.lbdG8tGG6jobDHkx"]
       }
     },
     "protection": {
       "label": "Warrior of Protection",
       "source": "PHB page 147",
       "features": {
         "3": ["Compendium.warcraft5e.wc5e_class_feats.s0BmwIiZaHlfijhF"],
         "7": ["Compendium.warcraft5e.wc5e_class_feats.B8vZWezYjs9O5uIg"],
         "10": ["Compendium.warcraft5e.wc5e_class_feats.W3G5UsJoykzHbiXh"],
         "15": ["Compendium.warcraft5e.wc5e_class_feats.9Wz8j8i350x4cDtR"],
         "18": ["Compendium.warcraft5e.wc5e_class_feats.OPgso8NNMudmIPfU"]
       }
     }
   },
   "features": {
     "1": [
         "Compendium.warcraft5e.wc5e_class_feats.KTeU6RPjSlPkisut",
         "Compendium.warcraft5e.wc5e_class_feats.6yr0026sJRfkMPtV",
         "Compendium.warcraft5e.wc5e_class_feats.lFVytL3t8utTKs2r"
     ],
     "4": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "5": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"],
     "6": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "8": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "9": ["Compendium.warcraft5e.wc5e_class_feats.lFVytL3t8utTKs2r"],
     "11": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"],
     "12": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "14": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "16": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "19": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
     "20": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"]
   }
}