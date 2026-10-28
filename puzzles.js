// Spell recipes: authored clues and intruders; validated letter paths.
const SPELL_PACKS=[
  {
    "id": 1,
    "title": "Finding Charm",
    "warning": "May find things you hid.",
    "answer": "LIGHT",
    "clue": "A three-word instruction to reveal a route.",
    "grid": "NYUMNAHSWYOTAEHW",
    "words": [
      "SHOW",
      "THE",
      "WAY"
    ],
    "tubes": [
      [
        0,
        4,
        0,
        4
      ],
      [
        1,
        3,
        2,
        3
      ],
      [
        1,
        2,
        1,
        3
      ],
      [
        1,
        0,
        2,
        4
      ],
      [
        2,
        4,
        3,
        0
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Reveal something that has been lost.",
    "decipherClue": "I fill a room without taking up space. Darkness goes when I arrive.",
    "gather": [
      {
        "ingredient": "A borrowed glimmer",
        "prompt": "These sources of light need no flame.",
        "matching": [
          "FIREFLY",
          "MOON",
          "GLOWWORM"
        ],
        "intruder": "CANDLE",
        "explanation": "A firefly, the moon and a glowworm give or reflect light without burning. A candle needs a flame."
      },
      {
        "ingredient": "A pinch of discovery",
        "prompt": "These verbs mean to find something hidden.",
        "matching": [
          "LOCATE",
          "UNEARTH",
          "DISCOVER"
        ],
        "intruder": "CONCEAL",
        "explanation": "Locate, unearth and discover reveal something; conceal hides it."
      },
      {
        "ingredient": "A guiding thread",
        "prompt": "These words can follow GUIDE to make a familiar compound.",
        "matching": [
          "BOOK",
          "DOG",
          "POST"
        ],
        "intruder": "CAT",
        "explanation": "Guidebook, guide dog and guidepost point the way. Guide cat is not the matching compound."
      },
      {
        "ingredient": "A keeper's token",
        "prompt": "These can all be deliberately left as signs to follow.",
        "matching": [
          "TRAIL",
          "BREADCRUMBS",
          "FOOTPRINTS"
        ],
        "intruder": "HORIZON",
        "explanation": "A trail, breadcrumbs and footprints can mark a route. A horizon is the apparent edge of a view."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 2,
    "title": "Raincalling",
    "warning": "Keep the windows shut.",
    "answer": "CLOUD",
    "clue": "A three-word instruction to assemble rain overhead.",
    "grid": "SGATDOHELURLCTEA",
    "words": [
      "LET",
      "CLOUDS",
      "GATHER"
    ],
    "tubes": [
      [
        2,
        1,
        0,
        1
      ],
      [
        2,
        0,
        0,
        4
      ],
      [
        3,
        4,
        3,
        0
      ],
      [
        2,
        1,
        4,
        1
      ],
      [
        4,
        3,
        2,
        3
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Bring rain to dry ground.",
    "decipherClue": "I can cast a shadow without being solid, and carry rain without a bucket.",
    "gather": [
      {
        "ingredient": "A vial of condensation",
        "prompt": "These are made of condensed liquid-water droplets.",
        "matching": [
          "MIST",
          "FOG",
          "DEW"
        ],
        "intruder": "SOOT",
        "explanation": "Mist, fog and dew contain liquid water droplets. Soot is a carbon-rich product of burning."
      },
      {
        "ingredient": "A rainward stitch",
        "prompt": "These words can follow RAIN.",
        "matching": [
          "BOW",
          "COAT",
          "DROP"
        ],
        "intruder": "BOLT",
        "explanation": "Rainbow, raincoat and raindrop are familiar compounds. The bolt belongs with thunder, not rain."
      },
      {
        "ingredient": "A skyful of water",
        "prompt": "These forms of precipitation fall from clouds.",
        "matching": [
          "RAIN",
          "SNOW",
          "SLEET"
        ],
        "intruder": "FROST",
        "explanation": "Rain, snow and sleet fall from clouds. Frost forms directly on a cold surface."
      },
      {
        "ingredient": "A soft landing",
        "prompt": "These verbs mean to make something wet.",
        "matching": [
          "DAMPEN",
          "SOAK",
          "DRENCH"
        ],
        "intruder": "PARCH",
        "explanation": "Dampen, soak and drench add moisture. Parch means to dry out."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 3,
    "title": "Dreamward",
    "warning": "Do not cast while driving.",
    "answer": "DREAM",
    "clue": "A three-word instruction for gentler sleeping visions.",
    "grid": "MEDNPIEIDAKKERMS",
    "words": [
      "KEEP",
      "DREAMS",
      "KIND"
    ],
    "tubes": [
      [
        3,
        1,
        3,
        2
      ],
      [
        3,
        2,
        1,
        4
      ],
      [
        0,
        1,
        2,
        0
      ],
      [
        4,
        3,
        4,
        0
      ],
      [
        4,
        1,
        0,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Protect a sleeper from bad dreams.",
    "decipherClue": "I can give you a story while your eyes stay closed.",
    "gather": [
      {
        "ingredient": "A sliver of bedtime",
        "prompt": "These words can follow NIGHT.",
        "matching": [
          "GOWN",
          "CAP",
          "STAND"
        ],
        "intruder": "PILLOW",
        "explanation": "Nightgown, nightcap and nightstand belong to bedtime. Nightpillow is not the matching compound."
      },
      {
        "ingredient": "A calming breath",
        "prompt": "These words mean peaceful or untroubled.",
        "matching": [
          "SERENE",
          "TRANQUIL",
          "PLACID"
        ],
        "intruder": "FRANTIC",
        "explanation": "Serene, tranquil and placid describe calm. Frantic describes agitation."
      },
      {
        "ingredient": "A feather of sleep",
        "prompt": "These animals are birds whose feathers could fill a pillow.",
        "matching": [
          "GOOSE",
          "DUCK",
          "EIDER"
        ],
        "intruder": "BAT",
        "explanation": "Goose, duck and eider are birds. A bat is a mammal and has no feathers."
      },
      {
        "ingredient": "A dreamer's promise",
        "prompt": "These verbs mean to protect.",
        "matching": [
          "GUARD",
          "SHIELD",
          "DEFEND"
        ],
        "intruder": "THREATEN",
        "explanation": "Guard, shield and defend protect the sleeper. Threaten does the opposite."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 4,
    "title": "Hearthspark",
    "warning": "Keep sleeves clear.",
    "answer": "FLAME",
    "clue": "A three-word instruction to restart the hearth.",
    "grid": "BERSMTEJHEKPEAWH",
    "words": [
      "WAKE",
      "THE",
      "EMBERS"
    ],
    "tubes": [
      [
        0,
        1,
        3,
        4
      ],
      [
        2,
        3,
        0,
        3
      ],
      [
        1,
        4,
        0,
        4
      ],
      [
        3,
        2,
        1,
        0
      ],
      [
        1,
        2,
        4,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Wake a cold hearth without setting the cottage alight.",
    "decipherClue": "I have a tongue but cannot speak. Feed me fuel and I grow.",
    "gather": [
      {
        "ingredient": "A bed of fuel",
        "prompt": "These can fuel a wood-burning hearth.",
        "matching": [
          "LOG",
          "CHARCOAL",
          "KINDLING"
        ],
        "intruder": "ASH",
        "explanation": "Logs, charcoal and kindling can burn. Ash is the mineral residue already left by burning."
      },
      {
        "ingredient": "A hearthkeeper's hand",
        "prompt": "These are fireplace tools.",
        "matching": [
          "POKER",
          "TONGS",
          "BELLOWS"
        ],
        "intruder": "WHISK",
        "explanation": "A poker, tongs and bellows tend a fire. A whisk belongs in the kitchen."
      },
      {
        "ingredient": "A spark of language",
        "prompt": "These words can come before FIRE.",
        "matching": [
          "CAMP",
          "BON",
          "WILD"
        ],
        "intruder": "WARM",
        "explanation": "Campfire, bonfire and wildfire are familiar words. Warmfire is not."
      },
      {
        "ingredient": "A safe boundary",
        "prompt": "These verbs mean to put a fire out.",
        "matching": [
          "DOUSE",
          "QUENCH",
          "EXTINGUISH"
        ],
        "intruder": "KINDLE",
        "explanation": "Douse, quench and extinguish end a fire. Kindle starts one; leave it out of the safety charm."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 5,
    "title": "Mooncatcher",
    "warning": "Best stored out of sunlight.",
    "answer": "LUNAR",
    "clue": "A three-word instruction for keeping borrowed moonlight.",
    "grid": "LOHLDFKAUTNOHEMO",
    "words": [
      "HOLD",
      "THE",
      "MOON"
    ],
    "tubes": [
      [
        0,
        3,
        2,
        4
      ],
      [
        0,
        1,
        4,
        0
      ],
      [
        3,
        1,
        0,
        4
      ],
      [
        2,
        3,
        2,
        3
      ],
      [
        1,
        4,
        2,
        1
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Catch moonlight in a bottle.",
    "decipherClue": "This five-letter adjective belongs to the moon rather than the sun.",
    "gather": [
      {
        "ingredient": "A silver measure",
        "prompt": "These are names of moon phases.",
        "matching": [
          "NEW",
          "FULL",
          "GIBBOUS"
        ],
        "intruder": "SOLSTICE",
        "explanation": "New, full and gibbous describe the moon's phases. A solstice is an annual event linked to the sun."
      },
      {
        "ingredient": "A nightjar's rim",
        "prompt": "These words can follow MOON.",
        "matching": [
          "BEAM",
          "RISE",
          "STONE"
        ],
        "intruder": "BURN",
        "explanation": "Moonbeam, moonrise and moonstone are familiar compounds. Moonburn is not the matching everyday word."
      },
      {
        "ingredient": "A reflected gleam",
        "prompt": "These return light rather than making their own.",
        "matching": [
          "MIRROR",
          "MOON",
          "REFLECTOR"
        ],
        "intruder": "LANTERN",
        "explanation": "A mirror, the moon and a reflector return incoming light. A lit lantern supplies light of its own."
      },
      {
        "ingredient": "A bottle's hush",
        "prompt": "These verbs mean to enclose or keep in.",
        "matching": [
          "CONTAIN",
          "ENCLOSE",
          "CONFINE"
        ],
        "intruder": "RELEASE",
        "explanation": "Contain, enclose and confine keep the moonlight in. Release lets it out."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 6,
    "title": "Orchard’s Blessing",
    "warning": "Bring a void basket.",
    "answer": "APPLE",
    "clue": "A three-word instruction for the orchard.",
    "grid": "PRUIIETRJNEFOILT",
    "words": [
      "LET",
      "FRUIT",
      "RIPEN"
    ],
    "tubes": [
      [
        1,
        4,
        0,
        2
      ],
      [
        4,
        2,
        3,
        2
      ],
      [
        1,
        4,
        1,
        0
      ],
      [
        3,
        1,
        4,
        3
      ],
      [
        0,
        3,
        2,
        0
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Ripen an orchard's fruit.",
    "decipherClue": "I am an orchard fruit, a pie filling, and a word that can come before sauce, core and blossom.",
    "gather": [
      {
        "ingredient": "A basket of pomes",
        "prompt": "These fruits are pomes rather than stone fruits.",
        "matching": [
          "APPLE",
          "PEAR",
          "QUINCE"
        ],
        "intruder": "PEACH",
        "explanation": "Apple, pear and quince are pomes. A peach is a stone fruit with a pit."
      },
      {
        "ingredient": "A blossom's visitor",
        "prompt": "These insects can pollinate orchard blossoms.",
        "matching": [
          "BEE",
          "HOVERFLY",
          "BUTTERFLY"
        ],
        "intruder": "FLEA",
        "explanation": "Bees, hoverflies and butterflies visit flowers and can move pollen. A flea is a blood-feeding parasite."
      },
      {
        "ingredient": "A kernel of wordplay",
        "prompt": "These words can follow APPLE.",
        "matching": [
          "CORE",
          "SAUCE",
          "BLOSSOM"
        ],
        "intruder": "SHELL",
        "explanation": "Apple core, applesauce and apple blossom are familiar phrases. Apple shell is not the matching term."
      },
      {
        "ingredient": "A ripe decision",
        "prompt": "These describe fruit ready to eat, rather than not yet ripe.",
        "matching": [
          "RIPE",
          "MATURE",
          "READY"
        ],
        "intruder": "UNRIPE",
        "explanation": "Ripe, mature and ready indicate the fruit can be picked. Unripe says the opposite."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 7,
    "title": "Woodland Whisper",
    "warning": "Never take directions from a squirrel.",
    "answer": "GROVE",
    "clue": "A three-word instruction to listen to the woodland.",
    "grid": "ERESTHENTAHORERF",
    "words": [
      "HEAR",
      "THE",
      "TREES"
    ],
    "tubes": [
      [
        3,
        4,
        0,
        3
      ],
      [
        2,
        0,
        1,
        4
      ],
      [
        1,
        3,
        0,
        3
      ],
      [
        1,
        0,
        2,
        4
      ],
      [
        2,
        1,
        4,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Hear what the trees are saying.",
    "decipherClue": "I am a small group of trees, smaller than a forest.",
    "gather": [
      {
        "ingredient": "A leaf of kinship",
        "prompt": "These trees normally shed their leaves in autumn.",
        "matching": [
          "OAK",
          "BIRCH",
          "MAPLE"
        ],
        "intruder": "PINE",
        "explanation": "Oak, birch and maple are deciduous. A pine is evergreen."
      },
      {
        "ingredient": "A quiet approach",
        "prompt": "These verbs describe walking at an unhurried pace.",
        "matching": [
          "AMBLE",
          "STROLL",
          "SAUNTER"
        ],
        "intruder": "SPRINT",
        "explanation": "Amble, stroll and saunter are leisurely ways to walk. Sprint means to run fast."
      },
      {
        "ingredient": "A wooden syllable",
        "prompt": "These words can follow WOOD.",
        "matching": [
          "LAND",
          "PECKER",
          "CUTTER"
        ],
        "intruder": "PETAL",
        "explanation": "Woodland, woodpecker and woodcutter belong together. Woodpetal does not."
      },
      {
        "ingredient": "A listening root",
        "prompt": "These are parts of a tree.",
        "matching": [
          "BARK",
          "SAPWOOD",
          "ROOT"
        ],
        "intruder": "ANTLER",
        "explanation": "Bark, sapwood and roots belong to a tree. An antler belongs to an animal."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 8,
    "title": "Storybinding",
    "warning": "Finish what you start.",
    "answer": "QUILL",
    "clue": "A three-word instruction to fasten the text in place.",
    "grid": "BIDONSWRDTIEHEST",
    "words": [
      "BIND",
      "THESE",
      "WORDS"
    ],
    "tubes": [
      [
        2,
        4,
        4,
        3
      ],
      [
        1,
        4,
        3,
        2
      ],
      [
        1,
        3,
        2,
        0
      ],
      [
        3,
        0,
        1,
        4
      ],
      [
        1,
        0,
        2,
        0
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Bind a story so its words stop wandering.",
    "decipherClue": "Once a feather, I can become a tool that leaves ink behind.",
    "gather": [
      {
        "ingredient": "A writer's point",
        "prompt": "These tools can be used to write with ink.",
        "matching": [
          "QUILL",
          "FOUNTAIN PEN",
          "DIP PEN"
        ],
        "intruder": "CHALK",
        "explanation": "A quill, fountain pen and dip pen use ink. Chalk leaves a dry mineral mark."
      },
      {
        "ingredient": "A binding's backbone",
        "prompt": "These are parts of a bound book.",
        "matching": [
          "SPINE",
          "COVER",
          "PAGE"
        ],
        "intruder": "REED",
        "explanation": "A spine, cover and pages belong to a book. A reed is a plant, even if it can become a pen."
      },
      {
        "ingredient": "A story's turning",
        "prompt": "These words can follow STORY.",
        "matching": [
          "BOOK",
          "TELLER",
          "LINE"
        ],
        "intruder": "LATCH",
        "explanation": "Storybook, storyteller and storyline belong together. Storylatch does not."
      },
      {
        "ingredient": "A thread of sequence",
        "prompt": "These words indicate narrative order.",
        "matching": [
          "FIRST",
          "NEXT",
          "FINALLY"
        ],
        "intruder": "SIDEWAYS",
        "explanation": "First, next and finally order a sequence. Sideways describes a direction, not a point in the story."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 9,
    "title": "River’s Favor",
    "warning": "Don't forget your waders.",
    "answer": "RIVER",
    "clue": "A three-word instruction to open a crossing.",
    "grid": "EWAEHSRTXTTPIVAR",
    "words": [
      "PART",
      "THE",
      "WATERS"
    ],
    "tubes": [
      [
        2,
        3,
        2,
        0
      ],
      [
        1,
        3,
        1,
        0
      ],
      [
        2,
        4,
        2,
        0
      ],
      [
        4,
        0,
        4,
        1
      ],
      [
        3,
        4,
        3,
        1
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Help a traveler cross moving water safely.",
    "decipherClue": "I run through the land, have banks, and need no legs.",
    "gather": [
      {
        "ingredient": "A banker's offering",
        "prompt": "These words can follow RIVER.",
        "matching": [
          "BANK",
          "BED",
          "MOUTH"
        ],
        "intruder": "ROOF",
        "explanation": "A river has a bank, bed and mouth. It has no roof."
      },
      {
        "ingredient": "A crossing's support",
        "prompt": "These can help a traveler cross a river without swimming.",
        "matching": [
          "BRIDGE",
          "FERRY",
          "FORD"
        ],
        "intruder": "WHIRLPOOL",
        "explanation": "A bridge, ferry or shallow ford offers a crossing. A whirlpool is a hazard, not a crossing."
      },
      {
        "ingredient": "A current's counsel",
        "prompt": "These verbs describe movement of water.",
        "matching": [
          "FLOW",
          "TRICKLE",
          "STREAM"
        ],
        "intruder": "PETRIFY",
        "explanation": "Flow, trickle and stream describe moving water. Petrify means to turn to stone or terrify."
      },
      {
        "ingredient": "A pair of dry feet",
        "prompt": "These are waterproof footwear for wading.",
        "matching": [
          "WADERS",
          "WELLINGTONS",
          "GUMBOOTS"
        ],
        "intruder": "SLIPPERS",
        "explanation": "Waders, wellingtons and gumboots are made to keep water out. Slippers are not wading footwear."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 10,
    "title": "Everblossom",
    "warning": "Expect pollen, best paired with an allergy potion.",
    "answer": "BLOOM",
    "clue": "A three-word instruction for closed buds.",
    "grid": "LFERTOWSELEOSWNP",
    "words": [
      "LET",
      "FLOWERS",
      "OPEN"
    ],
    "tubes": [
      [
        1,
        4,
        2,
        1
      ],
      [
        1,
        2,
        2,
        4
      ],
      [
        0,
        4,
        1,
        3
      ],
      [
        0,
        3,
        2,
        3
      ],
      [
        0,
        3,
        0,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Open flowers that have forgotten how.",
    "decipherClue": "I can mean a flower, or what a flower does when it opens.",
    "gather": [
      {
        "ingredient": "A flower's anatomy",
        "prompt": "These are parts of a flower.",
        "matching": [
          "PETAL",
          "STAMEN",
          "SEPAL"
        ],
        "intruder": "FEATHER",
        "explanation": "Petals, stamens and sepals belong to flowers. Feathers belong to birds."
      },
      {
        "ingredient": "A garden's names",
        "prompt": "These are flowers, not tree species.",
        "matching": [
          "IRIS",
          "LILY",
          "TULIP"
        ],
        "intruder": "ELM",
        "explanation": "Iris, lily and tulip are flowers. Elm is a tree."
      },
      {
        "ingredient": "A bud's permission",
        "prompt": "These verbs can describe something opening out.",
        "matching": [
          "UNFURL",
          "UNFOLD",
          "EXPAND"
        ],
        "intruder": "SHRIVEL",
        "explanation": "Unfurl, unfold and expand open something out. Shrivel makes it contract."
      },
      {
        "ingredient": "A floral ending",
        "prompt": "These words can follow SUN to name flowering plants.",
        "matching": [
          "FLOWER",
          "DROP",
          "ROSE"
        ],
        "intruder": "BEAM",
        "explanation": "Sunflower, sundrop and sunrose name plants. A sunbeam is light, not a plant."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 11,
    "title": "Lionheart",
    "warning": "Courage is not a plan.",
    "answer": "BRAVE",
    "clue": "A three-word instruction for courage.",
    "grid": "SREFAMAELAKWMLQV",
    "words": [
      "MAKE",
      "FEAR",
      "SMALL"
    ],
    "tubes": [
      [
        2,
        3,
        1,
        3
      ],
      [
        4,
        0,
        3,
        0
      ],
      [
        2,
        4,
        3,
        2
      ],
      [
        4,
        1,
        4,
        2
      ],
      [
        1,
        0,
        1,
        0
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Make fear small enough to act despite it.",
    "decipherClue": "I describe someone who acts despite fear, not someone who never feels it.",
    "gather": [
      {
        "ingredient": "A steady heart",
        "prompt": "These words mean courageous.",
        "matching": [
          "VALIANT",
          "BOLD",
          "DAUNTLESS"
        ],
        "intruder": "TIMID",
        "explanation": "Valiant, bold and dauntless express courage. Timid expresses a lack of confidence or boldness."
      },
      {
        "ingredient": "A lion's inheritance",
        "prompt": "These are members of the cat family.",
        "matching": [
          "LION",
          "TIGER",
          "LEOPARD"
        ],
        "intruder": "WOLF",
        "explanation": "Lion, tiger and leopard are felids. A wolf belongs to the dog family."
      },
      {
        "ingredient": "A fear's undoing",
        "prompt": "These words can follow FEAR to make a standard word.",
        "matching": [
          "LESS",
          "FUL",
          "SOME"
        ],
        "intruder": "ISH",
        "explanation": "Fearless, fearful and fearsome are standard words. Fearish is not the matching standard form."
      },
      {
        "ingredient": "A protector's vow",
        "prompt": "These verbs mean to stand against a threat.",
        "matching": [
          "RESIST",
          "DEFY",
          "WITHSTAND"
        ],
        "intruder": "SURRENDER",
        "explanation": "Resist, defy and withstand oppose a threat. Surrender yields to it."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 12,
    "title": "Familiar’s Call",
    "warning": "Keep out of reach of playful cats",
    "answer": "PURRS",
    "clue": "A three-word instruction to bring your companion home.",
    "grid": "WDEYIRMFAUMAGILI",
    "words": [
      "GUIDE",
      "MY",
      "FAMILIAR"
    ],
    "tubes": [
      [
        3,
        4,
        0,
        1
      ],
      [
        2,
        0,
        3,
        4
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        0,
        2,
        1,
        2
      ],
      [
        1,
        0,
        4,
        3
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Call a cat familiar home.",
    "decipherClue": "These soft rumbling sounds are often made by a contented cat. Five letters, plural.",
    "gather": [
      {
        "ingredient": "A feline likeness",
        "prompt": "These are domestic cat breeds.",
        "matching": [
          "SIAMESE",
          "PERSIAN",
          "RAGDOLL"
        ],
        "intruder": "BEAGLE",
        "explanation": "Siamese, Persian and Ragdoll are cat breeds. Beagle is a dog breed."
      },
      {
        "ingredient": "A familiar sound",
        "prompt": "These sounds are associated with cats.",
        "matching": [
          "MEOW",
          "PURR",
          "YOWL"
        ],
        "intruder": "NEIGH",
        "explanation": "Cats meow, purr and yowl. Neigh is a horse's sound."
      },
      {
        "ingredient": "A cat's beginning",
        "prompt": "These make a single word when placed after CAT.",
        "matching": [
          "NAP",
          "NIP",
          "FISH"
        ],
        "intruder": "LEASH",
        "explanation": "Catnap, catnip and catfish are established single words. Cat leash is a two-word description, not a closed compound."
      },
      {
        "ingredient": "A homeward thread",
        "prompt": "These can identify a pet's owner or home.",
        "matching": [
          "MICROCHIP",
          "ID TAG",
          "COLLAR ADDRESS"
        ],
        "intruder": "WHISKER",
        "explanation": "A registered microchip, ID tag or address on a collar can identify a pet's home. A whisker cannot supply that information."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 13,
    "title": "Winterveil",
    "warning": "Bring a coat.",
    "answer": "FROST",
    "clue": "A three-word instruction for a gentle winter covering.",
    "grid": "RLYWTPAIFSVNORET",
    "words": [
      "LAY",
      "WINTER",
      "SOFT"
    ],
    "tubes": [
      [
        4,
        3,
        1,
        3
      ],
      [
        4,
        2,
        0,
        1
      ],
      [
        2,
        1,
        0,
        2
      ],
      [
        4,
        0,
        4,
        3
      ],
      [
        1,
        0,
        3,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Lay a thin winter covering over the garden.",
    "decipherClue": "I form icy crystals on cold surfaces rather than falling as flakes.",
    "gather": [
      {
        "ingredient": "A cold signature",
        "prompt": "These form directly on cold surfaces.",
        "matching": [
          "HOARFROST",
          "RIME",
          "ICE GLAZE"
        ],
        "intruder": "HAIL",
        "explanation": "Hoarfrost, rime and ice glaze form on surfaces. Hail grows in clouds and falls."
      },
      {
        "ingredient": "A winter layer",
        "prompt": "These are worn around the neck for warmth.",
        "matching": [
          "SCARF",
          "MUFFLER",
          "NECK WARMER"
        ],
        "intruder": "MITTEN",
        "explanation": "Scarf, muffler and neck warmer cover the neck. A mitten covers a hand."
      },
      {
        "ingredient": "A frozen compound",
        "prompt": "These words can follow FROST.",
        "matching": [
          "BITE",
          "BOUND",
          "WORK"
        ],
        "intruder": "BERRY",
        "explanation": "Frostbite, frostbound and frostwork are standard words. Frostberry is not the intended standard compound."
      },
      {
        "ingredient": "A soft covering",
        "prompt": "These suggest a light, thin application.",
        "matching": [
          "DUSTING",
          "SPRINKLING",
          "SCATTERING"
        ],
        "intruder": "DELUGE",
        "explanation": "A dusting, sprinkling or scattering is light. A deluge is overwhelming and heavy."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 14,
    "title": "Birdtongue",
    "warning": "Word travels fast, never tell a bird a secret.",
    "answer": "CHIRP",
    "clue": "A three-word instruction for understanding birds.",
    "grid": "AKAAERIRPBDESSTL",
    "words": [
      "LET",
      "BIRDS",
      "SPEAK"
    ],
    "tubes": [
      [
        1,
        4,
        3,
        0
      ],
      [
        3,
        2,
        3,
        1
      ],
      [
        3,
        2,
        0,
        2
      ],
      [
        0,
        4,
        2,
        1
      ],
      [
        0,
        4,
        1,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Understand a bird's message.",
    "decipherClue": "I am a short, sharp bird call; I am also a verb for making it.",
    "gather": [
      {
        "ingredient": "A feathered throat",
        "prompt": "These animals are birds.",
        "matching": [
          "WREN",
          "ROBIN",
          "FINCH"
        ],
        "intruder": "BAT",
        "explanation": "Wrens, robins and finches are birds. Bats are mammals."
      },
      {
        "ingredient": "A bird's words",
        "prompt": "These are conventional bird-call verbs.",
        "matching": [
          "CHIRP",
          "COO",
          "CAW"
        ],
        "intruder": "BLEAT",
        "explanation": "Birds chirp, coo or caw. Bleat describes sheep and goats."
      },
      {
        "ingredient": "A message's wing",
        "prompt": "These words can follow SONG.",
        "matching": [
          "BIRD",
          "BOOK",
          "WRITER"
        ],
        "intruder": "BEAK",
        "explanation": "Songbird, songbook and songwriter are standard words. Songbeak is not."
      },
      {
        "ingredient": "A listener's duty",
        "prompt": "These mean to communicate using the voice.",
        "matching": [
          "SPEAK",
          "UTTER",
          "VOICE"
        ],
        "intruder": "OVERHEAR",
        "explanation": "Speak, utter and voice produce a message. Overhear receives one."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 15,
    "title": "Lockturner",
    "warning": "Some doors stay shut for a reason.",
    "answer": "LATCH",
    "clue": "A three-word instruction for opening the way.",
    "grid": "RYOCEELKVNTBRUUQ",
    "words": [
      "TURN",
      "EVERY",
      "LOCK"
    ],
    "tubes": [
      [
        4,
        0,
        4,
        1
      ],
      [
        0,
        3,
        2,
        0
      ],
      [
        1,
        4,
        1,
        2
      ],
      [
        4,
        0,
        3,
        2
      ],
      [
        3,
        2,
        1,
        3
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Open a door without breaking it.",
    "decipherClue": "Lift or release me and a door may open. I fasten it without necessarily using a key.",
    "gather": [
      {
        "ingredient": "A locksmith's trade",
        "prompt": "These are types of locks.",
        "matching": [
          "PADLOCK",
          "DEADBOLT",
          "MORTISE"
        ],
        "intruder": "DOORBELL",
        "explanation": "Padlock, deadbolt and mortise name locks or lock forms. A doorbell announces a visitor."
      },
      {
        "ingredient": "An opening syllable",
        "prompt": "These words can follow KEY.",
        "matching": [
          "HOLE",
          "STONE",
          "BOARD"
        ],
        "intruder": "HINGE",
        "explanation": "Keyhole, keystone and keyboard are standard compounds. Keyhinge is not."
      },
      {
        "ingredient": "A gentle entry",
        "prompt": "These mean to undo a fastening.",
        "matching": [
          "UNLATCH",
          "UNLOCK",
          "UNBOLT"
        ],
        "intruder": "BARRICADE",
        "explanation": "Unlatch, unlock and unbolt open fastenings. Barricade blocks entry."
      },
      {
        "ingredient": "A door's joints",
        "prompt": "These are door hardware.",
        "matching": [
          "HINGE",
          "KNOB",
          "STRIKE PLATE"
        ],
        "intruder": "DRAINPIPE",
        "explanation": "A hinge, knob and strike plate belong to a door. A drainpipe carries water away."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 16,
    "title": "Quietus",
    "warning": "Set an alarm first.",
    "answer": "PEACE",
    "clue": "A three-word instruction to quiet the room.",
    "grid": "IRPFOSEOTNRTELSE",
    "words": [
      "LET",
      "NOISE",
      "REST"
    ],
    "tubes": [
      [
        3,
        4,
        3,
        1
      ],
      [
        0,
        4,
        0,
        2
      ],
      [
        3,
        2,
        0,
        2
      ],
      [
        4,
        1,
        4,
        0
      ],
      [
        1,
        2,
        1,
        3
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Settle a noisy room into quiet.",
    "decipherClue": "I can be made after a quarrel, kept by a treaty, or found in a quiet moment.",
    "gather": [
      {
        "ingredient": "A pause in the noise",
        "prompt": "These are rests or breaks.",
        "matching": [
          "PAUSE",
          "RESPITE",
          "RECESS"
        ],
        "intruder": "UPROAR",
        "explanation": "Pause, respite and recess name breaks. An uproar is a noisy disturbance."
      },
      {
        "ingredient": "A hush's language",
        "prompt": "These words can follow SOUND.",
        "matching": [
          "LESS",
          "PROOF",
          "TRACK"
        ],
        "intruder": "QUIET",
        "explanation": "Soundless, soundproof and soundtrack are standard words. Soundquiet is not."
      },
      {
        "ingredient": "A gentler voice",
        "prompt": "These can mean to soothe someone.",
        "matching": [
          "CALM",
          "PACIFY",
          "SETTLE"
        ],
        "intruder": "AGITATE",
        "explanation": "Calm, pacify and settle reduce disturbance. Agitate increases it."
      },
      {
        "ingredient": "A silence on paper",
        "prompt": "These punctuation marks can end a sentence.",
        "matching": [
          "PERIOD",
          "QUESTION MARK",
          "EXCLAMATION MARK"
        ],
        "intruder": "COMMA",
        "explanation": "A period, question mark or exclamation mark can close a sentence. A comma normally cannot; even written words need a place to stop."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 17,
    "title": "Sugarspell",
    "warning": "Carefully monitor bloodsugar during use.",
    "answer": "SUGAR",
    "clue": "A three-word instruction to add sweetness.",
    "grid": "EESFTWIEGRKLMASE",
    "words": [
      "MAKE",
      "LIFE",
      "SWEET"
    ],
    "tubes": [
      [
        4,
        0,
        2,
        1
      ],
      [
        4,
        1,
        3,
        0
      ],
      [
        2,
        1,
        0,
        2
      ],
      [
        0,
        3,
        2,
        3
      ],
      [
        4,
        1,
        4,
        3
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Sweeten a bitter moment.",
    "decipherClue": "I can be a cube, a syrup's ingredient, or something you stir into tea to sweeten it.",
    "gather": [
      {
        "ingredient": "A sweet measure",
        "prompt": "These are sugars, not a mineral salt.",
        "matching": [
          "SUCROSE",
          "GLUCOSE",
          "FRUCTOSE"
        ],
        "intruder": "SODIUM CHLORIDE",
        "explanation": "Sucrose, glucose and fructose are sugars. Sodium chloride is table salt."
      },
      {
        "ingredient": "A sugar's companion",
        "prompt": "These words can follow SUGAR.",
        "matching": [
          "CANE",
          "CUBE",
          "COAT"
        ],
        "intruder": "BOOT",
        "explanation": "Sugarcane, sugar cube and sugarcoat are familiar compounds. Sugarboot is not."
      },
      {
        "ingredient": "A sweet disguise",
        "prompt": "These describe something pleasant.",
        "matching": [
          "SWEET",
          "CHARMING",
          "DELIGHTFUL"
        ],
        "intruder": "ACRID",
        "explanation": "Sweet, charming and delightful describe pleasant things. Acrid describes a harsh smell or taste."
      },
      {
        "ingredient": "A confectioner's finish",
        "prompt": "These are sweet coatings put on cakes or pastries.",
        "matching": [
          "ICING",
          "FROSTING",
          "GLAZE"
        ],
        "intruder": "GRAVEL",
        "explanation": "Icing, frosting and sweet glaze coat baked goods. Gravel belongs on a path."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 18,
    "title": "Fairwind",
    "warning": "Wear overalls, or shorts under your witch's robes.",
    "answer": "GUSTS",
    "clue": "A three-word instruction for a sailing wind.",
    "grid": "ASCKISEZLLHAIFLT",
    "words": [
      "FILL",
      "THE",
      "SAILS"
    ],
    "tubes": [
      [
        0,
        3,
        1,
        2
      ],
      [
        2,
        4,
        3,
        1
      ],
      [
        0,
        3,
        0,
        2
      ],
      [
        4,
        2,
        4,
        1
      ],
      [
        1,
        0,
        3,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Fill a sailor's sails with a favorable wind.",
    "decipherClue": "These sudden bursts of wind can fill a sail or snatch a hat. Five letters, plural.",
    "gather": [
      {
        "ingredient": "A breath from the compass",
        "prompt": "These are cardinal compass directions.",
        "matching": [
          "NORTH",
          "EAST",
          "WEST"
        ],
        "intruder": "PORT",
        "explanation": "North, east and west are fixed compass directions. Port is the left side of a vessel facing forward."
      },
      {
        "ingredient": "A sailmaker's knot",
        "prompt": "These are sailing knots.",
        "matching": [
          "BOWLINE",
          "CLOVE HITCH",
          "REEF KNOT"
        ],
        "intruder": "PURL",
        "explanation": "Bowline, clove hitch and reef knot fasten ropes. Purl is a knitting stitch."
      },
      {
        "ingredient": "A following word",
        "prompt": "These words can follow WIND.",
        "matching": [
          "MILL",
          "SOCK",
          "FALL"
        ],
        "intruder": "ANCHOR",
        "explanation": "Windmill, windsock and windfall are standard words. Windanchor is not."
      },
      {
        "ingredient": "A useful canvas",
        "prompt": "These are names for sails.",
        "matching": [
          "JIB",
          "GENOA",
          "SPINNAKER"
        ],
        "intruder": "RUDDER",
        "explanation": "A jib, genoa and spinnaker catch the wind. A rudder steers through water."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 19,
    "title": "Crystal Sight",
    "warning": "Not every answer is useful.",
    "answer": "PRISM",
    "clue": "A three-word instruction for revealing what lies ahead.",
    "grid": "ATIAHWWTWOESBUHS",
    "words": [
      "SHOW",
      "WHAT",
      "WAITS"
    ],
    "tubes": [
      [
        3,
        4,
        0,
        4
      ],
      [
        1,
        3,
        0,
        3
      ],
      [
        3,
        0,
        2,
        4
      ],
      [
        1,
        2,
        0,
        2
      ],
      [
        4,
        1,
        2,
        1
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "See what is hidden in an ordinary beam of light.",
    "decipherClue": "Send white light through me and I can separate it into colors.",
    "gather": [
      {
        "ingredient": "A clear medium",
        "prompt": "These are normally transparent when clear and unclouded.",
        "matching": [
          "GLASS",
          "QUARTZ",
          "WATER"
        ],
        "intruder": "GRANITE",
        "explanation": "Clear glass, quartz and water can transmit light. Granite is opaque."
      },
      {
        "ingredient": "A spectrum's edge",
        "prompt": "These are visible-light color names.",
        "matching": [
          "VIOLET",
          "INDIGO",
          "RED"
        ],
        "intruder": "INFRARED",
        "explanation": "Violet, indigo and red are visible colors. Infrared lies outside human visible light."
      },
      {
        "ingredient": "A second sight",
        "prompt": "These words can follow FORE.",
        "matching": [
          "SIGHT",
          "TELL",
          "CAST"
        ],
        "intruder": "YESTERDAY",
        "explanation": "Foresight, foretell and forecast concern what lies ahead. Foreyesterday is not a word."
      },
      {
        "ingredient": "A lens's work",
        "prompt": "These describe optical changes to light.",
        "matching": [
          "REFRACTION",
          "REFLECTION",
          "DISPERSION"
        ],
        "intruder": "FERMENTATION",
        "explanation": "Refraction, reflection and dispersion change light's direction or spread. Fermentation is a chemical process."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 20,
    "title": "Spiceward",
    "warning": "Start with a small pinch.",
    "answer": "SPICE",
    "clue": "A three-word instruction for a warming meal.",
    "grid": "KEGMEARGUPWRSPPE",
    "words": [
      "KEEP",
      "SUPPER",
      "WARM"
    ],
    "tubes": [
      [
        0,
        1,
        0,
        3
      ],
      [
        0,
        1,
        2,
        3
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        0,
        4,
        3,
        4
      ],
      [
        2,
        4,
        1,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Keep a meal warm in flavor as well as temperature.",
    "decipherClue": "I season a dish, and I can also mean the interest added to a dull story.",
    "gather": [
      {
        "ingredient": "A warming pinch",
        "prompt": "These spices come from dried seeds or fruits.",
        "matching": [
          "CUMIN",
          "PEPPER",
          "CARDAMOM"
        ],
        "intruder": "CINNAMON",
        "explanation": "Cumin seeds, pepper fruits and cardamom seeds are used as spices. Cinnamon comes from bark."
      },
      {
        "ingredient": "A mortar's motion",
        "prompt": "These verbs can mean to break spices into smaller pieces.",
        "matching": [
          "GRIND",
          "CRUSH",
          "PULVERIZE"
        ],
        "intruder": "SIFT",
        "explanation": "Grinding, crushing and pulverizing reduce particle size. Sifting separates particles already present."
      },
      {
        "ingredient": "A kitchen's compound",
        "prompt": "These words can follow PEPPER.",
        "matching": [
          "CORN",
          "MINT",
          "POT"
        ],
        "intruder": "CHIMNEY",
        "explanation": "Peppercorn, peppermint and pepperpot are established words. Pepperchimney is not."
      },
      {
        "ingredient": "A keeper of heat",
        "prompt": "These help retain heat around a meal.",
        "matching": [
          "LID",
          "INSULATION",
          "THERMOS"
        ],
        "intruder": "ICE PACK",
        "explanation": "A lid, insulation and a thermos help retain warmth. An ice pack cools the meal."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 21,
    "title": "Mending Charm",
    "warning": "Remove the garment first.",
    "answer": "WEAVE",
    "clue": "A three-word instruction for mending fabric.",
    "grid": "OREPTNLHTIWOAHOJ",
    "words": [
      "JOIN",
      "WHAT",
      "TORE"
    ],
    "tubes": [
      [
        3,
        0,
        3,
        4
      ],
      [
        2,
        3,
        0,
        4
      ],
      [
        0,
        3,
        4,
        1
      ],
      [
        2,
        1,
        0,
        1
      ],
      [
        2,
        1,
        2,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Repair torn cloth by bringing its threads together.",
    "decipherClue": "I cross threads over and under to turn them into cloth.",
    "gather": [
      {
        "ingredient": "A thread's origin",
        "prompt": "These fibers come from animals.",
        "matching": [
          "WOOL",
          "SILK",
          "CASHMERE"
        ],
        "intruder": "LINEN",
        "explanation": "Wool, silk and cashmere come from animals. Linen comes from flax."
      },
      {
        "ingredient": "A tailor's repair",
        "prompt": "These verbs mean to repair fabric.",
        "matching": [
          "DARN",
          "PATCH",
          "MEND"
        ],
        "intruder": "UNRAVEL",
        "explanation": "Darn, patch and mend repair cloth. Unravel pulls it apart."
      },
      {
        "ingredient": "A stitch in language",
        "prompt": "These words can come before STITCH.",
        "matching": [
          "CROSS",
          "BACK",
          "CHAIN"
        ],
        "intruder": "ZIP",
        "explanation": "Cross-stitch, backstitch and chain stitch are stitches. Zipstitch is not the matching standard term."
      },
      {
        "ingredient": "A loom's directions",
        "prompt": "These are used in weaving, rather than fastening clothes shut.",
        "matching": [
          "WARP",
          "WEFT",
          "SHUTTLE"
        ],
        "intruder": "ZIPPER",
        "explanation": "Warp and weft are thread directions; a shuttle carries weft. A zipper fastens a finished garment."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 22,
    "title": "Autumn’s Touch",
    "warning": "Keep clear of houseplants.",
    "answer": "MAPLE",
    "clue": "A three-word instruction for autumn color.",
    "grid": "ODLOKTGSUREENLAV",
    "words": [
      "TURN",
      "LEAVES",
      "GOLD"
    ],
    "tubes": [
      [
        1,
        3,
        3,
        4
      ],
      [
        2,
        0,
        1,
        4
      ],
      [
        3,
        1,
        2,
        0
      ],
      [
        2,
        0,
        2,
        4
      ],
      [
        3,
        1,
        4,
        0
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Turn leaves to autumn gold.",
    "decipherClue": "I am a tree whose sap becomes a familiar syrup and whose leaf appears on Canada's flag.",
    "gather": [
      {
        "ingredient": "A fall palette",
        "prompt": "These are warm autumn color names.",
        "matching": [
          "RUSSET",
          "OCHRE",
          "AMBER"
        ],
        "intruder": "CYAN",
        "explanation": "Russet, ochre and amber suggest autumn reds, yellows and golds. Cyan is blue-green."
      },
      {
        "ingredient": "A deciduous offering",
        "prompt": "These trees normally shed leaves for winter.",
        "matching": [
          "MAPLE",
          "BEECH",
          "BIRCH"
        ],
        "intruder": "CEDAR",
        "explanation": "Maple, beech and birch are deciduous. Cedars retain evergreen foliage."
      },
      {
        "ingredient": "A season's other name",
        "prompt": "These can all mean to fall or move downward.",
        "matching": [
          "DROP",
          "DESCEND",
          "SINK"
        ],
        "intruder": "RISE",
        "explanation": "Drop, descend and sink move downward, echoing autumn's other name, fall. Rise moves upward."
      },
      {
        "ingredient": "A harvest's measure",
        "prompt": "These fruits are common autumn orchard harvests in temperate climates.",
        "matching": [
          "APPLE",
          "PEAR",
          "QUINCE"
        ],
        "intruder": "PINEAPPLE",
        "explanation": "Apples, pears and quinces ripen in temperate orchards. Pineapple is a tropical crop, not an orchard tree fruit."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 23,
    "title": "Shadowplay",
    "warning": "A remedy for restless cats.",
    "answer": "SHADE",
    "clue": "A three-word instruction to animate a shadow.",
    "grid": "ANSOCDDWEAETOLHS",
    "words": [
      "LET",
      "SHADOWS",
      "DANCE"
    ],
    "tubes": [
      [
        2,
        0,
        4,
        0
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        1,
        2,
        0,
        2
      ],
      [
        3,
        0,
        1,
        4
      ],
      [
        3,
        1,
        3,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Make a shadow move while its owner stays still.",
    "decipherClue": "I can mean shelter from sunlight, a degree of color, or a ghost.",
    "gather": [
      {
        "ingredient": "A silhouette's source",
        "prompt": "These light sources can cast a shadow.",
        "matching": [
          "CANDLE",
          "TORCH",
          "SPOTLIGHT"
        ],
        "intruder": "ECHO",
        "explanation": "A candle, torch and spotlight provide light that can cast a shadow. An echo is reflected sound."
      },
      {
        "ingredient": "A darkening word",
        "prompt": "These words can follow SHADOW.",
        "matching": [
          "PLAY",
          "BOX",
          "LAND"
        ],
        "intruder": "BEAM",
        "explanation": "Shadowplay, shadowbox and shadowland are established words. Shadowbeam is not."
      },
      {
        "ingredient": "A dancer's step",
        "prompt": "These are dance forms.",
        "matching": [
          "WALTZ",
          "TANGO",
          "POLKA"
        ],
        "intruder": "OPERA",
        "explanation": "Waltz, tango and polka are dances. Opera is staged musical drama, not a dance form."
      },
      {
        "ingredient": "A light's obstacle",
        "prompt": "These opaque objects can make a hand-sized shadow.",
        "matching": [
          "HAND",
          "CARDBOARD",
          "WOOD BLOCK"
        ],
        "intruder": "CLEAR GLASS",
        "explanation": "A hand, cardboard and a wood block block light. Clear glass transmits most of it instead of making the same opaque silhouette."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 24,
    "title": "Clockmender",
    "warning": "Effects will not apply during daylight savings",
    "answer": "CHIME",
    "clue": "A three-word instruction to correct the clock.",
    "grid": "TGIRHUAEETMOSITN",
    "words": [
      "SET",
      "TIME",
      "RIGHT"
    ],
    "tubes": [
      [
        2,
        1,
        3,
        2
      ],
      [
        4,
        0,
        4,
        0
      ],
      [
        3,
        1,
        2,
        0
      ],
      [
        1,
        4,
        3,
        1
      ],
      [
        3,
        0,
        2,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Put a wayward clock back in order.",
    "decipherClue": "I am a ringing sound that a clock can make to mark the hour.",
    "gather": [
      {
        "ingredient": "A clock's innards",
        "prompt": "These are parts of mechanical clocks.",
        "matching": [
          "GEAR",
          "ESCAPEMENT",
          "PENDULUM"
        ],
        "intruder": "CARBURETOR",
        "explanation": "Gears, escapements and pendulums regulate mechanical clocks. A carburetor belongs to an engine."
      },
      {
        "ingredient": "A measured beat",
        "prompt": "These are units of time.",
        "matching": [
          "SECOND",
          "MINUTE",
          "HOUR"
        ],
        "intruder": "HERTZ",
        "explanation": "Second, minute and hour measure duration. Hertz measures frequency."
      },
      {
        "ingredient": "A timely ending",
        "prompt": "These words can follow TIME.",
        "matching": [
          "KEEPER",
          "PIECE",
          "LESS"
        ],
        "intruder": "SPOKE",
        "explanation": "Timekeeper, timepiece and timeless are familiar words. Timespoke is not."
      },
      {
        "ingredient": "A clock's correction",
        "prompt": "These verbs can mean to adjust a mechanism.",
        "matching": [
          "CALIBRATE",
          "REGULATE",
          "TUNE"
        ],
        "intruder": "NEGLECT",
        "explanation": "Calibrate, regulate and tune put a mechanism in order. Neglect leaves it unattended."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 25,
    "title": "Meadowstep",
    "warning": "Empty your boots of frogs after use.",
    "answer": "GLADE",
    "clue": "A three-word instruction for a gentler passage.",
    "grid": "HSSOTAPFKETMAMIZ",
    "words": [
      "MAKE",
      "PATHS",
      "SOFT"
    ],
    "tubes": [
      [
        3,
        2,
        0,
        2
      ],
      [
        3,
        2,
        3,
        4
      ],
      [
        1,
        4,
        1,
        0
      ],
      [
        0,
        3,
        4,
        1
      ],
      [
        1,
        4,
        0,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Open a soft path through a meadow without trampling it.",
    "decipherClue": "I am an open clearing among trees.",
    "gather": [
      {
        "ingredient": "A meadow's flowers",
        "prompt": "These are small flowering meadow plants.",
        "matching": [
          "CLOVER",
          "BUTTERCUP",
          "DAISY"
        ],
        "intruder": "KELP",
        "explanation": "Clover, buttercup and daisy can grow in a meadow. Kelp is a marine alga."
      },
      {
        "ingredient": "A light-footed visitor",
        "prompt": "These are hoofed herbivores.",
        "matching": [
          "DEER",
          "ROE",
          "FAWN"
        ],
        "intruder": "BADGER",
        "explanation": "Deer, roe and a fawn have hooves. A badger has paws and claws."
      },
      {
        "ingredient": "A pathway's prefix",
        "prompt": "These words can come before PATH.",
        "matching": [
          "FOOT",
          "BRIDLE",
          "TOW"
        ],
        "intruder": "CLOUD",
        "explanation": "Footpath, bridle path and towpath are routes. Cloudpath is not the matching established term."
      },
      {
        "ingredient": "A careful tread",
        "prompt": "These verbs describe gentle or cautious movement on foot.",
        "matching": [
          "TIPTOE",
          "CREEP",
          "STEAL"
        ],
        "intruder": "STOMP",
        "explanation": "Tiptoe, creep and steal can all mean to move quietly. Stomp is a heavy tread."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 26,
    "title": "Stormcaller",
    "warning": "Check the forecast first.",
    "answer": "WINDY",
    "clue": "A three-word instruction to summon rough weather.",
    "grid": "HBKDMOEKTRATSEHW",
    "words": [
      "WAKE",
      "THE",
      "STORM"
    ],
    "tubes": [
      [
        4,
        2,
        3,
        4
      ],
      [
        0,
        1,
        2,
        4
      ],
      [
        1,
        2,
        1,
        3
      ],
      [
        3,
        0,
        3,
        0
      ],
      [
        1,
        2,
        0,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Call a storm and guide its approach.",
    "decipherClue": "This five-letter adjective describes weather that makes flags stream and branches sway.",
    "gather": [
      {
        "ingredient": "A storm's front",
        "prompt": "These can form the first part of a familiar storm name.",
        "matching": [
          "THUNDER",
          "SNOW",
          "SAND"
        ],
        "intruder": "DRIZZLE",
        "explanation": "Thunderstorm, snowstorm and sandstorm are familiar names. Drizzlestorm is not."
      },
      {
        "ingredient": "A forceful breath",
        "prompt": "These name strong or sudden winds.",
        "matching": [
          "GALE",
          "GUST",
          "SQUALL"
        ],
        "intruder": "CALM",
        "explanation": "Gale, gust and squall involve wind. A calm is an absence or lull in wind."
      },
      {
        "ingredient": "A stormwatcher's tool",
        "prompt": "These instruments measure weather.",
        "matching": [
          "BAROMETER",
          "ANEMOMETER",
          "RAIN GAUGE"
        ],
        "intruder": "METRONOME",
        "explanation": "A barometer, anemometer and rain gauge measure weather. A metronome marks musical time."
      },
      {
        "ingredient": "A thunder's echo",
        "prompt": "These words can describe loud, deep sounds.",
        "matching": [
          "RUMBLE",
          "BOOM",
          "PEAL"
        ],
        "intruder": "WHISPER",
        "explanation": "Rumble, boom and peal can describe thunder. A whisper is deliberately quiet."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 27,
    "title": "Honeybind",
    "warning": "Bees get first refusal.",
    "answer": "HONEY",
    "clue": "A three-word instruction for a sweet binding.",
    "grid": "HHIDOTNWENIBYHPS",
    "words": [
      "BIND",
      "WITH",
      "HONEY"
    ],
    "tubes": [
      [
        3,
        4,
        3,
        0
      ],
      [
        0,
        1,
        0,
        2
      ],
      [
        1,
        3,
        0,
        4
      ],
      [
        4,
        2,
        1,
        2
      ],
      [
        3,
        2,
        4,
        1
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Bind a promise with sweetness rather than rope.",
    "decipherClue": "Bees make me from nectar, and I can make a spoon wonderfully sticky.",
    "gather": [
      {
        "ingredient": "A worker's harvest",
        "prompt": "These are products collected or produced by honeybees.",
        "matching": [
          "HONEY",
          "BEESWAX",
          "PROPOLIS"
        ],
        "intruder": "MAPLE SYRUP",
        "explanation": "Honeybees make honey and wax and collect plant resins for propolis. Maple syrup comes from tree sap."
      },
      {
        "ingredient": "A hive's company",
        "prompt": "These are adult honeybee colony roles.",
        "matching": [
          "QUEEN",
          "WORKER",
          "DRONE"
        ],
        "intruder": "LARVA",
        "explanation": "Queen, worker and drone are adult roles. A larva is an immature life stage."
      },
      {
        "ingredient": "A honeyed beginning",
        "prompt": "These words can follow HONEY.",
        "matching": [
          "COMB",
          "MOON",
          "DEW"
        ],
        "intruder": "SOCK",
        "explanation": "Honeycomb, honeymoon and honeydew are familiar words. Honeysock is not."
      },
      {
        "ingredient": "A sticky promise",
        "prompt": "These verbs can mean to hold things together.",
        "matching": [
          "BIND",
          "ADHERE",
          "FASTEN"
        ],
        "intruder": "SEVER",
        "explanation": "Bind, adhere and fasten join or hold. Sever cuts apart."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 28,
    "title": "Brambleward",
    "warning": "Mind the thorns.",
    "answer": "THORN",
    "clue": "A three-word instruction for a living fence.",
    "grid": "RNSGOTULHTEAMQDR",
    "words": [
      "LET",
      "THORNS",
      "GUARD"
    ],
    "tubes": [
      [
        1,
        0,
        4,
        2
      ],
      [
        1,
        3,
        0,
        2
      ],
      [
        3,
        4,
        3,
        2
      ],
      [
        3,
        4,
        1,
        0
      ],
      [
        1,
        0,
        4,
        2
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Grow a living boundary that keeps intruders out.",
    "decipherClue": "I am a sharp point on a plant, useful to a rose and unwelcome to a bare hand.",
    "gather": [
      {
        "ingredient": "A pointed defense",
        "prompt": "These plants bear sharp protective structures.",
        "matching": [
          "ROSE",
          "HAWTHORN",
          "BLACKTHORN"
        ],
        "intruder": "MOSS",
        "explanation": "Rose prickles and hawthorn and blackthorn thorns deter contact. Moss has no such sharp defenses."
      },
      {
        "ingredient": "A barrier's purpose",
        "prompt": "These verbs mean to block or keep out.",
        "matching": [
          "BAR",
          "EXCLUDE",
          "OBSTRUCT"
        ],
        "intruder": "ADMIT",
        "explanation": "Bar, exclude and obstruct prevent entry. Admit allows it."
      },
      {
        "ingredient": "A hedge's companions",
        "prompt": "These words can follow HEDGE.",
        "matching": [
          "HOG",
          "ROW",
          "TRIMMER"
        ],
        "intruder": "WING",
        "explanation": "Hedgehog, hedgerow and hedge trimmer are familiar compounds. Hedgewing is not."
      },
      {
        "ingredient": "A gate's condition",
        "prompt": "These describe a boundary closed against entry.",
        "matching": [
          "SHUT",
          "SEALED",
          "BARRED"
        ],
        "intruder": "AJAR",
        "explanation": "Shut, sealed and barred prevent entry. Ajar means partly open."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 29,
    "title": "Teacup Oracle",
    "warning": "Let it cool before consulting.",
    "answer": "STEAM",
    "clue": "A three-word instruction to ask about the future.",
    "grid": "THWWACHOOESIMSSV",
    "words": [
      "SHOW",
      "WHAT",
      "COMES"
    ],
    "tubes": [
      [
        0,
        2,
        0,
        4
      ],
      [
        0,
        4,
        3,
        4
      ],
      [
        1,
        2,
        1,
        3
      ],
      [
        3,
        2,
        3,
        4
      ],
      [
        0,
        1,
        2,
        1
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Read a possible future in the remains of a cup of tea.",
    "decipherClue": "I rise from hot water, but unlike smoke I need no burning fuel.",
    "gather": [
      {
        "ingredient": "A leaf's infusion",
        "prompt": "These are teas from the tea plant.",
        "matching": [
          "OOLONG",
          "ASSAM",
          "DARJEELING"
        ],
        "intruder": "CHAMOMILE",
        "explanation": "Oolong, Assam and Darjeeling come from Camellia sinensis. Chamomile is a herbal infusion from a different plant."
      },
      {
        "ingredient": "An oracle's verb",
        "prompt": "These verbs mean to predict.",
        "matching": [
          "FORETELL",
          "FORECAST",
          "PROPHESY"
        ],
        "intruder": "REMINISCE",
        "explanation": "Foretell, forecast and prophesy concern the future. Reminisce concerns the past."
      },
      {
        "ingredient": "A cup's compound",
        "prompt": "These words can follow TEA.",
        "matching": [
          "POT",
          "CUP",
          "LEAF"
        ],
        "intruder": "FORK",
        "explanation": "Teapot, teacup and tea leaf are familiar names. Tea fork is not the matching standard term."
      },
      {
        "ingredient": "A reader's signs",
        "prompt": "These are traditionally interpreted in forms of divination.",
        "matching": [
          "TEA LEAVES",
          "PALM LINES",
          "TAROT CARDS"
        ],
        "intruder": "SHOPPING LIST",
        "explanation": "Tea leaves, palm lines and tarot cards are used in divination. A shopping list records errands rather than an oracle's signs."
      }
    ],
    "editorialVersion": 1
  },
  {
    "id": 30,
    "title": "Starkeeping",
    "warning": "Count them before returning.",
    "answer": "NIGHT",
    "clue": "A three-word instruction to hold a constellation together.",
    "grid": "LCSKSOEERTNEASPW",
    "words": [
      "KEEP",
      "STARS",
      "CLOSE"
    ],
    "tubes": [
      [
        3,
        4,
        1,
        2
      ],
      [
        0,
        2,
        1,
        4
      ],
      [
        0,
        1,
        0,
        2
      ],
      [
        3,
        1,
        4,
        2
      ],
      [
        3,
        0,
        3,
        4
      ],
      []
    ],
    "waterVersion": 4,
    "intent": "Keep a small constellation from drifting apart.",
    "decipherClue": "I follow dusk and end at dawn; darkness is my usual companion.",
    "gather": [
      {
        "ingredient": "A constellation's company",
        "prompt": "These are constellation names.",
        "matching": [
          "ORION",
          "LYRA",
          "DRACO"
        ],
        "intruder": "VENUS",
        "explanation": "Orion, Lyra and Draco are constellations. Venus is a planet."
      },
      {
        "ingredient": "A star's beginning",
        "prompt": "These words can come before STAR.",
        "matching": [
          "NORTH",
          "SHOOTING",
          "EVENING"
        ],
        "intruder": "CLOUDY",
        "explanation": "North Star, shooting star and evening star are familiar names. Cloudy star is not the matching established name."
      },
      {
        "ingredient": "A sky's distinction",
        "prompt": "These produce their own light by stellar fusion.",
        "matching": [
          "SUN",
          "SIRIUS",
          "VEGA"
        ],
        "intruder": "MOON",
        "explanation": "The sun, Sirius and Vega are stars powered by fusion. The moon reflects sunlight."
      },
      {
        "ingredient": "A keeping word",
        "prompt": "These verbs mean to keep something from leaving.",
        "matching": [
          "RETAIN",
          "HOLD",
          "PRESERVE"
        ],
        "intruder": "SCATTER",
        "explanation": "Retain, hold and preserve keep things together or in place. Scatter sends them apart."
      }
    ],
    "editorialVersion": 1
  }
];
