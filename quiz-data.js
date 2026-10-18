// ============================================================
// YOUR QUIZZES. Edit this file to change or add quizzes.
// Personality quiz: each answer is ["answer text", "resultKey"].
// Checklist quiz: a list of items and score bands (lowest first).
// Keep the commas and quotes. The last item in a list has no comma.
// ============================================================
const QUIZZES = [
    {
        id: "era",
        emoji: "📼",
        title: "Which era is your soul from?",
        blurb: "Seven questions. Cassettes, keypads, or reels?",
        type: "personality",
        questions: [
            { q: "How do you reach a friend?", a: [
                ["Call their landline and hope a parent doesn’t pick up", "nineties"],
                ["Send an SMS and count your pack", "noughties"],
                ["Message them and watch the typing dots", "tens"],
                ["Send a quick voice note or video call", "twenties"]
            ]},
            { q: "Your music usually comes from…", a: [
                ["A cassette you rewind with a pencil", "nineties"],
                ["A burned CD or a tiny MP3 player", "noughties"],
                ["Songs saved on your phone for the bus ride", "tens"],
                ["A streaming playlist on repeat", "twenties"]
            ]},
            { q: "A free evening outside means…", a: [
                ["Street cricket until someone’s mother calls everyone home", "nineties"],
                ["A game parlour or the cyber cafe", "noughties"],
                ["A cafe with friends, phones face-up on the table", "tens"],
                ["Food delivered in ten minutes, and you stay in", "twenties"]
            ]},
            { q: "How do you keep a memory?", a: [
                ["A photo album and one precious film roll", "nineties"],
                ["Digital camera photos copied to the family computer", "noughties"],
                ["A filtered selfie, posted right away", "tens"],
                ["A short video with a trending sound", "twenties"]
            ]},
            { q: "You want to learn something new. You…", a: [
                ["Ask an elder or borrow a book", "nineties"],
                ["Search at the cyber cafe and take printouts home", "noughties"],
                ["Watch a tutorial video", "tens"],
                ["Ask an AI assistant", "twenties"]
            ]},
            { q: "Paying a friend back means…", a: [
                ["Cash, carefully counted", "nineties"],
                ["A recharge or a snack to settle it", "noughties"],
                ["A quick bank transfer on an app", "tens"],
                ["Scan the QR code and done", "twenties"]
            ]},
            { q: "Your dream summer holiday?", a: [
                ["Grandparents’ home, mangoes, and no schedule", "nineties"],
                ["Hobby classes and a new movie on disc", "noughties"],
                ["A hill-station trip with the whole gang", "tens"],
                ["A workcation with great Wi-Fi", "twenties"]
            ]}
        ],
        results: {
            nineties: { emoji: "📼", title: "The 90s Soul",
                text: "You believe the best things take a little patience: a full album on one tape, a long phone call, a summer with no schedule. You like things that feel real, and you still know a few phone numbers by heart.",
                traits: ["Patient", "Nostalgic", "Outdoorsy"] },
            noughties: { emoji: "💿", title: "The 2000s Dreamer",
                text: "You grew up in the age of firsts: the first mobile, the first email, the first song you burned for a friend. You are curious and adaptable, and a certain old ringtone still makes you smile.",
                traits: ["Curious", "Adaptable", "Sentimental"] },
            tens: { emoji: "🤳", title: "The 2010s Trendsetter",
                text: "You love a good plan, a good photo, and a good group chat. You are social and quick to spot what’s next, and you make everyone feel included, usually with a perfectly timed meme.",
                traits: ["Social", "Creative", "Connected"] },
            twenties: { emoji: "⚡", title: "The 2020s Speedster",
                text: "You like answers fast and choices easy. You learn from everywhere, move between screens with ease, and are happiest when life is efficient. Remember to put the phone down for a sunset now and then.",
                traits: ["Efficient", "Resourceful", "Future-ready"] }
        }
    },

    {
        id: "chai",
        emoji: "🍵",
        title: "What’s your chai personality?",
        blurb: "Six questions. Find the cup that matches you.",
        type: "personality",
        questions: [
            { q: "Your ideal rainy evening?", a: [
                ["A window seat, strong tea, and complete quiet", "adrak"],
                ["A quick roadside stop between plans", "cutting"],
                ["Friends over, with snacks all around", "masala"],
                ["Trying a new cafe nobody has heard of", "iced"]
            ]},
            { q: "On a group trip, you’re the one who…", a: [
                ["Keeps everyone on schedule", "adrak"],
                ["Finds the best street stall in minutes", "cutting"],
                ["Makes sure everybody is comfortable", "masala"],
                ["Suggests the unplanned detour", "iced"]
            ]},
            { q: "The deadline is tomorrow. You…", a: [
                ["Finished yesterday, no drama", "adrak"],
                ["Do it all in one focused burst", "cutting"],
                ["Call a friend to work alongside you", "masala"],
                ["Rebuild the whole plan at midnight", "iced"]
            ]},
            { q: "Your texting style?", a: [
                ["Short and direct", "adrak"],
                ["Quick replies while on the move", "cutting"],
                ["Long, warm messages with lots of emoji", "masala"],
                ["Memes, voice notes, and random links", "iced"]
            ]},
            { q: "Pick a snack.", a: [
                ["Plain biscuits, no fuss", "adrak"],
                ["A hot samosa", "cutting"],
                ["Something homemade", "masala"],
                ["Something fusion you’ve never tried", "iced"]
            ]},
            { q: "Friends would describe you as…", a: [
                ["Reliable", "adrak"],
                ["Energetic", "cutting"],
                ["Caring", "masala"],
                ["Curious", "iced"]
            ]}
        ],
        results: {
            adrak: { emoji: "🍵", title: "Kadak Adrak",
                text: "Strong, clear, and no nonsense. You say what you mean, finish what you start, and people trust you in a crisis. Your tea is bold, and so are your boundaries.",
                traits: ["Direct", "Reliable", "Focused"] },
            cutting: { emoji: "☕", title: "Cutting Chai",
                text: "Small glass, big energy. You pack a lot into a short time, you are always on your way somewhere, and you make the most of every five-minute break. Friends come to you for quick, honest advice.",
                traits: ["Energetic", "Quick", "Street-smart"] },
            masala: { emoji: "🫖", title: "Masala Chai",
                text: "Warm, layered, and made to share. You remember birthdays, keep the snack box full, and make everyone feel at home. Your calm is contagious.",
                traits: ["Caring", "Warm", "Generous"] },
            iced: { emoji: "🧊", title: "Iced Tea",
                text: "Cool, curious, and a little unexpected. You like the new place, the odd combination, and the road nobody suggested. You respect tradition, just with your own twist.",
                traits: ["Curious", "Experimental", "Easygoing"] }
        }
    },

    {
        id: "city",
        emoji: "🏙️",
        title: "Which Indian city should you live in?",
        blurb: "Six questions. Just for fun, no moving trucks needed.",
        type: "personality",
        questions: [
            { q: "Your ideal morning?", a: [
                ["Out early, chai in hand, with a plan for the day", "mumbai"],
                ["A quiet walk under big trees, then good coffee", "bengaluru"],
                ["Parathas, long conversation, and winter sun", "delhi"],
                ["A slow breakfast with a cup of Irani chai", "hyderabad"],
                ["Tea, the newspaper, and an endless chat", "kolkata"]
            ]},
            { q: "Your perfect weekend?", a: [
                ["A sunset by the sea with street snacks", "mumbai"],
                ["Live music at a cozy little venue", "bengaluru"],
                ["A heritage walk followed by a long meal", "delhi"],
                ["A family lunch that stretches into the afternoon", "hyderabad"],
                ["A bookshop, a gallery, and an evening of conversation", "kolkata"]
            ]},
            { q: "Your work style?", a: [
                ["Fast, flexible, always in motion", "mumbai"],
                ["Collaborative, full of new ideas", "bengaluru"],
                ["Network, connect, get it done", "delhi"],
                ["Steady, balanced, and thorough", "hyderabad"],
                ["Thoughtful and creative", "kolkata"]
            ]},
            { q: "Your food mood?", a: [
                ["A midnight vada pav", "mumbai"],
                ["Filter coffee and a crisp dosa", "bengaluru"],
                ["Chaat on a cold evening", "delhi"],
                ["A big plate of biryani", "hyderabad"],
                ["Rolls and something sweet", "kolkata"]
            ]},
            { q: "Weather you love?", a: [
                ["Monsoon and a sea breeze", "mumbai"],
                ["Mild and breezy all year", "bengaluru"],
                ["Crisp winters", "delhi"],
                ["Warm days and pleasant evenings", "hyderabad"],
                ["Rain-washed streets and a festive mood", "kolkata"]
            ]},
            { q: "What matters most in a home city?", a: [
                ["Opportunity and energy", "mumbai"],
                ["Green spaces and a young crowd", "bengaluru"],
                ["History and variety", "delhi"],
                ["A balance of tradition and growth", "hyderabad"],
                ["Culture and community", "kolkata"]
            ]}
        ],
        results: {
            mumbai: { emoji: "🌊", title: "Mumbai",
                text: "You thrive on energy and momentum. You like a city that never lets you feel stuck, where an ordinary evening can turn into a story. You are ambitious, adaptable, and good in a crowd.",
                traits: ["Ambitious", "Resilient", "Energetic"] },
            bengaluru: { emoji: "🌳", title: "Bengaluru",
                text: "You like a city that’s easy on the mind: pleasant weather, green pockets, and people who enjoy building things. You value ideas, good coffee, and a little breathing room.",
                traits: ["Curious", "Creative", "Easygoing"] },
            delhi: { emoji: "🏛️", title: "Delhi",
                text: "You love history, variety, and a long meal with good company. You are sociable, confident, and never short of opinions. A city of layers suits someone who enjoys discovering them.",
                traits: ["Social", "Confident", "Food lover"] },
            hyderabad: { emoji: "🍛", title: "Hyderabad",
                text: "You prefer a balanced pace: modern work, deep traditions, and a plate worth waiting for. You are warm and hospitable, and you enjoy a city where old and new sit comfortably side by side.",
                traits: ["Hospitable", "Grounded", "Foodie"] },
            kolkata: { emoji: "📚", title: "Kolkata",
                text: "You love conversation, art, and a city that takes its culture seriously. You are thoughtful and expressive, and happiest when there’s time to talk about everything over a cup of tea.",
                traits: ["Thoughtful", "Artistic", "Expressive"] }
        }
    },

    {
        id: "nostalgia",
        emoji: "💾",
        title: "The Nostalgia Meter",
        blurb: "Tick what you remember and see how old your soul is.",
        type: "checklist",
        intro: "Tap everything you have done or remember. No judgment, whatever your age.",
        items: [
            "Rewound a cassette with a pencil",
            "Waited by the landline for a call",
            "Played street cricket with a tennis ball",
            "Watched a weekly TV serial with the whole family",
            "Made a call from a coin-operated booth",
            "Heard the dial-up internet screech",
            "Collected stickers or trading cards",
            "Wrote in a friend’s autograph book",
            "Adjusted the TV antenna for a clearer picture",
            "Spent summer holidays at your grandparents’ home",
            "Borrowed books from a neighborhood lending library",
            "Knew your best friend’s phone number by heart",
            "Waited days for a film roll to be developed",
            "Typed a message on a keypad phone",
            "Spent an hour at a cyber cafe",
            "Burned a CD of songs for a friend"
        ],
        bands: [
            { min: 0, emoji: "📱", title: "Fresh Signal",
              text: "You grew up with everything one tap away, and that’s a superpower. Ask an older relative about the list above, because they have stories, and probably a few of those things in a cupboard.",
              traits: ["Digital native", "Fast learner"] },
            { min: 4, emoji: "💾", title: "Bridge Generation",
              text: "You remember a little of both worlds: enough to appreciate the past, and enough to use the present. You can explain a cassette to a teenager and a chatbot to a grandparent.",
              traits: ["Adaptable", "Translator of eras"] },
            { min: 8, emoji: "📼", title: "Keeper of Memories",
              text: "You carry a lot of the old world with you: the sounds, the waiting, the slow joys. You probably still know a few phone numbers by heart.",
              traits: ["Sentimental", "Storyteller"] },
            { min: 13, emoji: "🏛️", title: "Living Museum",
              text: "You are a walking archive of a slower time. Schools should invite you to explain what life was like before everything moved online.",
              traits: ["Legend", "Archive of stories"] }
        ]
    }
];

// Cover art for each quiz card. hue is a color number from 0 to 360.
// emojis are the four small decorations around the big one.
// Optional: add image: "images/era.jpg" to use your own photo instead.
const COVERS = {
    era: { hue: 265, emojis: ["📼", "💿", "🤳", "⚡"] },
    chai: { hue: 25, emojis: ["🍵", "☕", "🫖", "🧊"] },
    city: { hue: 195, emojis: ["🌊", "🌳", "🏛️", "🍛"] },
    nostalgia: { hue: 325, emojis: ["💾", "📟", "📺", "☎️"] }
};