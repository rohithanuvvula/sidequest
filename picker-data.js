// ============================================================
// YOUR LISTS. Edit only this file to change what the picker shows.
// Tag words must match exactly (capital letters matter).
// Every line needs a comma at the end, except the last in a list.
// ============================================================
const IN = "India";
const OUT = "Outside India";

const DATA = {
    activity: {
        label: "Today’s mission",
        idle: "Choose your mood, then reveal your mission",
        hint: "Pick any moods you like, then press the button. Skip them all for a total surprise.",
        auto: false,
        filters: [
            { key: "setting", title: "Where?", options: ["Indoor", "Outdoor"] },
            { key: "energy", title: "Energy", options: ["Chill", "Active"] },
            { key: "budget", title: "Budget", options: ["Free", "Costs a little"] }
        ],
        // Each row: [name, note, setting, energy, budget]
        rows: [
            ["Watch the sunset somewhere new", "Pick a spot you have never watched from.", "Outdoor", "Chill", "Free"],
            ["Photograph your neighborhood", "Take ten photos of things you usually walk past.", "Outdoor", "Chill", "Free"],
            ["Sit in a park and people-watch", "Notice three details you normally miss.", "Outdoor", "Chill", "Free"],
            ["Go stargazing", "Find a dark spot and look up for 20 minutes.", "Outdoor", "Chill", "Free"],
            ["Take a walk with no destination", "Turn left or right at random.", "Outdoor", "Chill", "Free"],
            ["Spot five different birds", "Bring a notebook and write down what you see.", "Outdoor", "Chill", "Free"],
            ["Collect five interesting leaves or stones", "Look for unusual shapes and colors.", "Outdoor", "Chill", "Free"],
            ["Watch the sunrise", "Set an alarm and bring a flask of tea or coffee.", "Outdoor", "Chill", "Free"],

            ["Take a 30-minute brisk walk", "No headphones for the first ten minutes.", "Outdoor", "Active", "Free"],
            ["Try a new running route", "Explore a street you have never used.", "Outdoor", "Active", "Free"],
            ["Climb a hill or a flight of stairs", "Do it three times.", "Outdoor", "Active", "Free"],
            ["Play a pickup game", "Cricket, badminton, or frisbee with whoever is nearby.", "Outdoor", "Active", "Free"],
            ["Do an outdoor workout", "Ten squats, ten push-ups, ten lunges, three rounds.", "Outdoor", "Active", "Free"],
            ["Walk to somewhere you usually ride or drive", "Notice what you miss from a vehicle.", "Outdoor", "Active", "Free"],
            ["Jump rope for ten minutes", "Count how many you can do without a break.", "Outdoor", "Active", "Free"],
            ["Explore a nearby lake or trail", "Walk the whole loop.", "Outdoor", "Active", "Free"],

            ["Visit a cafe you have never tried", "Order whatever the barista recommends.", "Outdoor", "Chill", "Costs a little"],
            ["Browse a flea market or local bookshop", "Buy one thing that surprises you.", "Outdoor", "Chill", "Costs a little"],
            ["Have a picnic", "Pack a few snacks and eat outside.", "Outdoor", "Chill", "Costs a little"],
            ["Catch a late show at the cinema", "Go without reading the reviews.", "Outdoor", "Chill", "Costs a little"],
            ["Try ice cream from a new place", "Choose a flavor you have never had.", "Outdoor", "Chill", "Costs a little"],
            ["Buy flowers for someone", "Or for yourself.", "Outdoor", "Chill", "Costs a little"],
            ["Visit an art gallery or museum", "Pick one room and take your time.", "Outdoor", "Chill", "Costs a little"],
            ["Try a roadside snack stall", "Ask the vendor what they are best known for.", "Outdoor", "Chill", "Costs a little"],

            ["Go on a street food crawl", "Try three small bites at three different stalls.", "Outdoor", "Active", "Costs a little"],
            ["Rent a bicycle and explore", "Ride until you find something interesting.", "Outdoor", "Active", "Costs a little"],
            ["Try a new sport", "Book a beginner session of bowling, skating, or badminton.", "Outdoor", "Active", "Costs a little"],
            ["Take a day trip", "Pick a place within two hours and go.", "Outdoor", "Active", "Costs a little"],
            ["Go go-karting or visit a trampoline park", "Act like a kid for an hour.", "Outdoor", "Active", "Costs a little"],
            ["Join a group walk or run", "Look for one in your city.", "Outdoor", "Active", "Costs a little"],
            ["Try bouldering or rock climbing", "Many cities have a beginner wall.", "Outdoor", "Active", "Costs a little"],
            ["Go swimming", "Do laps or just float.", "Outdoor", "Active", "Costs a little"],

            ["Read 20 pages of a book", "Phone in another room.", "Indoor", "Chill", "Free"],
            ["Write a journal page", "Ten minutes, no editing.", "Indoor", "Chill", "Free"],
            ["Call an old friend", "Someone you have not spoken to in months.", "Indoor", "Chill", "Free"],
            ["Learn something new for 30 minutes", "A skill, a language, or a topic you are curious about.", "Indoor", "Chill", "Free"],
            ["Make a playlist for a mood", "Give it a funny name.", "Indoor", "Chill", "Free"],
            ["Write a note to your future self", "Open it in a year.", "Indoor", "Chill", "Free"],
            ["Watch a documentary", "Pick a topic you know nothing about.", "Indoor", "Chill", "Free"],
            ["Stretch and breathe for 15 minutes", "Slow and gentle.", "Indoor", "Chill", "Free"],

            ["Do a 20-minute home workout", "Follow any free video.", "Indoor", "Active", "Free"],
            ["Dance to three songs", "Full volume, no audience needed.", "Indoor", "Active", "Free"],
            ["Declutter one drawer", "Just one, then stop.", "Indoor", "Active", "Free"],
            ["Deep-clean one corner of your home", "Set a 15-minute timer.", "Indoor", "Active", "Free"],
            ["Try a 15-minute yoga video", "Beginner level is fine.", "Indoor", "Active", "Free"],
            ["Rearrange a room", "Change one thing that bugs you.", "Indoor", "Active", "Free"],
            ["Try a plank challenge", "Hold as long as you can, then beat it tomorrow.", "Indoor", "Active", "Free"],
            ["Learn a short dance routine", "Pick a video and learn it by heart.", "Indoor", "Active", "Free"],

            ["Bake something new", "Choose a recipe with five ingredients or fewer.", "Indoor", "Chill", "Costs a little"],
            ["Start a jigsaw puzzle", "Even a small one counts.", "Indoor", "Chill", "Costs a little"],
            ["Try a sketching or painting kit", "Draw something on your desk.", "Indoor", "Chill", "Costs a little"],
            ["Order a dish you have never tried", "Ask the restaurant for their favorite.", "Indoor", "Chill", "Costs a little"],
            ["Start a small plant", "Basil, mint, or a succulent.", "Indoor", "Chill", "Costs a little"],
            ["Buy a new book and read the first chapter", "Choose by cover only.", "Indoor", "Chill", "Costs a little"],
            ["Make a fancy coffee at home", "Try cold brew or a whipped coffee.", "Indoor", "Chill", "Costs a little"],
            ["Try a paint-by-numbers kit", "Put on a podcast and relax.", "Indoor", "Chill", "Costs a little"],

            ["Host a mini board game night", "Invite two or three friends.", "Indoor", "Active", "Costs a little"],
            ["Cook a new cuisine with friends", "Split the dishes between you.", "Indoor", "Active", "Costs a little"],
            ["Book a live online class", "Dance, cooking, or art.", "Indoor", "Active", "Costs a little"],
            ["Start a small DIY project", "Paint a frame or build a shelf.", "Indoor", "Active", "Costs a little"],
            ["Have a karaoke night at home", "Everyone must sing at least once.", "Indoor", "Active", "Costs a little"],
            ["Make pizza from scratch", "Roll the dough and pick the toppings.", "Indoor", "Active", "Costs a little"],
            ["Set up a mini escape room", "Hide clues around the house for a friend.", "Indoor", "Active", "Costs a little"],
            ["Play a party video game with friends", "Pick something silly and competitive.", "Indoor", "Active", "Costs a little"]
        ]
    },

    meal: {
        label: "Tonight’s meal",
        idle: "Pick a cuisine and your meal appears",
        hint: "Tap a cuisine to reveal a dish. Diet is optional, and you can switch it off anytime.",
        auto: true,
        groupNotes: {
    "Diet & Nutrition": "General inspiration, not medical or dietary advice. If you have a health condition, allergy, or special dietary needs, check with your doctor or a registered dietitian."
},
        // The first filter lists the cuisines automatically (from the groups below).
        filters: [
            { key: "cuisine", title: "Pick a cuisine" },
            { key: "diet", title: "Diet (optional)", options: ["Veg", "Non-veg"] }
        ],
        // Each entry: [dish, diet]. Egg dishes are tagged Non-veg.
        // Add a cuisine by adding a new group.
        groups: {
            "North Indian": [
                ["Paneer butter masala with naan", "Veg"], ["Chole bhature", "Veg"],
                ["Dal makhani with jeera rice", "Veg"], ["Rajma chawal", "Veg"],
                ["Aloo paratha with curd", "Veg"], ["Palak paneer with roti", "Veg"],
                ["Baingan bharta with roti", "Veg"], ["Kadhi chawal", "Veg"],
                ["Matar paneer with pulao", "Veg"], ["Sarson da saag with makki di roti", "Veg"],
                ["Butter chicken with naan", "Non-veg"], ["Chicken tikka masala", "Non-veg"],
                ["Mutton rogan josh", "Non-veg"], ["Tandoori chicken with mint chutney", "Non-veg"],
                ["Egg bhurji with paratha", "Non-veg"]
            ],
            "South Indian": [
                ["Masala dosa", "Veg"], ["Idli with sambar", "Veg"], ["Medu vada", "Veg"],
                ["Lemon rice with papad", "Veg"], ["Curd rice with pickle", "Veg"],
                ["Ven pongal", "Veg"], ["Pesarattu with ginger chutney", "Veg"],
                ["Bisi bele bath", "Veg"], ["Rava upma", "Veg"],
                ["Uttapam with coconut chutney", "Veg"], ["Tomato rasam with rice", "Veg"],
                ["Chettinad chicken curry", "Non-veg"], ["Kerala fish curry with rice", "Non-veg"],
                ["Appam with egg curry", "Non-veg"], ["Andhra chicken fry with rice", "Non-veg"],
                ["Kothu parotta", "Non-veg"], ["Kerala parotta with chicken curry", "Non-veg"]
            ],
            "Mughlai & Biryani": [
                ["Hyderabadi vegetable biryani", "Veg"], ["Paneer tikka biryani", "Veg"],
                ["Shahi paneer with naan", "Veg"], ["Malai kofta with naan", "Veg"],
                ["Dum aloo with roti", "Veg"], ["Veg dum biryani with raita", "Veg"],
                ["Hyderabadi chicken biryani", "Non-veg"], ["Mutton dum biryani", "Non-veg"],
                ["Chicken korma with naan", "Non-veg"], ["Seekh kebab with rumali roti", "Non-veg"],
                ["Haleem", "Non-veg"], ["Egg biryani", "Non-veg"], ["Shami kebab with mint chutney", "Non-veg"]
            ],
            "Gujarati & Rajasthani": [
                ["Dhokla with green chutney", "Veg"], ["Thepla with pickle", "Veg"],
                ["Undhiyu with puri", "Veg"], ["Khichdi kadhi", "Veg"],
                ["Dal baati churma", "Veg"], ["Gatte ki sabzi with roti", "Veg"],
                ["Pyaaz kachori", "Veg"], ["Handvo", "Veg"],
                ["Ker sangri with bajra roti", "Veg"], ["Methi thepla with curd", "Veg"]
            ],
            "Bengali & East Indian": [
                ["Luchi with aloo dum", "Veg"], ["Khichuri with begun bhaja", "Veg"],
                ["Shukto with rice", "Veg"], ["Chholar dal with luchi", "Veg"],
                ["Litti chokha", "Veg"],
                ["Macher jhol with rice", "Non-veg"], ["Kosha mangsho with luchi", "Non-veg"],
                ["Chingri malai curry", "Non-veg"], ["Kolkata chicken biryani", "Non-veg"],
                ["Kolkata egg roll", "Non-veg"], ["Shorshe ilish with rice", "Non-veg"]
            ],
            "Chinese & Indo-Chinese": [
                ["Vegetable hakka noodles", "Veg"], ["Veg fried rice with manchurian", "Veg"],
                ["Paneer chilli with fried rice", "Veg"], ["Veg manchow soup with noodles", "Veg"],
                ["Crispy honey chilli potato with rice", "Veg"], ["Tofu and vegetable stir-fry", "Veg"],
                ["Veg momos with chili chutney", "Veg"],
                ["Chicken manchurian with fried rice", "Non-veg"], ["Chicken hakka noodles", "Non-veg"],
                ["Chilli chicken with noodles", "Non-veg"], ["Kung pao chicken", "Non-veg"],
                ["Egg fried rice", "Non-veg"], ["Chicken momos", "Non-veg"],
                ["Chilli garlic prawns with rice", "Non-veg"]
            ],
            "Japanese & Korean": [
                ["Avocado and cucumber sushi rolls", "Veg"], ["Vegetable bibimbap", "Veg"],
                ["Veg gyoza", "Veg"], ["Vegetable yakisoba", "Veg"], ["Soba noodle bowl", "Veg"],
                ["Chicken ramen", "Non-veg"], ["Chicken teriyaki rice bowl", "Non-veg"],
                ["Salmon sushi", "Non-veg"], ["Chicken katsu curry", "Non-veg"],
                ["Korean fried chicken", "Non-veg"], ["Chicken bulgogi bowl", "Non-veg"],
                ["Chicken yakitori skewers", "Non-veg"]
            ],
            "Thai & Southeast Asian": [
                ["Thai green curry with vegetables", "Veg"], ["Veg pad thai", "Veg"],
                ["Thai basil tofu stir-fry", "Veg"], ["Vegetable laksa", "Veg"],
                ["Vietnamese fresh spring rolls", "Veg"], ["Veg satay with peanut sauce", "Veg"],
                ["Prawn pad thai", "Non-veg"], ["Thai red chicken curry", "Non-veg"],
                ["Chicken satay with peanut sauce", "Non-veg"], ["Tom kha gai (chicken coconut soup)", "Non-veg"],
                ["Chicken pho", "Non-veg"], ["Nasi goreng with egg", "Non-veg"],
                ["Chicken pad kra pao", "Non-veg"]
            ],
            "Italian": [
                ["Margherita pizza", "Veg"], ["Pasta arrabbiata", "Veg"], ["Mushroom risotto", "Veg"],
                ["Pesto pasta", "Veg"], ["Caprese sandwich", "Veg"],
                ["Minestrone soup with garlic bread", "Veg"], ["Penne alfredo", "Veg"],
                ["Bruschetta platter", "Veg"], ["Spinach and ricotta ravioli", "Veg"],
                ["Creamy chicken alfredo", "Non-veg"], ["Chicken lasagna", "Non-veg"],
                ["Spaghetti with chicken meatballs", "Non-veg"], ["Chicken parmigiana", "Non-veg"],
                ["Chicken pesto pasta", "Non-veg"], ["Prawn aglio e olio", "Non-veg"]
            ],
            "Mexican": [
                ["Veggie burrito bowl", "Veg"], ["Cheese quesadilla", "Veg"],
                ["Loaded nachos with salsa", "Veg"], ["Bean and corn tacos", "Veg"],
                ["Guacamole with chips", "Veg"], ["Veg enchiladas", "Veg"],
                ["Elote (Mexican street corn)", "Veg"], ["Veg fajitas", "Veg"],
                ["Chicken tacos", "Non-veg"], ["Chicken fajitas", "Non-veg"],
                ["Chicken burrito", "Non-veg"], ["Chicken enchiladas", "Non-veg"],
                ["Prawn tacos", "Non-veg"], ["Huevos rancheros", "Non-veg"]
            ],
            "Mediterranean & Middle Eastern": [
                ["Falafel wrap with hummus", "Veg"], ["Greek salad with pita", "Veg"],
                ["Hummus and pita platter", "Veg"], ["Stuffed bell peppers", "Veg"],
                ["Tabbouleh with grilled halloumi", "Veg"], ["Baba ganoush with pita", "Veg"],
                ["Spanakopita", "Veg"], ["Lentil soup with lemon", "Veg"],
                ["Chicken shawarma plate", "Non-veg"], ["Grilled lemon-herb fish", "Non-veg"],
                ["Chicken souvlaki", "Non-veg"], ["Lamb kofta with rice", "Non-veg"],
                ["Shakshuka with bread", "Non-veg"], ["Chicken kebab wrap with garlic sauce", "Non-veg"]
            ],
            "American & Café": [
                ["Veggie burger with fries", "Veg"], ["Mac and cheese", "Veg"],
                ["Grilled cheese and tomato soup", "Veg"], ["Eggless pancakes with maple syrup", "Veg"],
                ["Loaded baked potato", "Veg"], ["BBQ paneer sandwich", "Veg"],
                ["Crispy chicken burger", "Non-veg"], ["BBQ chicken wings", "Non-veg"],
                ["Chicken hot dog with fries", "Non-veg"], ["Fried chicken and waffles", "Non-veg"],
                ["Club sandwich", "Non-veg"], ["Chicken Caesar salad", "Non-veg"],
                ["Buffalo chicken wrap", "Non-veg"]
            ],
            "Street Food": [
                ["Pani puri", "Veg"], ["Pav bhaji", "Veg"], ["Vada pav", "Veg"],
                ["Samosa chaat", "Veg"], ["Bhel puri", "Veg"], ["Paneer kathi roll", "Veg"],
                ["Dahi puri", "Veg"], ["Aloo tikki chaat", "Veg"], ["Misal pav", "Veg"],
                ["Dabeli", "Veg"], ["Masala corn", "Veg"],
                ["Egg roll", "Non-veg"], ["Chicken kathi roll", "Non-veg"], ["Chicken 65", "Non-veg"],
                ["Seekh kebab roll", "Non-veg"], ["Chicken shawarma roll", "Non-veg"],
                ["Anda bhurji pav", "Non-veg"], ["Mutton keema pav", "Non-veg"]
            ],
            "Breakfast & Brunch": [
                ["Poha with sev and lemon", "Veg"], ["Avocado toast", "Veg"],
                ["Besan chilla with chutney", "Veg"], ["Moong dal chilla", "Veg"],
                ["Granola and yogurt bowl", "Veg"], ["Peanut butter banana toast", "Veg"],
                ["Smoothie bowl", "Veg"], ["Vegetable upma", "Veg"],
                ["Masala omelette with toast", "Non-veg"], ["Scrambled eggs on toast", "Non-veg"],
                ["French toast", "Non-veg"], ["Egg sandwich", "Non-veg"], ["Anda paratha", "Non-veg"]
            ],
            "Sweet Treats": [
                ["Gulab jamun with ice cream", "Veg"], ["Rasmalai", "Veg"],
                ["Mango sticky rice", "Veg"], ["Eggless brownie with vanilla ice cream", "Veg"],
                ["Jalebi with rabri", "Veg"], ["Chocolate lava cake (eggless)", "Veg"],
                ["Kulfi falooda", "Veg"], ["Payasam", "Veg"],
                ["Crème brûlée", "Non-veg"], ["Caramel custard", "Non-veg"]
            ],
            "Diet & Nutrition": [
    ["Moong dal khichdi with vegetables", "Veg", "Lentils, rice, and vegetables together give fibre and plant protein."],
    ["Chickpea and cucumber salad bowl", "Veg", "Chickpeas are a good source of fibre and plant protein."],
    ["Rajma with brown rice", "Veg", "Kidney beans and whole grains are rich in fibre."],
    ["Sprouted moong salad", "Veg", "Sprouted moong adds fibre and plant protein."],
    ["Palak dal with roti", "Veg", "Lentils and leafy greens contribute fibre and iron."],
    ["Oats porridge with fruit and nuts", "Veg", "Oats are a whole grain with fibre; nuts add healthy fats."],
    ["Ragi dosa with chutney", "Veg", "Ragi is a millet that provides fibre and calcium."],
    ["Vegetable quinoa bowl", "Veg", "Quinoa is a whole grain that contains all essential amino acids."],
    ["Greek yogurt with berries and seeds", "Veg", "Yogurt provides protein and calcium; berries add fibre."],
    ["Vegetable daliya", "Veg", "Broken wheat is a whole grain rich in fibre."],
    ["Moong dal chilla with mint chutney", "Veg", "Moong dal is a good source of plant protein."],
    ["Tofu and vegetable stir-fry with brown rice", "Veg", "Tofu gives plant protein; vegetables and brown rice add fibre."],
    ["Vegetable sambar with brown rice", "Veg", "Lentils and vegetables provide fibre and plant protein."],
    ["Hummus with veggie sticks and whole-wheat pita", "Veg", "Chickpeas and vegetables provide fibre and plant protein."],
    ["Lentil soup with a side salad", "Veg", "Lentils are rich in fibre and plant protein."],
    ["Grilled paneer and vegetable skewers", "Veg", "Paneer provides protein and calcium."],
    ["Avocado on whole-grain toast with seeds", "Veg", "Avocado and seeds provide unsaturated fats and fibre."],
    ["Overnight oats with chia and fruit", "Veg", "Oats and chia seeds provide fibre."],
    ["Millet khichdi with vegetables", "Veg", "Millets are whole grains that provide fibre."],
    ["Mixed bean salad with lemon dressing", "Veg", "Beans are rich in fibre and plant protein."],
    ["Roasted chana and fresh fruit plate", "Veg", "Chickpeas and fruit provide fibre."],
    ["Grilled fish with steamed vegetables", "Non-veg", "Fish is a good source of protein; oily fish also provide omega-3 fats."],
    ["Grilled salmon with quinoa and greens", "Non-veg", "Salmon is rich in omega-3 fats and protein."],
    ["Baked chicken with roasted vegetables", "Non-veg", "Chicken is a good source of protein; vegetables add fibre."],
    ["Vegetable and egg scramble on whole-grain toast", "Non-veg", "Eggs provide protein and several vitamins; whole grains add fibre."],
    ["Boiled eggs with a sprouts salad", "Non-veg", "Eggs add protein; sprouts add fibre."],
    ["Tandoori fish with a fresh salad", "Non-veg", "Fish is a good source of protein."],
    ["Grilled chicken salad with chickpeas", "Non-veg", "Chicken and chickpeas provide protein; vegetables add fibre."],
    ["Egg bhurji with vegetables and whole-wheat roti", "Non-veg", "Eggs provide protein; whole wheat adds fibre."],
    ["Steamed fish with brown rice and greens", "Non-veg", "Fish provides protein; brown rice and greens add fibre."],
    ["Prawn and vegetable stir-fry", "Non-veg", "Prawns provide protein; vegetables add fibre."],
    ["Chicken and vegetable soup with whole-grain bread", "Non-veg", "Chicken provides protein; vegetables and whole grain add fibre."]
],

        }
    },

    movie: {
        label: "Tonight’s movie",
        idle: "Pick a genre and your movie appears",
        hint: "Tap a genre to reveal a movie. Use the optional filter to choose Indian or international only.",
        auto: true,
        balance: "origin",
        notePrefix: "Language: ",
        filters: [
            { key: "genre", title: "Pick a genre" },
            { key: "origin", title: "From (optional)", options: [IN, OUT] }
        ],
        // Each entry: [title, origin, language]. Add a movie by adding a line.
        groups: {
            "Comedy": [
                ["3 Idiots", IN, "Hindi"], ["Andaz Apna Apna", IN, "Hindi"],
                ["Zindagi Na Milegi Dobara", IN, "Hindi"], ["Hera Pheri", IN, "Hindi"],
                ["Pelli Choopulu", IN, "Telugu"], ["Jathi Ratnalu", IN, "Telugu"],
                ["Sandesham", IN, "Malayalam"], ["Panchathanthiram", IN, "Tamil"],
                ["The Intouchables", OUT, "French"], ["Amélie", OUT, "French"],
                ["Extreme Job", OUT, "Korean"], ["The Grand Budapest Hotel", OUT, "English"],
                ["Little Miss Sunshine", OUT, "English"], ["Paddington 2", OUT, "English"],
                ["Jojo Rabbit", OUT, "English"], ["What We Do in the Shadows", OUT, "English"]
            ],
            "Thriller": [
                ["Andhadhun", IN, "Hindi"], ["Drishyam", IN, "Malayalam"],
                ["A Wednesday", IN, "Hindi"], ["Ratsasan", IN, "Tamil"],
                ["Kshanam", IN, "Telugu"], ["Evaru", IN, "Telugu"],
                ["Joseph", IN, "Malayalam"], ["Badla", IN, "Hindi"],
                ["Parasite", OUT, "Korean"], ["Memories of Murder", OUT, "Korean"],
                ["Oldboy", OUT, "Korean"], ["Se7en", OUT, "English"],
                ["Gone Girl", OUT, "English"], ["Shutter Island", OUT, "English"],
                ["Nightcrawler", OUT, "English"], ["Searching", OUT, "English"]
            ],
            "Romance": [
                ["Jab We Met", IN, "Hindi"], ["Sita Ramam", IN, "Telugu"],
                ["96", IN, "Tamil"], ["Premam", IN, "Malayalam"],
                ["Geetha Govindam", IN, "Telugu"], ["Veer-Zaara", IN, "Hindi"],
                ["Vinnaithaandi Varuvaayaa", IN, "Tamil"], ["Yeh Jawaani Hai Deewani", IN, "Hindi"],
                ["About Time", OUT, "English"], ["La La Land", OUT, "English"],
                ["Before Sunrise", OUT, "English"], ["Pride & Prejudice (2005)", OUT, "English"],
                ["Eternal Sunshine of the Spotless Mind", OUT, "English"], ["In the Mood for Love", OUT, "Cantonese"],
                ["Portrait of a Lady on Fire", OUT, "French"], ["Past Lives", OUT, "English, Korean"]
            ],
            "Drama": [
                ["Taare Zameen Par", IN, "Hindi"], ["Swades", IN, "Hindi"],
                ["Masaan", IN, "Hindi"], ["Kumbalangi Nights", IN, "Malayalam"],
                ["Pariyerum Perumal", IN, "Tamil"], ["C/o Kancharapalem", IN, "Telugu"],
                ["Court", IN, "Marathi"], ["Pather Panchali", IN, "Bengali"],
                ["The Shawshank Redemption", OUT, "English"], ["Forrest Gump", OUT, "English"],
                ["Whiplash", OUT, "English"], ["Life Is Beautiful", OUT, "Italian"],
                ["Cinema Paradiso", OUT, "Italian"], ["Children of Heaven", OUT, "Persian"],
                ["A Separation", OUT, "Persian"], ["Shoplifters", OUT, "Japanese"]
            ],
            "Action": [
                ["RRR", IN, "Telugu"], ["Baahubali: The Beginning", IN, "Telugu"],
                ["K.G.F: Chapter 1", IN, "Kannada"], ["Kaithi", IN, "Tamil"],
                ["Vikram", IN, "Tamil"], ["Sholay", IN, "Hindi"],
                ["Uri: The Surgical Strike", IN, "Hindi"], ["Pushpa: The Rise", IN, "Telugu"],
                ["The Dark Knight", OUT, "English"], ["Mad Max: Fury Road", OUT, "English"],
                ["John Wick", OUT, "English"], ["Mission: Impossible – Fallout", OUT, "English"],
                ["Crouching Tiger, Hidden Dragon", OUT, "Mandarin"], ["The Raid", OUT, "Indonesian"],
                ["Ip Man", OUT, "Cantonese"], ["Hero (2002)", OUT, "Mandarin"]
            ],
            "Sci-fi": [
                ["PK", IN, "Hindi"], ["Koi... Mil Gaya", IN, "Hindi"],
                ["Mr. India", IN, "Hindi"], ["Enthiran", IN, "Tamil"],
                ["24", IN, "Tamil"], ["Indru Netru Naalai", IN, "Tamil"],
                ["Aditya 369", IN, "Telugu"], ["Kalki 2898 AD", IN, "Telugu"],
                ["Interstellar", OUT, "English"], ["Inception", OUT, "English"],
                ["The Matrix", OUT, "English"], ["Arrival", OUT, "English"],
                ["Ex Machina", OUT, "English"], ["Back to the Future", OUT, "English"],
                ["The Martian", OUT, "English"], ["Snowpiercer", OUT, "English, Korean"]
            ],
            "Mystery": [
                ["Kahaani", IN, "Hindi"], ["Talaash", IN, "Hindi"],
                ["Detective Byomkesh Bakshy!", IN, "Hindi"], ["Agent Sai Srinivasa Athreya", IN, "Telugu"],
                ["Dhuruvangal Pathinaaru", IN, "Tamil"], ["Mumbai Police", IN, "Malayalam"],
                ["Memories", IN, "Malayalam"], ["Kavaludaari", IN, "Kannada"],
                ["Knives Out", OUT, "English"], ["Glass Onion", OUT, "English"],
                ["Rear Window", OUT, "English"], ["The Prestige", OUT, "English"],
                ["Memento", OUT, "English"], ["Prisoners", OUT, "English"],
                ["The Secret in Their Eyes", OUT, "Spanish"], ["The Invisible Guest", OUT, "Spanish"]
            ],
            "Family & Animation": [
                ["Mahavatar Narsimha", IN, "Hindi"], ["Stanley Ka Dabba", IN, "Hindi"],
                ["I Am Kalam", IN, "Hindi"], ["Piku", IN, "Hindi"],
                ["Hichki", IN, "Hindi"], ["Ustad Hotel", IN, "Malayalam"],
                ["Bangalore Days", IN, "Malayalam"], ["Hi Nanna", IN, "Telugu"],
                ["Coco", OUT, "English"], ["Spirited Away", OUT, "Japanese"],
                ["Up", OUT, "English"], ["Inside Out", OUT, "English"],
                ["WALL·E", OUT, "English"], ["Your Name", OUT, "Japanese"],
                ["Kiki’s Delivery Service", OUT, "Japanese"], ["Spider-Man: Into the Spider-Verse", OUT, "English"]
            ],
            "Adventure": [
                ["Karthikeya 2", IN, "Telugu"], ["Hanuman", IN, "Telugu"],
                ["Kantara", IN, "Kannada"], ["Charlie", IN, "Malayalam"],
                ["Ponniyin Selvan: I", IN, "Tamil"], ["Magadheera", IN, "Telugu"],
                ["Eega", IN, "Telugu"], ["Highway", IN, "Hindi"],
                ["The Secret Life of Walter Mitty", OUT, "English"], ["Raiders of the Lost Ark", OUT, "English"],
                ["Life of Pi", OUT, "English"], ["Into the Wild", OUT, "English"],
                ["Pirates of the Caribbean: The Curse of the Black Pearl", OUT, "English"],
                ["The Lord of the Rings: The Fellowship of the Ring", OUT, "English"],
                ["The Motorcycle Diaries", OUT, "Spanish"], ["Kon-Tiki", OUT, "Norwegian"]
            ],
            "Horror": [
                ["Tumbbad", IN, "Hindi"], ["Stree", IN, "Hindi"],
                ["Bhool Bhulaiyaa", IN, "Hindi"], ["Bhoothakaalam", IN, "Malayalam"],
                ["Bramayugam", IN, "Malayalam"], ["Kanchana", IN, "Tamil"],
                ["Munjya", IN, "Hindi"], ["Pizza", IN, "Tamil"],
                ["Train to Busan", OUT, "Korean"], ["Get Out", OUT, "English"],
                ["A Quiet Place", OUT, "English"], ["The Conjuring", OUT, "English"],
                ["Psycho", OUT, "English"], ["Let the Right One In", OUT, "Swedish"],
                ["The Orphanage", OUT, "Spanish"], ["Ringu", OUT, "Japanese"]
            ],
            "Crime": [
                ["Gangs of Wasseypur", IN, "Hindi"], ["Satya", IN, "Hindi"],
                ["Black Friday", IN, "Hindi"], ["Special 26", IN, "Hindi"],
                ["Vikram Vedha", IN, "Tamil"], ["Jigarthanda", IN, "Tamil"],
                ["Maharaja", IN, "Tamil"], ["Joji", IN, "Malayalam"],
                ["The Godfather", OUT, "English"], ["Pulp Fiction", OUT, "English"],
                ["Goodfellas", OUT, "English"], ["City of God", OUT, "Portuguese"],
                ["Infernal Affairs", OUT, "Cantonese"], ["The Departed", OUT, "English"],
                ["Catch Me If You Can", OUT, "English"], ["Ocean’s Eleven", OUT, "English"]
            ],
            "Biopic & True Story": [
                ["Dangal", IN, "Hindi"], ["Bhaag Milkha Bhaag", IN, "Hindi"],
                ["Mahanati", IN, "Telugu"], ["Soorarai Pottru", IN, "Tamil"],
                ["Sardar Udham", IN, "Hindi"], ["Neerja", IN, "Hindi"],
                ["Shershaah", IN, "Hindi"], ["Jai Bhim", IN, "Tamil"],
                ["The Social Network", OUT, "English"], ["Hidden Figures", OUT, "English"],
                ["The Imitation Game", OUT, "English"], ["A Beautiful Mind", OUT, "English"],
                ["The King’s Speech", OUT, "English"], ["The Diving Bell and the Butterfly", OUT, "French"],
                ["Oppenheimer", OUT, "English"], ["Gandhi (1982)", OUT, "English"]
            ]
        }
    },

    series: {
        label: "Tonight’s series",
        idle: "Pick a genre and your binge appears",
        hint: "Tap a genre to reveal a web series. Use the optional filter to choose Indian or international only.",
        auto: true,
        balance: "origin",
        notePrefix: "Language: ",
        filters: [
            { key: "genre", title: "Pick a genre" },
            { key: "origin", title: "From (optional)", options: [IN, OUT] }
        ],
        // Each entry: [title, origin, language]
        groups: {
            "Comedy": [
                ["Panchayat", IN, "Hindi"], ["Gullak", IN, "Hindi"],
                ["Permanent Roommates", IN, "Hindi"], ["TVF Pitchers", IN, "Hindi"],
                ["Yeh Meri Family", IN, "Hindi"],
                ["Brooklyn Nine-Nine", OUT, "English"], ["Schitt’s Creek", OUT, "English"],
                ["Fleabag", OUT, "English"], ["Call My Agent!", OUT, "French"],
                ["Ted Lasso", OUT, "English"]
            ],
            "Drama": [
                ["Kota Factory", IN, "Hindi"], ["Aspirants", IN, "Hindi"],
                ["Bandish Bandits", IN, "Hindi"], ["Made in Heaven", IN, "Hindi"],
                ["Mumbai Diaries 26/11", IN, "Hindi"],
                ["Succession", OUT, "English"], ["Reply 1988", OUT, "Korean"],
                ["Midnight Diner: Tokyo Stories", OUT, "Japanese"], ["Normal People", OUT, "English"],
                ["This Is Us", OUT, "English"]
            ],
            "Crime": [
                ["Delhi Crime", IN, "Hindi"], ["Paatal Lok", IN, "Hindi"],
                ["Sacred Games", IN, "Hindi"], ["Mirzapur", IN, "Hindi"],
                ["Kohrra", IN, "Hindi"],
                ["Breaking Bad", OUT, "English"], ["Peaky Blinders", OUT, "English"],
                ["Money Heist", OUT, "Spanish"], ["Narcos", OUT, "English, Spanish"],
                ["Mindhunter", OUT, "English"]
            ],
            "Thriller": [
                ["The Family Man", IN, "Hindi"], ["Special Ops", IN, "Hindi"],
                ["Aarya", IN, "Hindi"], ["Criminal Justice", IN, "Hindi"],
                ["Undekhi", IN, "Hindi"],
                ["Squid Game", OUT, "Korean"], ["Mr. Robot", OUT, "English"],
                ["Slow Horses", OUT, "English"], ["Homeland", OUT, "English"],
                ["Bodyguard", OUT, "English"]
            ],
            "Mystery": [
                ["Dahaad", IN, "Hindi"], ["Suzhal: The Vortex", IN, "Tamil"],
                ["Aranyak", IN, "Hindi"], ["Charlie Chopra & The Mystery of Solang Valley", IN, "Hindi"],
                ["Vadhandhi: The Fable of Velonie", IN, "Tamil"],
                ["Sherlock", OUT, "English"], ["Broadchurch", OUT, "English"],
                ["The Bridge", OUT, "Swedish, Danish"], ["Only Murders in the Building", OUT, "English"],
                ["Mare of Easttown", OUT, "English"]
            ],
            "Sci-fi & Supernatural": [
                ["Leila", IN, "Hindi"], ["Ghoul", IN, "Hindi"],
                ["Betaal", IN, "Hindi"], ["Asur", IN, "Hindi"],
                ["Dhootha", IN, "Telugu"],
                ["Dark", OUT, "German"], ["Black Mirror", OUT, "English"],
                ["Stranger Things", OUT, "English"], ["The Last of Us", OUT, "English"],
                ["Kingdom", OUT, "Korean"]
            ],
            "Romance & Feel-good": [
                ["Little Things", IN, "Hindi"], ["Mismatched", IN, "Hindi"],
                ["Tripling", IN, "Hindi"], ["Hostel Daze", IN, "Hindi"],
                ["Four More Shots Please!", IN, "Hindi"],
                ["Crash Landing on You", OUT, "Korean"], ["Extraordinary Attorney Woo", OUT, "Korean"],
                ["Heartstopper", OUT, "English"], ["Gilmore Girls", OUT, "English"],
                ["Bridgerton", OUT, "English"]
            ],
            "Period & True Story": [
                ["Scam 1992", IN, "Hindi"], ["Rocket Boys", IN, "Hindi"],
                ["The Railway Men", IN, "Hindi"], ["Jubilee", IN, "Hindi"],
                ["Heeramandi", IN, "Hindi"],
                ["Chernobyl", OUT, "English"], ["The Crown", OUT, "English"],
                ["Shōgun", OUT, "English, Japanese"], ["Band of Brothers", OUT, "English"],
                ["The Queen’s Gambit", OUT, "English"]
            ]
        }
    }
};