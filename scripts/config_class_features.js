console.log('>> Wc5e: Adjusting 5e ClassFeatures');

let ClassFeatures = dnd5e.config.classFeatures;

delete ClassFeatures.bard;
delete ClassFeatures.barbarian;
delete ClassFeatures.cleric;
delete ClassFeatures.fighter;
delete ClassFeatures.ranger;
delete ClassFeatures.sorcerer;
delete ClassFeatures.wizard;

ClassFeatures.alchemist = {
    "subclasses": {
        "apothecary": {
            "label": "Apothecary",
            "source": "Wc5e - Core p. 39",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.cBp6ymcqcqWtsitG",
                    "Compendium.warcraft5e.wc5e_class_feats.7wd0LyTNyC4HJ6yH"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.ASZZGsqog6YIl1MG"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.zA6fWmMKtLi2Bf2n"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.KT6R3NXZlyIjTOEL"]
            }
        },
        "mutant": {
            "label": "Mutant",
            "source": "Wc5e - Core p. 40",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.z6qfh7iXuCGYMuUU",
                    "Compendium.warcraft5e.wc5e_class_feats.BhwwZOGhwKSPAHDD"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.4yOakGpu52fmer7I"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.gfNjBd2i15oXCRvn"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.cqDnVw5bjOgYUkX2"]
            }
        },
        "transmutor": {
            "label": "Transmutor",
            "source": "Wc5e - Core p. 41",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.MoxAQW3bvLjyYxiy",
                    "Compendium.warcraft5e.wc5e_class_feats.0LuxEf5TR2gFyOB1"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.VkugzBTttynxuoo6"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.HQbXBjvchMSUObFJ"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.jmSJssDKfh6DUF8M"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.8sZenEzgW3Ophkab",
            "Compendium.warcraft5e.wc5e_class_feats.VzBpflaYYB9YlOwi",
            "Compendium.warcraft5e.wc5e_class_feats.WCJTpTCxSYaZv5xy"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.Be4HjiEYIqimoWYs"],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.5TfCXmSnJ3Xo3QdR"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.sxNel3N5wx70Enlf"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "9": ["Compendium.warcraft5e.wc5e_class_feats.AdMwBo9sIaVqUBDK"],
        "10": [
            "Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F",
            "Compendium.warcraft5e.wc5e_class_feats.RaL0zsk6k0a0FBtP"
        ],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.VYvpCdOwqybLfeLO"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.OHwvsMkcz091pZbh"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.Lp7nrroIUrfL9AbA"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.6FKCdgSXqxMdvyc1"]
    }
}
ClassFeatures.deathknight = {
    "subclasses": {
        "pathOfBlood": {
            "label": "Path of Blood",
            "source": "Wc5e - Core p. 49",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.KmQj5Z2i2ySPayr2",
                    "Compendium.warcraft5e.wc5e_class_feats.Z9iWKy2PWb1BcRjX"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.CiZ585lnHkf65RfV"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.LHW4zbujvC2oEhOW"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.ylCYqr2H3rJvhFKg"]
            }
        },
        "pathOfFrost": {
            "label": "Path of Frost",
            "source": "Wc5e - Core p. 50",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.Hi2IlXyd4nETYjOq",
                    "Compendium.warcraft5e.wc5e_class_feats.IarrLRT7ApLy0MUm"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.e4c2uz9zUybfrlqQ"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.IIGYjkWIQKZvTLUR"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.F29VxMHzB3H8VYIb"]
            }
        },
        "unholyPath": {
            "label": "Unholy Path",
            "source": "Wc5e - Core p. 51",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.f2YutuIvE9ZtLlZE",
                    "Compendium.warcraft5e.wc5e_class_feats.yotHQiKWUtqYZnR5"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.cmsQRLMNBJ1YFw2U"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.algn5NhMHmPK8bJz"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.bwj4xvl22wCaZIEi"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.E7MNYi17oWxoYV7d",
            "Compendium.warcraft5e.wc5e_class_feats.bI7xI3VrGU6QkwCC"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.4VEbwGDxIo1A9qjp",
            "Compendium.warcraft5e.wc5e_class_feats.NpZmvg15FbFQ2Xvv",
            "Compendium.warcraft5e.wc5e_class_feats.CqVsG5nYaVsdhqHQ"
        ],
        "3": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.wW0gIF7xTQ1e6mEj"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.VyrQcDbkD5DZxKMb"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.a9vilfbnrwSIp1tw"
        ],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.Zvcv0PFMFbeIL4BA"
        ],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"]
    }
}
ClassFeatures.druid = {
    "subclasses": {
        "circleOfBalance": {
            "label": "Circle of Balance",
            "source": "Wc5e - Core p. 58",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.HvLHardWnT1aWNXH",
                    "Compendium.warcraft5e.wc5e_class_feats.uUhsDBHjU8kzWtjX"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.4nCcbhDi1IkkAnyp"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.TN4aZNPDe4sIha7D"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.b4mQ0wGwseHIR4cy"]
            }
        },
        "circleOfFeralBeast": {
            "label": "Circle of the Feral Beast",
            "source": "Wc5e - Core p. 59",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.t5d4RlaFNNH1cgVp",
                    "Compendium.warcraft5e.wc5e_class_feats.QeLx7sfAv0rKhNw3"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.Y4wUUUHZXuFxABPE"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.tvWxpr00gdnPLz00"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.YA8uHltnzfmjjPg7"]
            }
        },
        "circleOfRestoration": {
            "label": "Circle of Restoration",
            "source": "Wc5e - Core p. 61",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.XtoEYQ7OzazMiS1f",
                    "Compendium.warcraft5e.wc5e_class_feats.wA1qRvzQnSQVL7pH"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.olgFPYXiUsMVuI7X"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.mgm5EHvSvDqgfha8"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.LmEbySgScEe1RNe6"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.Ziu7O84V9qADpM66",
            "Compendium.warcraft5e.wc5e_class_feats.4hovzz0VURJ5XEsr"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf",
            "Compendium.warcraft5e.wc5e_class_feats.wA1qRvzQnSQVL7pH"
        ],
        "4": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"
        ],
        "8": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"],
        "12": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": [
            "Compendium.warcraft5e.wc5e_class_feats.7gQHqIqq8eGCQUCp",
            "Compendium.warcraft5e.wc5e_class_feats.vEDMiIDSdkCEMA6P"
        ],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.Xr27k8bUvG9sFIen"]
    }
}
ClassFeatures.hunter = {
    "subclasses": {
        "beastMaster": {
            "label": "Beast Master",
            "source": "Wc5e - Core p. 67",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.DXx4xvTOQ2wrFC3p"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.r4zAElBNqHgQ0fbR"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.oQXidlmDWLQQg0J0"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.x8o6vp9x6DwfoyfI"]
            }
        },
        "marksman": {
            "label": "Marksman",
            "source": "Wc5e - Core p. 68",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.DzvT9juUQYLSR7YZ"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.uaIpcs3TYF1q41EV"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.wY0LLZwqeyZEahD6"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.3LQx3dSrrXyQfUwp"]
            }
        },
        "survival": {
            "label": "Survival",
            "source": "Wc5e - Core p. 69",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.AkZWkmxe9uV5xeS3"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.ePlaLixp5XS16KeN"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.znGg1RBRXJiLjyVH"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.b3BRUiVDo2G6Vjwf"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb",
            "Compendium.warcraft5e.wc5e_class_feats.ZIozEthSXCRehlGw"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.zRalmH8DkBPR5vDk",
            "Compendium.warcraft5e.wc5e_class_feats.qhxjEAxl1EVuYAqh"
        ],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.KMdXwpS1f2zc1WrA"]
    }
}
ClassFeatures.mage = {
    "subclasses": {
        "arcane": {
            "label": "Arcane",
            "source": "Wc5e - Core p. 74",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.Kz94qdOAZhVicLfJ",
                    "Compendium.warcraft5e.wc5e_class_feats.MO9xhgHqXihbvRtx"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.Y1Sp7b5eaVo0smrh"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.ljk1RkNw3NcefLVF"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.i5YmSxTpymdMqOAl"]
            }
        },
        "fire": {
            "label": "Fire",
            "source": "Wc5e - Core p. 75",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.PY9zd0U6iN8zmSAG",
                    "Compendium.warcraft5e.wc5e_class_feats.dS1lVTf8oxQrhEAa"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.joU6dcGOc0r4wcqy"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.3raIynROpzVPFI5j"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.Ch4pExUv8jGYSjGx"]
            }
        },
        "frost": {
            "label": "Frost",
            "source": "Wc5e - Core p. 76",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.i7MIIGg4ucXKx6rq",
                    "Compendium.warcraft5e.wc5e_class_feats.wCDvuUjTdfhXmc5D"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.Uuwlyr0o5sxbHN2H"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.JrSbJGFrbdkHzQjd"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.QsgvXKqyvq8YuiCh"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.nyzZQNRbky035Pzi",
            "Compendium.warcraft5e.wc5e_class_feats.T00t50eQC3Q5Mv7i"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.p9Sy4xutvzgMOlPQ"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.p9Sy4xutvzgMOlPQ"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.p9Sy4xutvzgMOlPQ"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.p9Sy4xutvzgMOlPQ"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.QzZQTZwjVQG0fdRv"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.1wgi6bQJPMHJbymE"]
    }
}
ClassFeatures.monk = {
    "subclasses": {
        "brewmaster": {
            "label": "Brewmaster",
            "source": "Wc5e - Core p. 82",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.HREpIWCzSdX0ecB5",
                    "Compendium.warcraft5e.wc5e_class_feats.ClAmGmm4eub8RZnv"
                ],
                "6": [
                    "Compendium.warcraft5e.wc5e_class_feats.tGeaOxjjZVNP9AS6",
                    "Compendium.warcraft5e.wc5e_class_feats.hAlSOBRs8arLXvml",
                    "Compendium.warcraft5e.wc5e_class_feats.WyuwXnZAXJLubZwq"
                ],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.jdfAAeOUVjhJ1m3u"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.qdwDldg8egpKa4kN"]
            }
        },
        "mistweaver": {
            "label": "Mistweaver",
            "source": "Wc5e - Core p. 84",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.jdfAAeOUVjhJ1m3u",
                    "Compendium.warcraft5e.wc5e_class_feats.oHPeTMriTPaUwPN0",
                    "Compendium.warcraft5e.wc5e_class_feats.tMNIRBv5k9Gqlbsw"
                ],
                "6": [
                    "Compendium.warcraft5e.wc5e_class_feats.zu4YXtf6wwCboEKM",
                    "Compendium.warcraft5e.wc5e_class_feats.W1YyLCnBnHA3KdX0",
                    "Compendium.warcraft5e.wc5e_class_feats.9wT2ExLJfcmGIaXc"
                ],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.qUFj1O3jX1QONPeO"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.0d7fgcywXZlymDvq"]
            }
        },
        "windwalker": {
            "label": "Windwalker",
            "source": "Wc5e - Core p. 85",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.zCH3QykOX0EMHTcu",
                    "Compendium.warcraft5e.wc5e_class_feats.em3Ip3uS3H1pQy6R"
                ],
                "6": [
                    "Compendium.warcraft5e.wc5e_class_feats.Hgvx8m6xTuBvEKoe",
                    "Compendium.warcraft5e.wc5e_class_feats.CdML8DpmA8RQ4zPQ"
                ],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.NQnoAHyBLWBnkOfi"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.9fqPszK0DoHzxK6e"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.onB2GfF5CowTtYEG",
            "Compendium.warcraft5e.wc5e_class_feats.LIM6tTwSTNKf2nhm"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.at5RxuJOB2DHo1KU",
            "Compendium.warcraft5e.wc5e_class_feats.T4gkKMhtCkfcTWpZ"
        ],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.IXUQpWc3Wp2bkbyW"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": [
            "Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w",
            "Compendium.warcraft5e.wc5e_class_feats.XkgjhmDXkMq3Sc9K"
        ],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.IXUQpWc3Wp2bkbyW",
            "Compendium.warcraft5e.wc5e_class_feats.rllzAl0mdF4ZJMwK"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.Bz5KH5j7fDLo6YYr"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.0Kc2J4FNAvU0M9rZ"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.IXUQpWc3Wp2bkbyW"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "13": ["Compendium.warcraft5e.wc5e_class_feats.iZzMcguzXWSwC4b8"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.60EMzrnk0RuiF2Y4"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.IXUQpWc3Wp2bkbyW"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.kIXryrIsjM41gtZz"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.cA9AWTxYSiztfWlq"]
    }
}
ClassFeatures.paladin = {
    "subclasses": {
        "holiness": {
            "label": "Holiness",
            "source": "Wc5e - Core p. 92",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.LZZZqJgcLeEvrs4e",
                    "Compendium.warcraft5e.wc5e_class_feats.1p5iixJWw8wzFxmi"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.wMqF34nMeFKTuKFa"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.nOZA907T3ntBSDy1"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.bNpeWGGYsWSY0Nnj"]
            }
        },
        "protection": {
            "label": "Protection",
            "source": "Wc5e - Core p. 93",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.volLu7H7RUAnQiGU",
                    "Compendium.warcraft5e.wc5e_class_feats.gTfFtLVddNp8jBd6"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.xhb24aculIGVmMPS"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.YQdKHLKBbjW4ld3C"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.hJBX1Z16CaBHgzAm"]
            }
        },
        "retribution": {
            "label": "Retribution",
            "source": "Wc5e - Core p. 94",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.rwMznR2NEW8KHjsG",
                    "Compendium.warcraft5e.wc5e_class_feats.EyeUgkAZ6vc3phLQ"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.1LTJ0Z5PTXccvCHl"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.XhI1yaClq0sWo7Yz"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.ZORCjZSoe8L77dHz"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.E7MNYi17oWxoYV7d",
            "Compendium.warcraft5e.wc5e_class_feats.mXkyJa3srztIf5nw"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.wmZWy2jB90V1Z1wv",
            "Compendium.warcraft5e.wc5e_class_feats.OC0UGQotskcBEwEt",
            "Compendium.warcraft5e.wc5e_class_feats.rD6qGkafA0RgId3o"
        ],
        "3": [
            "Compendium.warcraft5e.wc5e_class_feats.TViwFKLN6l28fJEy",
            "Compendium.warcraft5e.wc5e_class_feats.r4fuMB78XkTztxMu"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.5COVDSKwtxGH3Rb5",
            "Compendium.warcraft5e.wc5e_class_feats.TViwFKLN6l28fJEy"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.r4fuMB78XkTztxMu"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.TViwFKLN6l28fJEy"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.KC29DjqvQqdH0v7P"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": [
            "Compendium.warcraft5e.wc5e_class_feats.kWOJ0J9yTOOmYz1X",
            "Compendium.warcraft5e.wc5e_class_feats.TViwFKLN6l28fJEy"
        ],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.r4fuMB78XkTztxMu"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": [
            "Compendium.warcraft5e.wc5e_class_feats.8jbKibzJGsCpwxXB",
            "Compendium.warcraft5e.wc5e_class_feats.TViwFKLN6l28fJEy"
        ],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.r4fuMB78XkTztxMu"]
    }
}
ClassFeatures.priest = {
    "subclasses": {
        "death": {
            "label": "Death",
            "source": "Wc5e - Core p. 100",
            "features": {
                "1": ["Compendium.warcraft5e.wc5e_class_feats.wURsbLUqrXhS7gC1"],
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.WklcfVMMOJr5ok8R",
                    "Compendium.warcraft5e.wc5e_class_feats.94HnLkcnUE2Nes1f"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.wC8QirAFNNRD8ML7"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.QZYPjPxmn63Fn3hE"]
            }
        },
        "discipline": {
            "label": "Discipline",
            "source": "Wc5e - Core p. 101",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.V60pVQs7xk96aaCk",
                    "Compendium.warcraft5e.wc5e_class_feats.wgMVVAo1MuULM9ng"
                ],
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.CG9N2tgvj6DJCFnq",
                    "Compendium.warcraft5e.wc5e_class_feats.fH3Bk0DKTSj01D9J"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.GmdcuYkgq4PjEOcM"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.LNE36ekkggmScUJA"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.TEL4vqN3R1pgnaaf"]
            }
        },
        "holyLight": {
            "label": "Holy Light",
            "source": "Wc5e - Core p. 102",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.j7XAOqsHIKkFxHIg",
                    "Compendium.warcraft5e.wc5e_class_feats.OwD73n82QUocvmjY"
                ],
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.TLIMung7YOMWkgBC",
                    "Compendium.warcraft5e.wc5e_class_feats.n5jzGYcRRPrUOMth"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.FCtN9terzd3Jbqkn"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.ifUhDJgiPut9Ey6y"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.s6o0DWfOKaBSwVXZ"]
            }
        },
        "moon": {
            "label": "Moon",
            "source": "Wc5e - Core p. 104",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.L7x4apvUhlhGjOLA",
                    "Compendium.warcraft5e.wc5e_class_feats.bXOPh4SQVfiV1n9k",
                    "Compendium.warcraft5e.wc5e_class_feats.2yq4uOuwNghI4af8"
                ],
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.LEqiPm2PRvIXHx7t"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.2CR7Sd41zGchgEda"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.dSp7L2gv6zC2Dnva"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.qXGm3vy0JAuBTCfO"]
            }
        },
        "shadow": {
            "label": "Shadow",
            "source": "Wc5e - Core p. 106",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.QTX7GT4x79gWUJbo",
                    "Compendium.warcraft5e.wc5e_class_feats.1vo92gpgmxdjTAG8"
                ],
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.RKPOUYciFMDgkOlE",
                    "Compendium.warcraft5e.wc5e_class_feats.FWbuzWKehJuVdZPQ"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.QXFdCzK6APKion73"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.vQwHVzc4EuY3toQM"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.gSqHPTauSrMKntIT"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.EUN8MjYR1F8GZ4ET",
            "Compendium.warcraft5e.wc5e_class_feats.DmVapDswi1KbEY7L",
            "Compendium.warcraft5e.wc5e_class_feats.onB2GfF5CowTtYEG"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.dRIBqPhFZ3m1ZTkP",
            "Compendium.warcraft5e.wc5e_class_feats.EUN8MjYR1F8GZ4ET",
            "Compendium.warcraft5e.wc5e_class_feats.RiwL9ouurSGUdLmD"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.dRIBqPhFZ3m1ZTkP",
            "Compendium.warcraft5e.wc5e_class_feats.EUN8MjYR1F8GZ4ET"
        ],
        "8": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.EUN8MjYR1F8GZ4ET"
        ],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.wK83bCyjth6JanA5"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.EUN8MjYR1F8GZ4ET"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.dRIBqPhFZ3m1ZTkP"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.wK83bCyjth6JanA5"]
    }
}
ClassFeatures.rogue = {
    "subclasses": {
        "assassination": {
            "label": "Assassination",
            "source": "Wc5e - Core p. 112",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.oI0wCH7jMFKC8ip6",
                    "Compendium.warcraft5e.wc5e_class_feats.AOZEW7HvF67rYdgw"
                ],
                "9": ["Compendium.warcraft5e.wc5e_class_feats.VqmbJ0IiurDWitRA"],
                "13": ["Compendium.warcraft5e.wc5e_class_feats.eHA6DPMKqchmrquO"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.CC7dhTLu1GPURbXT"]
            }
        },
        "outlaw": {
            "label": "Outlaw",
            "source": "Wc5e - Core p. 112",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.SOupAvvP4QJxvsZp",
                    "Compendium.warcraft5e.wc5e_class_feats.b0AbARYDh5upr45h"
                ],
                "9": ["Compendium.warcraft5e.wc5e_class_feats.ys5bnmMxFhtN34Uh"],
                "13": ["Compendium.warcraft5e.wc5e_class_feats.5YfBDix3LAyHniYr"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.3x5iepuAIJ3b3ZCI"]
            }
        },
        "subtlety": {
            "label": "Subtlety",
            "source": "Wc5e - Core p. 113",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.HdBCMDKhHcFg5K8E",
                    "Compendium.warcraft5e.wc5e_class_feats.2K9BDwRekjipPJOd"
                ],
                "9": ["Compendium.warcraft5e.wc5e_class_feats.cKmRTcMPNTJZVBcB"],
                "13": ["Compendium.warcraft5e.wc5e_class_feats.AVqdNKWuX3fo0t6y"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.nzIko1AaRr8T5sDc"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.eGZHgFTQ6jpeGxpx",
            "Compendium.warcraft5e.wc5e_class_feats.EpwVYwGV2fvfjPlM",
            "Compendium.warcraft5e.wc5e_class_feats.BHLZAkGslbF7Zm2B"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.Ati44swDcnfISD78"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.eGZHgFTQ6jpeGxpx"],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "9": ["Compendium.warcraft5e.wc5e_class_feats.Ati44swDcnfISD78"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "13": ["Compendium.warcraft5e.wc5e_class_feats.Ati44swDcnfISD78"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.x7depgHFRiQT3fdH"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.Ati44swDcnfISD78"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.3lH8HEn54RQyENCN"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.JznOH8HR1MHE1nkE"]
    }
}
ClassFeatures.shaman = {
    "subclasses": {
        "elemental": {
            "label": "Elemental",
            "source": "Wc5e - Core p. 120",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.uwLlHRgiSbm9ncvi",
                    "Compendium.warcraft5e.wc5e_class_feats.Lit6kqsCl8uscjol"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.YT5mEQRF6YaU8Wp9"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.26Bm2DjJnkvBh5vN"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.9O6ArBfAbMN3pdvZ"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.yEzkodabqfMFdqkF"]
            }
        },
        "enhancement": {
            "label": "Enhancement",
            "source": "Wc5e - Core p. 121",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.9DPJbM0zkkuI5gsk",
                    "Compendium.warcraft5e.wc5e_class_feats.BXHGUjkF0ckCrdFe"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.wa37WeEd4Ndo3TRu"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.2Paq6iTiYEgCh7Jk"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.A0L4jDzqDqZJ6VO8"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.3mYJRk5H5Rrepnvc"]
            }
        },
        "restoration": {
            "label": "Restoration",
            "source": "Wc5e - Core p. 122",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.caRItDWXUgsayCb9",
                    "Compendium.warcraft5e.wc5e_class_feats.yqR7iSdE87SJM4Lo"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.C4km96jZUwGbZRrf"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.jX8daFzRS6GiIiyU"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.p8QQrz7P6pqA9sI9"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.osJf60aBOveCLwZk"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.teGIlK6XbxusBe5f",
            "Compendium.warcraft5e.wc5e_class_feats.XRY1J7ExecaAvZL5",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g",
            "Compendium.warcraft5e.wc5e_class_feats.gfJHW5hvYKzh8Iwv",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "8": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.hcT1ALhoSD1kOUDP"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": [
            "Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.hcT1ALhoSD1kOUDP"]
    }
}
ClassFeatures.tinker = {
    "subclasses": {
        "bomber": {
            "label": "Bomber",
            "source": "Wc5e - Core p. 146",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.IHkdG7wrZ62CpvtN"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.YaZ6QGI1PROtCSFC"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.trtveMlKtVaDTEyX"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.f9e8WTH6rtXrZ2W5"]
            }
        },
        "gunner": {
            "label": "Gunner",
            "source": "Wc5e - Core p. 147",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.F9WjNpgB8SgAmZJr"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.nJQ8RrxdQEV7ehjd"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.wF27kRxdBTRfaUpp"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.vvNZakY2Z8al9mWh"]
            }
        },
        "gadgeteer": {
            "label": "Gadgeteer",
            "source": "Wc5e - Core p. 147",
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
        "3": ["Compendium.warcraft5e.wc5e_class_feats.zkaE7Ux6nFOdKSF2"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": [
            "Compendium.warcraft5e.wc5e_class_feats.UqsLXbxQqyYYrl8P",
            "Compendium.warcraft5e.wc5e_class_feats.SHZG5Wddrg2jWLa5"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.2bHy7g5yI4pfCGha"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "9": ["Compendium.warcraft5e.wc5e_class_feats.JdAXjMxVRIm1S83C"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.sKw4cffExx8pfW6O"],
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
ClassFeatures.warlock = {
    "subclasses": {
        "affliction": {
            "label": "Affliction",
            "source": "Wc5e - Core p. 139",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.IUX4nj4jmczJOhEA",
                    "Compendium.warcraft5e.wc5e_class_feats.rySXMTp4uiqk20Gi"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.b0ci4k42K5xY8q4R"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.8zRF8tRcN4zBKNZZ"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.tIP2mhdV88SnEABk"]
            }
        },
        "demonology": {
            "label": "Demonology",
            "source": "Wc5e - Core p. 140",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.PHXdCoM6HH3NIf7K",
                    "Compendium.warcraft5e.wc5e_class_feats.uOQu24kJG2zsX378"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.wY0STEopZzf1hB3z"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.xxrqsGK19xOR3q7R"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.oDAMc9wlLQ18UbGA"]
            }
        },
        "destruction": {
            "label": "destruction",
            "source": "Wc5e - Core p. 141",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.0h7RUS2kfUXTwkdm",
                    "Compendium.warcraft5e.wc5e_class_feats.PCLwGvIRMY3KYLMI"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.AA7PS3znDq201lTn"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.Zix5jvsp41eXi14J"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.FrHZaqJfS1UxmN0s"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.1PXPQRGYPhhPm8J3",
            "Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe",
            "Compendium.warcraft5e.wc5e_class_feats.q0phj3NJAGnGl8ym",
            "Compendium.warcraft5e.wc5e_class_feats.zXqjKHVh08yelm2a"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.aSLDlpVbsPAYtHFE"],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.FJuWOyl6vdY70eH2"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.LbKLP6wNlpy5TBPD"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.7PYDrXNrSXhfqJh6"]
    }
}
ClassFeatures.warrior = {
    "subclasses": {
        "arms": {
            "label": "Warrior of Arms",
            "source": "Wc5e - Core p. 146",
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
            "source": "Wc5e - Core p. 147",
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
            "source": "Wc5e - Core p. 147",
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