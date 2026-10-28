// Thirty curated daily sets. No network requests during play.
const SPELL_PACKS=[
  {
    "id": 1,
    "title": "Finding Charm",
    "warning": "May find things you hid.",
    "answer": "LIGHT",
    "groups": [
      [
        "Things that glow",
        "EMBER",
        "BEACON",
        "STAR",
        "FIREFLY"
      ],
      [
        "Before stone",
        "MOON",
        "MILE",
        "LIME",
        "KEY"
      ],
      [
        "Move quietly",
        "CREEP",
        "TIPTOE",
        "SNEAK",
        "SLINK"
      ],
      [
        "Parts of a book",
        "SPINE",
        "COVER",
        "PAGE",
        "INDEX"
      ]
    ],
    "clue": "The kitchen garden",
    "grid": "ZIMGVNEAELTSTLID",
    "words": [
      "SAGE",
      "MINT",
      "DILL"
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
    "waterVersion": 4
  },
  {
    "id": 2,
    "title": "Raincalling",
    "warning": "Keep the windows shut.",
    "answer": "CLOUD",
    "groups": [
      [
        "Precipitation",
        "RAIN",
        "SNOW",
        "SLEET",
        "HAIL"
      ],
      [
        "Kinds of knots",
        "BOWLINE",
        "REEF",
        "CLOVE HITCH",
        "SHEET BEND"
      ],
      [
        "Things with keys",
        "PIANO",
        "LOCK",
        "KEYBOARD",
        "MAP"
      ],
      [
        "Shades of green",
        "SAGE",
        "OLIVE",
        "JADE",
        "MINT"
      ]
    ],
    "clue": "Visitors after sunset",
    "grid": "STABMXUFOHLGTOWQ",
    "words": [
      "WOLF",
      "BATS",
      "MOTH"
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
    "waterVersion": 4
  },
  {
    "id": 3,
    "title": "Dreamward",
    "warning": "Do not cast while driving.",
    "answer": "DREAM",
    "groups": [
      [
        "Bedtime essentials",
        "PILLOW",
        "SHEET",
        "BLANKET",
        "MATTRESS"
      ],
      [
        "Meaning small",
        "TINY",
        "MINUTE",
        "LITTLE",
        "WEE"
      ],
      [
        "Things you can cast",
        "SPELL",
        "SHADOW",
        "VOTE",
        "NET"
      ],
      [
        "After night",
        "OWL",
        "FALL",
        "MARE",
        "CAP"
      ]
    ],
    "clue": "Beneath the forest canopy",
    "grid": "FSOJESAMNRTZROOE",
    "words": [
      "MOSS",
      "FERN",
      "ROOT"
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
    "waterVersion": 4
  },
  {
    "id": 4,
    "title": "Hearthspark",
    "warning": "Keep sleeves clear.",
    "answer": "FLAME",
    "groups": [
      [
        "Fireplace tools",
        "POKER",
        "TONGS",
        "SHOVEL",
        "BELLOWS"
      ],
      [
        "Before fire",
        "CAMP",
        "BON",
        "WILD",
        "HELL"
      ],
      [
        "Meaning begin",
        "START",
        "COMMENCE",
        "INITIATE",
        "LAUNCH"
      ],
      [
        "Things with tongues",
        "SHOE",
        "BELL",
        "SNAKE",
        "FLAME"
      ]
    ],
    "clue": "Beside the fireplace",
    "grid": "THOAEOCLAOSYTSKU",
    "words": [
      "COAL",
      "SOOT",
      "HEAT"
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
    "waterVersion": 4
  },
  {
    "id": 5,
    "title": "Mooncatcher",
    "warning": "Best stored out of sunlight.",
    "answer": "LUNAR",
    "groups": [
      [
        "Moon phases",
        "NEW",
        "FULL",
        "WAXING",
        "WANING"
      ],
      [
        "Before light",
        "FLASH",
        "SPOT",
        "HEAD",
        "DAY"
      ],
      [
        "Things in an orchestra",
        "VIOLIN",
        "OBOE",
        "CELLO",
        "TUBA"
      ],
      [
        "Meaning secret",
        "HIDDEN",
        "COVERT",
        "PRIVATE",
        "CLANDESTINE"
      ]
    ],
    "clue": "The midnight sky",
    "grid": "ADUKCSTRNOAAOMDR",
    "words": [
      "MOON",
      "STAR",
      "DARK"
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
    "waterVersion": 4
  },
  {
    "id": 6,
    "title": "Orchard’s Blessing",
    "warning": "Bring a void basket.",
    "answer": "APPLE",
    "groups": [
      [
        "Orchard fruit",
        "APPLE",
        "PEACH",
        "CHERRY",
        "APRICOT"
      ],
      [
        "Before cake",
        "CHEESE",
        "PAN",
        "CUP",
        "SHORT"
      ],
      [
        "Things with pits",
        "OLIVE",
        "AVOCADO",
        "DATE",
        "NECTARINE"
      ],
      [
        "Ways to preserve food",
        "PICKLE",
        "FREEZE",
        "DRY",
        "SMOKE"
      ]
    ],
    "clue": "In the fruit basket",
    "grid": "EPEAMDSRIMPNLULP",
    "words": [
      "PEAR",
      "PLUM",
      "LIME"
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
    "waterVersion": 4
  },
  {
    "id": 7,
    "title": "Woodland Whisper",
    "warning": "Never take directions from a squirrel.",
    "answer": "GROVE",
    "groups": [
      [
        "Deciduous trees",
        "OAK",
        "MAPLE",
        "BIRCH",
        "ELM"
      ],
      [
        "Meaning to walk",
        "STROLL",
        "AMBLE",
        "SAUNTER",
        "WANDER"
      ],
      [
        "After wood",
        "LAND",
        "PECKER",
        "WORK",
        "CHUCK"
      ],
      [
        "Parts of a leaf",
        "BLADE",
        "VEIN",
        "STALK",
        "MARGIN"
      ]
    ],
    "clue": "The woodland floor",
    "grid": "BFLEAWAGRKQIXGTW",
    "words": [
      "BARK",
      "TWIG",
      "LEAF"
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
    "waterVersion": 4
  },
  {
    "id": 8,
    "title": "Storybinding",
    "warning": "Finish what you start.",
    "answer": "QUILL",
    "groups": [
      [
        "Writing implements",
        "PENCIL",
        "CRAYON",
        "QUILL",
        "MARKER"
      ],
      [
        "Novel genres",
        "MYSTERY",
        "FANTASY",
        "ROMANCE",
        "THRILLER"
      ],
      [
        "Words with silent initial letters",
        "KNIFE",
        "GNOME",
        "WRIST",
        "PSALM"
      ],
      [
        "After book",
        "WORM",
        "CASE",
        "MARK",
        "SHOP"
      ]
    ],
    "clue": "At the writing desk",
    "grid": "KNIGSXAEUKPBSPOO",
    "words": [
      "BOOK",
      "PAGE",
      "INKS"
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
    "waterVersion": 4
  },
  {
    "id": 9,
    "title": "River’s Favor",
    "warning": "Don't forget your waders.",
    "answer": "WATER",
    "groups": [
      [
        "Bodies of water",
        "LAKE",
        "POND",
        "SEA",
        "OCEAN"
      ],
      [
        "Things you can draw",
        "CURTAIN",
        "BATH",
        "PICTURE",
        "BREATH"
      ],
      [
        "Before well",
        "WISHING",
        "OIL",
        "STAIR",
        "INK"
      ],
      [
        "Meaning plentiful",
        "ABUNDANT",
        "AMPLE",
        "COPIOUS",
        "BOUNTIFUL"
      ]
    ],
    "clue": "Along the riverbank",
    "grid": "SHFUIOGVRFRBFDEE",
    "words": [
      "REED",
      "FROG",
      "FISH"
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
    "waterVersion": 4
  },
  {
    "id": 10,
    "title": "Everblossom",
    "warning": "Expect pollen, best paired with an allergy potion.",
    "answer": "BLOOM",
    "groups": [
      [
        "Flowers",
        "DAISY",
        "TULIP",
        "VIOLET",
        "POPPY"
      ],
      [
        "Garden tools",
        "RAKE",
        "HOE",
        "TROWEL",
        "SPADE"
      ],
      [
        "Before house",
        "GREEN",
        "LIGHT",
        "DOLL",
        "WARE"
      ],
      [
        "Things with stems",
        "WINEGLASS",
        "LEAF",
        "PIPE",
        "FLOWER"
      ]
    ],
    "clue": "A flower for every vase",
    "grid": "IERTRSOBLILPSIXY",
    "words": [
      "ROSE",
      "IRIS",
      "LILY"
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
    "waterVersion": 4
  },
  {
    "id": 11,
    "title": "Lionheart",
    "warning": "Courage is not a plan.",
    "answer": "BRAVE",
    "groups": [
      [
        "Parts of a castle",
        "MOAT",
        "KEEP",
        "TURRET",
        "BAILEY"
      ],
      [
        "Meaning courageous",
        "BOLD",
        "VALIANT",
        "FEARLESS",
        "DAUNTLESS"
      ],
      [
        "Before shield",
        "WIND",
        "HEAT",
        "FACE",
        "RIOT"
      ],
      [
        "Things you can raise",
        "FLAG",
        "CHILD",
        "QUESTION",
        "DOUGH"
      ]
    ],
    "clue": "The knight’s equipment",
    "grid": "CMESHAYXINMALHEL",
    "words": [
      "MAIL",
      "HELM",
      "AXES"
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
    "waterVersion": 4
  },
  {
    "id": 12,
    "title": "Familiar’s Call",
    "warning": "Keep out of reach of playful cats",
    "answer": "WHISK",
    "groups": [
      [
        "Cat breeds",
        "SIAMESE",
        "PERSIAN",
        "MAINE COON",
        "RAGDOLL"
      ],
      [
        "Meaning to steal",
        "SWIPE",
        "PILFER",
        "PURLOIN",
        "NICK"
      ],
      [
        "Before cat",
        "ALLEY",
        "COPY",
        "TOM",
        "WILD"
      ],
      [
        "Things with whiskers",
        "SEAL",
        "WALRUS",
        "OTTER",
        "CATFISH"
      ]
    ],
    "clue": "The familiar’s favorite things",
    "grid": "IAAPLTSWNPSPAWFA",
    "words": [
      "PAWS",
      "TAIL",
      "NAPS"
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
    "waterVersion": 4
  },
  {
    "id": 13,
    "title": "Winterveil",
    "warning": "Bring a coat.",
    "answer": "FROST",
    "groups": [
      [
        "Winter clothing",
        "SCARF",
        "MITTENS",
        "PARKA",
        "BEANIE"
      ],
      [
        "Meaning frozen",
        "ICY",
        "FRIGID",
        "GLACIAL",
        "FROSTY"
      ],
      [
        "After snow",
        "BALL",
        "MAN",
        "FLAKE",
        "DROP"
      ],
      [
        "Things that fall",
        "RAIN",
        "LEAVES",
        "DOMINOES",
        "NIGHT"
      ]
    ],
    "clue": "A winter afternoon",
    "grid": "OCNSSLOMDETWYFCI",
    "words": [
      "SNOW",
      "ICES",
      "COLD"
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
    "waterVersion": 4
  },
  {
    "id": 14,
    "title": "Birdtongue",
    "warning": "Word travels fast, never tell a bird a secret.",
    "answer": "ROBIN",
    "groups": [
      [
        "Bird calls",
        "CHIRP",
        "TWEET",
        "COO",
        "CAW"
      ],
      [
        "Parts of a feather",
        "SHAFT",
        "BARB",
        "QUILL",
        "VANE"
      ],
      [
        "Before bird",
        "BLUE",
        "BLACK",
        "HUMMING",
        "SONG"
      ],
      [
        "Meaning to sing softly",
        "HUM",
        "CROON",
        "MURMUR",
        "WARBLE"
      ]
    ],
    "clue": "The feathered visitors",
    "grid": "LSOEEWDVGWONCXRE",
    "words": [
      "WREN",
      "DOVE",
      "OWLS"
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
    "waterVersion": 4
  },
  {
    "id": 15,
    "title": "Lockturner",
    "warning": "Some doors stay shut for a reason.",
    "answer": "CHARM",
    "groups": [
      [
        "Things with handles",
        "DOOR",
        "MUG",
        "SUITCASE",
        "PAN"
      ],
      [
        "Meaning to open",
        "UNLOCK",
        "UNSEAL",
        "UNFASTEN",
        "UNLATCH"
      ],
      [
        "Computer keyboard keys",
        "SHIFT",
        "ESCAPE",
        "ENTER",
        "CONTROL"
      ],
      [
        "Before hole",
        "KEY",
        "PEEP",
        "BUTTON",
        "LOOP"
      ]
    ],
    "clue": "The locksmith’s table",
    "grid": "COLLKAOTYEEBKYSJ",
    "words": [
      "KEYS",
      "BOLT",
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
    "waterVersion": 4
  },
  {
    "id": 16,
    "title": "Quietus",
    "warning": "Set an alarm first.",
    "answer": "PEACE",
    "groups": [
      [
        "Meaning peaceful",
        "SERENE",
        "TRANQUIL",
        "PLACID",
        "STILL"
      ],
      [
        "Breathing verbs",
        "INHALE",
        "EXHALE",
        "SIGH",
        "PANT"
      ],
      [
        "Things you can clear",
        "MIND",
        "THROAT",
        "TABLE",
        "HURDLE"
      ],
      [
        "Before room",
        "BED",
        "BATH",
        "BALL",
        "CLASS"
      ]
    ],
    "clue": "A quiet moment",
    "grid": "KXXGSEACALMEETSR",
    "words": [
      "CALM",
      "REST",
      "EASE"
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
    "waterVersion": 4
  },
  {
    "id": 17,
    "title": "Sugarspell",
    "warning": "Carefully monitor bloodsugar during use.",
    "answer": "SUGAR",
    "groups": [
      [
        "Baking ingredients",
        "FLOUR",
        "YEAST",
        "BUTTER",
        "EGGS"
      ],
      [
        "After sugar",
        "CANE",
        "CUBE",
        "COAT",
        "RUSH"
      ],
      [
        "Kinds of pastry",
        "CHOUX",
        "PUFF",
        "FILO",
        "SHORTCRUST"
      ],
      [
        "Meaning to mix",
        "STIR",
        "BLEND",
        "COMBINE",
        "FOLD"
      ]
    ],
    "clue": "Inside the sweet jar",
    "grid": "MTRCIATANEKETCPE",
    "words": [
      "CAKE",
      "TART",
      "MINT"
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
    "waterVersion": 4
  },
  {
    "id": 18,
    "title": "Fairwind",
    "warning": "Wear overalls, or shorts under your witch's robes.",
    "answer": "OCEAN",
    "groups": [
      [
        "Parts of a ship",
        "BOW",
        "STERN",
        "HULL",
        "DECK"
      ],
      [
        "Before boat",
        "ROW",
        "SAIL",
        "STEAM",
        "LIFE"
      ],
      [
        "Navigation aids",
        "COMPASS",
        "SEXTANT",
        "CHART",
        "LIGHTHOUSE"
      ],
      [
        "Meaning to fasten",
        "TIE",
        "BIND",
        "SECURE",
        "LASH"
      ]
    ],
    "clue": "Across the open water",
    "grid": "KEPSCLOATMIRYAST",
    "words": [
      "SAIL",
      "MAST",
      "ROPE"
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
    "waterVersion": 4
  },
  {
    "id": 19,
    "title": "Crystal Sight",
    "warning": "Not every answer is useful.",
    "answer": "AMBER",
    "groups": [
      [
        "Gemstones",
        "RUBY",
        "SAPPHIRE",
        "EMERALD",
        "TOPAZ"
      ],
      [
        "Before rock",
        "BED",
        "FLINT",
        "SHEET",
        "SPACE"
      ],
      [
        "Meaning to shine",
        "GLITTER",
        "SPARKLE",
        "SHIMMER",
        "GLEAM"
      ],
      [
        "Things with facets",
        "DIAMOND",
        "CRYSTAL",
        "GARNET",
        "QUARTZ"
      ]
    ],
    "clue": "The stone collector’s shelf",
    "grid": "JMSQEADWGAGELPOK",
    "words": [
      "JADE",
      "OPAL",
      "GEMS"
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
    "waterVersion": 4
  },
  {
    "id": 20,
    "title": "Spiceward",
    "warning": "Start with a small pinch.",
    "answer": "SPICE",
    "groups": [
      [
        "Ground spices",
        "CUMIN",
        "PAPRIKA",
        "TURMERIC",
        "CINNAMON"
      ],
      [
        "Types of tea",
        "OOLONG",
        "MATCHA",
        "ASSAM",
        "DARJEELING"
      ],
      [
        "Before pot",
        "TEA",
        "FLOWER",
        "COFFEE",
        "HOT"
      ],
      [
        "Cooking methods",
        "ROAST",
        "STEAM",
        "POACH",
        "BRAISE"
      ]
    ],
    "clue": "The spice cupboard",
    "grid": "TRJSLLAYIETLDCAM",
    "words": [
      "SALT",
      "MACE",
      "DILL"
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
    "waterVersion": 4
  },
  {
    "id": 21,
    "title": "Mending Charm",
    "warning": "Remove the garment first.",
    "answer": "WEAVE",
    "groups": [
      [
        "Sewing supplies",
        "NEEDLE",
        "THREAD",
        "THIMBLE",
        "BOBBIN"
      ],
      [
        "Meaning to mend",
        "REPAIR",
        "PATCH",
        "DARN",
        "FIX"
      ],
      [
        "Before stitch",
        "CROSS",
        "BACK",
        "CHAIN",
        "BLANKET"
      ],
      [
        "Types of fabric",
        "LINEN",
        "DENIM",
        "VELVET",
        "SATIN"
      ]
    ],
    "clue": "In the sewing basket",
    "grid": "COOWLCSIXYLNMKAR",
    "words": [
      "WOOL",
      "YARN",
      "SILK"
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
    "waterVersion": 4
  },
  {
    "id": 22,
    "title": "Autumn’s Touch",
    "warning": "Keep clear of houseplants.",
    "answer": "MAPLE",
    "groups": [
      [
        "Autumn colors",
        "AMBER",
        "RUSSET",
        "OCHRE",
        "SCARLET"
      ],
      [
        "Tree products",
        "SAP",
        "CORK",
        "TIMBER",
        "RESIN"
      ],
      [
        "Types of leaves",
        "NEEDLE",
        "SCALE",
        "SIMPLE",
        "COMPOUND"
      ],
      [
        "Meaning to collect",
        "GATHER",
        "AMASS",
        "ACCUMULATE",
        "ASSEMBLE"
      ]
    ],
    "clue": "Under the autumn trees",
    "grid": "CONSSLUETAEWUNFF",
    "words": [
      "LEAF",
      "NUTS",
      "CONE"
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
    "waterVersion": 4
  },
  {
    "id": 23,
    "title": "Shadowplay",
    "warning": "A remedy for restless cats.",
    "answer": "STAGE",
    "groups": [
      [
        "Theatre roles",
        "DIRECTOR",
        "USHER",
        "STAGEHAND",
        "PROMPTER"
      ],
      [
        "Before play",
        "SCREEN",
        "WORD",
        "HORSE",
        "FAIR"
      ],
      [
        "Things you can strike",
        "MATCH",
        "POSE",
        "CHORD",
        "DEAL"
      ],
      [
        "Parts of a performance",
        "PROLOGUE",
        "ACT",
        "SCENE",
        "EPILOGUE"
      ]
    ],
    "clue": "Behind the curtain",
    "grid": "LBOSXPCTATRASCPO",
    "words": [
      "CAST",
      "PROP",
      "ACTS"
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
    "waterVersion": 4
  },
  {
    "id": 24,
    "title": "Clockmender",
    "warning": "Effects will not apply during daylight savings",
    "answer": "CHIME",
    "groups": [
      [
        "Units of time",
        "SECOND",
        "MINUTE",
        "HOUR",
        "WEEK"
      ],
      [
        "Things with hands",
        "CLOCK",
        "WATCH",
        "PERSON",
        "MONKEY"
      ],
      [
        "Before time",
        "BED",
        "DAY",
        "LIFE",
        "SPRING"
      ],
      [
        "Meaning to wait",
        "PAUSE",
        "LINGER",
        "TARRY",
        "STAY"
      ]
    ],
    "clue": "The clockmaker’s workbench",
    "grid": "YKARAECCGWOIHGST",
    "words": [
      "GEAR",
      "COGS",
      "TICK"
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
    "waterVersion": 4
  },
  {
    "id": 25,
    "title": "Meadowstep",
    "warning": "Empty your boots of frogs after use.",
    "answer": "GLADE",
    "groups": [
      [
        "Meadow flowers",
        "BUTTERCUP",
        "CLOVER",
        "DAISY",
        "DANDELION"
      ],
      [
        "Baby animals",
        "CALF",
        "CUB",
        "KIT",
        "FOAL"
      ],
      [
        "Before fly",
        "BUTTER",
        "DRAGON",
        "FIRE",
        "HOUSE"
      ],
      [
        "Meaning to jump",
        "LEAP",
        "HOP",
        "BOUND",
        "VAULT"
      ]
    ],
    "clue": "The meadow in spring",
    "grid": "RUIEREESRAFBHAWN",
    "words": [
      "HARE",
      "FAWN",
      "BEES"
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
    "waterVersion": 4
  },
  {
    "id": 26,
    "title": "Stormcaller",
    "warning": "Check the forecast first.",
    "answer": "WINDY",
    "groups": [
      [
        "Types of wind",
        "BREEZE",
        "GUST",
        "SQUALL",
        "GALE"
      ],
      [
        "Weather instruments",
        "BAROMETER",
        "ANEMOMETER",
        "THERMOMETER",
        "RAIN GAUGE"
      ],
      [
        "Before storm",
        "THUNDER",
        "SNOW",
        "SAND",
        "BRAIN"
      ],
      [
        "Meaning to shake",
        "TREMBLE",
        "QUIVER",
        "SHUDDER",
        "WOBBLE"
      ]
    ],
    "clue": "The weather turns",
    "grid": "AVAETGLRCIANSTMI",
    "words": [
      "GALE",
      "RAIN",
      "MIST"
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
    "waterVersion": 4
  },
  {
    "id": 27,
    "title": "Honeybind",
    "warning": "Bees get first refusal.",
    "answer": "HONEY",
    "groups": [
      [
        "Bee colony members",
        "QUEEN",
        "WORKER",
        "DRONE",
        "LARVA"
      ],
      [
        "Things with cells",
        "BATTERY",
        "PRISON",
        "SPREADSHEET",
        "HONEYCOMB"
      ],
      [
        "Before honey",
        "WILD",
        "CLOVER",
        "MANUKA",
        "ORANGE BLOSSOM"
      ],
      [
        "Meaning sweet-tasting",
        "SUGARY",
        "SACCHARINE",
        "SYRUPY",
        "CANDIED"
      ]
    ],
    "clue": "Around the beehive",
    "grid": "CYXVOAEIMWHCBDNU",
    "words": [
      "HIVE",
      "WAXY",
      "COMB"
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
    "waterVersion": 4
  },
  {
    "id": 28,
    "title": "Brambleward",
    "warning": "Mind the thorns.",
    "answer": "THORN",
    "groups": [
      [
        "Things that enclose",
        "FENCE",
        "HEDGE",
        "WALL",
        "BARRIER"
      ],
      [
        "Before way",
        "PATH",
        "RAIL",
        "HIGH",
        "DOOR"
      ],
      [
        "Meaning sharp",
        "POINTED",
        "KEEN",
        "ACUTE",
        "PIERCING"
      ],
      [
        "Parts of a rose plant",
        "PETAL",
        "STEM",
        "THORN",
        "SEPAL"
      ]
    ],
    "clue": "At the garden boundary",
    "grid": "THPLDALADGAWXHET",
    "words": [
      "GATE",
      "WALL",
      "PATH"
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
    "waterVersion": 4
  },
  {
    "id": 29,
    "title": "Teacup Oracle",
    "warning": "Let it cool before consulting.",
    "answer": "STEAM",
    "groups": [
      [
        "Tea service pieces",
        "TEAPOT",
        "STRAINER",
        "SAUCER",
        "CUP"
      ],
      [
        "Things you can read",
        "PALM",
        "LEAVES",
        "BOOK",
        "LIPS"
      ],
      [
        "Before spoon",
        "TEA",
        "TABLE",
        "SOUP",
        "DESSERT"
      ],
      [
        "Meaning to predict",
        "FORECAST",
        "FORETELL",
        "PROPHESY",
        "PORTEND"
      ]
    ],
    "clue": "Tea for two",
    "grid": "KXNULUCVPIWRSMBE",
    "words": [
      "BREW",
      "CUPS",
      "MILK"
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
    "waterVersion": 4
  },
  {
    "id": 30,
    "title": "Starkeeping",
    "warning": "Count them before returning.",
    "answer": "NIGHT",
    "groups": [
      [
        "Constellations",
        "ORION",
        "LYRA",
        "DRACO",
        "CYGNUS"
      ],
      [
        "Before star",
        "SHOOTING",
        "NORTH",
        "ROCK",
        "SEA"
      ],
      [
        "Meaning to return",
        "REVERT",
        "RECUR",
        "REAPPEAR",
        "REVISIT"
      ],
      [
        "Things with tails",
        "COMET",
        "KITE",
        "COIN",
        "FOX"
      ]
    ],
    "clue": "The sky before dawn",
    "grid": "TDANPKGWDLSDQWOU",
    "words": [
      "DUSK",
      "DAWN",
      "GLOW"
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
    "waterVersion": 4
  }
];
