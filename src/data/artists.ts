export interface SyncExample {
  songTitle: string;
  show: string;
  network: string;
  year: number;
}

export interface YoutubeVideo {
  id: string;
  title: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Socials {
  instagram?: string;
  youtube?: string;
  facebook?: string;
}

export interface Artist {
  name: string;
  slug: string;
  genre: string;
  bio: string;
  profileImage: string;
  heroImage: string;
  imagePosition?: string;
  accentColor: string;
  stats: Stat[];
  accomplishments: string[];
  youtubeVideos: YoutubeVideo[];
  photos: string[];
  syncExamples: SyncExample[];
  discoUrl: string;
  socials: Socials;
  legacy?: boolean;
}

export const artists: Artist[] = [
  {
    name: "Lecrae",
    slug: "lecrae",
    genre: "Hip-Hop / Gospel",
    accentColor: "#C8B89A",
    bio: "The multiple Grammy Award winner and New York Times bestselling author Lecrae has evolved from primarily being an artist into an entrepreneur, speaker, activist, thought leader, and philanthropist. Lecrae now influences millions with his socially conscious message and transcendent sound, positioning himself as a catalyst for restoration in faith, music, and popular culture.",
    profileImage: "/images/artists/lecrae.jpg",
    heroImage: "/images/artists/lecrae.jpg",
    stats: [
      { value: "2M+", label: "Monthly Listeners" },
      { value: "229M+", label: "Streams" },
      { value: "370M+", label: "YouTube Views" },
      { value: "2.3M", label: "Instagram" },
    ],
    accomplishments: [
      "Multiple Grammy Award winner — including Best Gospel Album",
      "7th LP Anomaly certified Gold by the RIAA — debuted at #1 on the Billboard 200 Chart",
      "RIAA Platinum certified single 'I'll Find You' ft. Tori Kelly — nominated for 2018 Billboard Music Award and BET Award",
      "RIAA Gold certified single 'Coming In Hot' with Andy Mineo — #2 on Instagram's #IGReels Playback Top U.S. Songs for 2021",
      "3rd artist included in the NFL's 'Song of the Season' series — 'Get Back Right' heard throughout the 2020 NFL playoffs and Super Bowl",
      "'Sunday Morning' ft. Kirk Franklin Grammy nominated for Best Contemporary Christian Performance/Song",
      "New York Times Bestselling Author for memoir, Unashamed",
      "Presented TEDx Talk 'Is Hip Hop a Cancer or Cure?' discussing America's War on Drugs and Hip-Hop",
      "TV appearances: The Tonight Show Starring Jimmy Fallon, GMA, ESPN SportsCenter, MTV's Wild 'N Out, Headline News",
      "'This Is My Time' and 'Where We Come From' featured on the official PlayStation soundtrack",
    ],
    youtubeVideos: [
      { id: "x4Gifu5r-y8", title: "Coming In Hot" },
      { id: "b8jSR88aV9s", title: "Get Out My Way" },
      { id: "jF5kEWD9q-U", title: "Get Back Right" },
    ],
    photos: [],
    syncExamples: [
      { songTitle: "Get Back Right", show: "NFL Playoffs / Super Bowl", network: "NFL / CBS", year: 2020 },
      { songTitle: "This Is My Time", show: "PlayStation Official Soundtrack", network: "PlayStation", year: 2019 },
      { songTitle: "Where We Come From", show: "PlayStation Official Soundtrack", network: "PlayStation", year: 2019 },
    ],
    discoUrl: "https://www.discogs.com/artist/2228725-Lecrae",
    socials: {
      instagram: "https://www.instagram.com/lecrae",
      youtube: "https://www.youtube.com/@lecrae",
      facebook: "https://www.facebook.com/lecrae",
    },
  },
  {
    name: "Andy Mineo",
    slug: "andy-mineo",
    genre: "Hip-Hop",
    accentColor: "#A8B5C8",
    bio: "New York native Andy Mineo is a hip hop recording artist known for his reflective lyricism. His sophomore album Uncomfortable became the No. 1 Independent record in the country, debuting at No. 3 on Billboard's Hip Hop chart and No. 10 on the Top 200. Mineo headlined the Uncomfortable Tour — a 52-city tour that sold out legendary venues across America and Europe. He is a born communicator with comedic timing who has become a social media juggernaut with an audience of over 1.2M and growing.",
    profileImage: "/images/artists/andy-mineo.jpg",
    heroImage: "/images/artists/andy-mineo.jpg",
    stats: [
      { value: "1.9M", label: "Monthly Listeners" },
      { value: "676K", label: "Instagram" },
      { value: "500+", label: "Shows Since 2014" },
      { value: "40K+", label: "Tickets Sold" },
    ],
    accomplishments: [
      "'Coming In Hot' ft. Lecrae certified Gold by the RIAA — used by Kim Kardashian, Gigi Hadid, Will Smith; named Steph Curry's favorite song",
      "'You Can't Stop Me' certified Gold — voted ESPN Baseball Tonight's Best Walk Up Song over Taylor Swift and Led Zeppelin",
      "Uncomfortable debuted at No. 1 Independent, No. 3 Billboard Hip-Hop, No. 10 Billboard Top 200",
      "Headlined and sold out: Irving Plaza, The Wiltern, House of Blues Chicago, The Fillmore, Center Stage",
      "Over 500 shows performed since 2014 across 70+ major cities",
      "Appeared on Sway In The Morning, XXL, MTV, FOX5 NYC, 106 & Park, Billboard",
      "Created 3-season YouTube web series 'Saturday Morning Car-Tunez' — over 1M views",
      "Opened for Logic, Jon Bellion, Tory Lanez, and Fetty Wap",
      ">10M views for 'You Can't Stop Me' | >8M streams for Uncomfortable album",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "You Can't Stop Me" },
      { id: "dQw4w9WgXcQ", title: "Coming In Hot (ft. Lecrae)" },
      { id: "dQw4w9WgXcQ", title: "Uncomfortable" },
    ],
    photos: [],
    syncExamples: [],
    legacy: true,
    discoUrl: "https://www.discogs.com/artist/3095884-Andy-Mineo",
    socials: {
      instagram: "https://www.instagram.com/andymineo",
      youtube: "https://www.youtube.com/@andymineo",
      facebook: "https://www.facebook.com/andymineo",
    },
  },
  {
    name: "1K Phew",
    slug: "1k-phew",
    genre: "Hip-Hop / Street Gospel",
    accentColor: "#C4A8B5",
    bio: "A new breed of artist taking trap sensibility and elevating it into a new sound called 'Street Gospel' — a term coined by Atlanta-based Reach Records artist 1K PHEW. His collaborative album with Lecrae, No Church In A While, is a raw and honest body of work that speaks to everyone who has ever felt disconnected from their faith. 1K Phew's message is simple: faith and hope, and the story of how he overcame his obstacles.",
    profileImage: "/images/artists/1k-phew.jpg",
    heroImage: "/images/artists/1k-phew.jpg",
    imagePosition: "center center",
    stats: [
      { value: "225K+", label: "Spotify Listeners" },
      { value: "26.8M", label: "Streams" },
      { value: "271K", label: "Instagram" },
      { value: "34K", label: "YouTube Subs" },
    ],
    accomplishments: [
      "Headlined the Rapzilla Freshman Pool Party — a festival featuring acts from over 15 Christian Hip-Hop artists",
      "'Drip Lee' with WHATUPRG trended in Brazil with a 600% increase in overall consumption",
      "Singles 'We Did It' and 'Bigger Than Me' featured on NBA 2K's official soundtrack in 2019",
      "Single 'Dirty Birds' named the official 2019 season-anthem for the Atlanta Falcons",
      "Worked with producers Metro Boomin, Zaytoven, and Sonny Digitalas",
      "Collaborated with Def Jam recording artist Landsctrip Chip",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Dirty Birds" },
      { id: "dQw4w9WgXcQ", title: "Drip Lee (ft. WHATUPRG)" },
      { id: "dQw4w9WgXcQ", title: "No Church In A While (ft. Lecrae)" },
    ],
    photos: [],
    syncExamples: [
      { songTitle: "We Did It", show: "NBA 2K Official Soundtrack", network: "2K Games / NBA", year: 2019 },
      { songTitle: "Bigger Than Me", show: "NBA 2K Official Soundtrack", network: "2K Games / NBA", year: 2019 },
      { songTitle: "Dirty Birds", show: "Atlanta Falcons Season Anthem", network: "NFL / Fox", year: 2019 },
    ],
    discoUrl: "https://www.discogs.com/artist/7075635-1K-Phew",
    socials: {
      instagram: "https://www.instagram.com/1kphew",
      youtube: "https://www.youtube.com/@1kphew",
      facebook: "https://www.facebook.com/1kphew",
    },
  },
  {
    name: "Hulvey",
    slug: "hulvey",
    genre: "Hip-Hop / Gospel",
    accentColor: "#A8B8A0",
    bio: "Hulvey, a Brunswick, GA native, went from dropping out of college and scrubbing toilets at Publix to becoming Reach Records' latest hip hop rising artist. Pandora named him 'Christian Artist to Watch in 2020.' His album Christopher debuted at #8 on Billboard's Christian/Gospel Albums Chart and #19 on Billboard's Rap Albums Chart, accumulating over 7 million streams to date. Collaborators include Andy Mineo, Lecrae, BigBreeze, and pop sensation SVRCINA.",
    profileImage: "/images/artists/hulvey.jpg",
    heroImage: "/images/artists/hulvey.jpg",
    stats: [
      { value: "148K", label: "Monthly Listeners" },
      { value: "7M+", label: "Christopher Streams" },
      { value: "2M", label: "YouTube Views" },
      { value: "582K", label: "Instagram" },
    ],
    accomplishments: [
      "Pandora Christian Artist to Watch in 2020",
      "Christopher debuted at #8 on Billboard's Christian/Gospel Albums Chart",
      "Christopher debuted at #19 on Billboard's Rap Albums Chart",
      "'Reasons' garnered over 2M streams in the first two months of release",
      "Over 7 million cumulative streams on Christopher",
      "'Higher' and 'Real Love' featured on VH1's Love and Hip Hop Atlanta in 2020",
      "'Cold Blooded' featured on ABC's hit show The Rookie in 2021",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Reasons (ft. SVRCINA)" },
      { id: "dQw4w9WgXcQ", title: "Higher" },
      { id: "dQw4w9WgXcQ", title: "Cold Blooded" },
    ],
    photos: [],
    syncExamples: [
      { songTitle: "Higher", show: "Love and Hip Hop Atlanta", network: "VH1", year: 2020 },
      { songTitle: "Real Love", show: "Love and Hip Hop Atlanta", network: "VH1", year: 2020 },
      { songTitle: "Cold Blooded", show: "The Rookie", network: "ABC", year: 2021 },
    ],
    discoUrl: "https://www.discogs.com/artist/8619069-Hulvey",
    socials: {
      instagram: "https://www.instagram.com/hulveymusic",
      youtube: "https://www.youtube.com/@hulvey",
      facebook: "https://www.facebook.com/hulveymusic",
    },
  },
  {
    name: "Wande",
    slug: "wande",
    genre: "Hip-Hop / R&B",
    accentColor: "#C8B8A0",
    bio: "A Nigerian born and Texas raised hip hop artist with the power to inspire. Her infectious personality and raps effortlessly leave a lasting impression on new listeners. Being a woman in a male-dominated field, she doesn't view it as a hindrance, but rather a way to empower more women to be bold and go after their goals. She is leveraging her career to usher a new sound into Christian music while pushing the boundaries for pioneering women of faith.",
    profileImage: "/images/artists/wande.jpg",
    heroImage: "/images/artists/wande.jpg",
    imagePosition: "center center",
    stats: [
      { value: "4.3B", label: "Apple Campaign Views" },
      { value: "3.05M", label: "YouTube Views" },
      { value: "72.8K", label: "Instagram" },
      { value: "14.3K", label: "Twitter" },
    ],
    accomplishments: [
      "'Woo' selected for Apple's iPhone 12 mini advertising campaign — used across four Apple ads, accumulating 4.3 Billion cumulative views on the #MakeItMini challenge",
      "'Blessed Up' personally selected by Michelle Obama for her podcast's Vol. I playlist on Spotify",
      "'Come My Way' ft. Teni selected for a national Ulta campaign on SoundCloud",
      "ESPN named Wande 'music of the month' three times — 'Woo' selected as August 2020 music of the month",
      "'Be the Light' used in the July 2020 WNBA official trailer",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Woo" },
      { id: "dQw4w9WgXcQ", title: "Blessed Up" },
      { id: "dQw4w9WgXcQ", title: "Come My Way (ft. Teni)" },
    ],
    photos: [],
    syncExamples: [
      { songTitle: "Woo", show: "iPhone 12 Mini Campaign (#MakeItMini)", network: "Apple", year: 2020 },
      { songTitle: "Be the Light", show: "WNBA Official Trailer", network: "WNBA / ESPN", year: 2020 },
      { songTitle: "Come My Way", show: "Ulta Beauty Campaign", network: "Ulta / SoundCloud", year: 2020 },
      { songTitle: "Blessed Up", show: "Michelle Obama Podcast Playlist Vol. I", network: "Spotify", year: 2020 },
    ],
    discoUrl: "https://www.discogs.com/artist/7075636-Wande",
    socials: {
      instagram: "https://www.instagram.com/wandemusic",
      youtube: "https://www.youtube.com/@wandemusic",
      facebook: "https://www.facebook.com/wandemusic",
    },
  },
  {
    name: "Tedashii",
    slug: "tedashii",
    genre: "Hip-Hop",
    accentColor: "#B5B0A0",
    bio: "Tedashii has been separating himself from the pack for the better part of a decade. With a slew of revered studio albums and EPs to his name, the Texas-born and bred rapper remains a force. In 2017, Tedashii returned with fresh passion and renewed creative vision inspired by Luke 9:62. His ethos: Never Fold. His commitment to making an impact despite the unpredictability of our cultural climate is unwavering.",
    profileImage: "/images/artists/tedashii.jpg",
    heroImage: "/images/artists/tedashii.jpg",
    stats: [
      { value: "220K", label: "Monthly Listeners" },
      { value: "27M", label: "YouTube Views" },
      { value: "631K+", label: "Total Social Followers" },
      { value: "5", label: "Reach Records Projects" },
    ],
    accomplishments: [
      "Featured artist on Lecrae's GRAMMY Award-winning album Gravity",
      "Below Paradise debuted at No. 17 on the Billboard 200 albums chart",
      "Blacklight debuted at No. 2 on the iTunes Hip-Hop chart and No. 8 on the iTunes overall album chart",
      "Identity Crisis charted No. 2 on the Gospel Billboard chart and No. 9 on the Christian Billboard chart",
      "Performed on the top-selling 2016 Winter Jam Spectacular Tour",
      "'Best Lyric' presenter at the 2016 KLOVE Awards alongside Crowder",
      "Performed 'Jumped Out The Whip' at the 2015 GMA Dove Awards",
      "'Dum Dum' featured on Fox TV Series So You Think You Can Dance",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Dum Dum" },
      { id: "dQw4w9WgXcQ", title: "Jumpin' Out The Whip" },
      { id: "dQw4w9WgXcQ", title: "Never Fold" },
    ],
    photos: [],
    syncExamples: [
      { songTitle: "Dum Dum", show: "So You Think You Can Dance", network: "Fox", year: 2016 },
    ],
    discoUrl: "https://www.discogs.com/artist/2228726-Tedashii",
    socials: {
      instagram: "https://www.instagram.com/tedashii",
      youtube: "https://www.youtube.com/@tedashii",
      facebook: "https://www.facebook.com/tedashii",
    },
  },
  {
    name: "Trip Lee",
    slug: "trip-lee",
    genre: "Hip-Hop / Gospel",
    accentColor: "#A8B0C0",
    bio: "Re-emerging from a 5-year recording hiatus, Trip Lee is back for good. The Dallas-bred rapper, pastor, husband, and father is back in the studio. On his new single Supernatural, Trip addresses societal hardships and calls out for a hope beyond what's seen. His aim: to center the conversation in Christian Hip Hop back on Jesus — and to give a new take on the eternal message of hope.",
    profileImage: "/images/artists/trip-lee.jpg",
    heroImage: "/images/artists/trip-lee.jpg",
    imagePosition: "center center",
    stats: [
      { value: "300K", label: "Spotify Listeners" },
      { value: "479K", label: "Facebook" },
      { value: "334K", label: "Instagram" },
      { value: "284K", label: "Twitter" },
    ],
    accomplishments: [
      "The Waiting Room won a Dove Award for Best Hip-Hop Album of the Year",
      "Recipient of a Stellar Award",
      "Rise debuted at #2 on the Billboard Rap Chart and #16 on the Billboard 200",
      "Discography spans 6 studio albums from 2006–2016: If Only They Knew, 20/20, Between Two Worlds, The Good Life, Rise, The Waiting Room",
      "Spent five years pastoring at Concord Church in Dallas, TX",
      "Previously pastored at Cornerstone Church in Atlanta, GA",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Supernatural" },
      { id: "dQw4w9WgXcQ", title: "You're Here" },
      { id: "dQw4w9WgXcQ", title: "Robot" },
    ],
    photos: [],
    syncExamples: [],
    discoUrl: "https://www.discogs.com/artist/2369578-Trip-Lee",
    socials: {
      instagram: "https://www.instagram.com/triplee116",
      youtube: "https://www.youtube.com/@triplee116",
      facebook: "https://www.facebook.com/triplee116",
    },
  },
  {
    name: "WHATUPRG",
    slug: "whatuprg",
    genre: "Hip-Hop / Latin",
    accentColor: "#B8A8A0",
    bio: "Born and raised in north central Georgia, the multi-hyphenate artist WHATUPRG is the son of Mexican immigrant parents. At age 7 he was introduced to Reggaeton and enamored with artists like Funky & Manny Montes. In a time when Latino-Americans are being scrutinized, WHATUPRG shares his story to challenge perceptions and motivate change through music. He's a rapper, writer, producer, and creative — all at once.",
    profileImage: "/images/artists/whatuprg.jpg",
    heroImage: "/images/artists/whatuprg.jpg",
    stats: [
      { value: "171.2K", label: "Monthly Listeners" },
      { value: "809K", label: "YouTube Views" },
      { value: "45.6K", label: "Instagram" },
      { value: "500K+", label: "'Wesside' Video Views" },
    ],
    accomplishments: [
      "Debut EP Pleasant Hill landed at #11 Christian and #24 Rap on the Billboard charts",
      "'Wesside' music video garnered over 500K views on YouTube",
      "171.2K monthly listeners on Spotify and growing",
      "First generation Mexican-American rapper, producer, writer, and creative",
      "Collaborated with 116, nobigdyl., Lawren, Ty Brasel, and Mogli the Iceburg",
      "'Drip Lee' with 1K Phew trended in Brazil with a 600% increase in consumption",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Wesside" },
      { id: "dQw4w9WgXcQ", title: "Drip Lee (ft. 1K Phew)" },
      { id: "dQw4w9WgXcQ", title: "Pleasant Hill" },
    ],
    photos: [],
    syncExamples: [],
    discoUrl: "https://www.discogs.com/artist/7075637-Whatuprg",
    socials: {
      instagram: "https://www.instagram.com/whatuprg",
      youtube: "https://www.youtube.com/@whatuprg",
      facebook: "https://www.facebook.com/whatuprg",
    },
  },
  {
    name: "Limoblaze",
    slug: "limoblaze",
    genre: "Afrobeat / Gospel",
    accentColor: "#C4A860",
    bio: "Singer, songwriter, and leading pioneer in the emerging genre of afrobeat music, Limoblaze (AKA Samuel Onwubiko) is an award-winning musician born in Makurdi, Nigeria, currently residing in London, UK. He has built an international fanbase by marrying afrobeat music with hypnotizing melodies, all while unashamedly promoting his passion for God and active life in ministry. His viral hit 'Jireh (My Provider)' ft. Lecrae and Happi catapulted him onto multiple Billboard charts and cemented his place as a global voice in Christian music.",
    profileImage: "/images/artists/limoblaze.jpg",
    heroImage: "/images/artists/limoblaze.jpg",
    imagePosition: "center 30%",
    stats: [
      { value: "1.1M+", label: "Monthly Listeners" },
      { value: "341K+", label: "YouTube Subscribers" },
      { value: "278K", label: "Instagram" },
      { value: "275K", label: "TikTok" },
    ],
    accomplishments: [
      "MOBO Awards 'Best Gospel Act' winner",
      "Two-time African Gospel Music and Media Awards (AGMMA) Winner",
      "2019 Premiere Gospel Award for 'Best International Act' in London",
      "TIDAL Rising Artists to Watch: Class of 2023",
      "'Jireh (My Provider)' ft. Lecrae — Billboard US Afrobeat #31, Hot Christian Songs #41, Gospel chart #15",
      "'Jireh (My Provider)' — 402.4K Creates on TikTok, 213K Instagram Reels",
      "AfroGospel showcase in London sold out 500-cap room in 3 days, moved to 800+ cap XOYO Shoreditch",
      "Collaborations include Lecrae, Travis Greene, Da' T.R.U.T.H., Ada Ehe, Jidenna, and Annatoria",
      "Headlined Young & Chosen 2025 Tour across Africa and London",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "Jireh (My Provider) ft. Lecrae & Happi" },
      { id: "dQw4w9WgXcQ", title: "Afrobeats Gospel Showcase" },
      { id: "dQw4w9WgXcQ", title: "Latest Release" },
    ],
    photos: [],
    syncExamples: [],
    discoUrl: "https://www.discogs.com/artist/limoblaze",
    socials: {
      instagram: "https://www.instagram.com/limoblaze",
      youtube: "https://www.youtube.com/@limoblaze",
    },
  },
  {
    name: "Jackie Hill Perry",
    slug: "jackie-hill-perry",
    genre: "Hip-Hop / Spoken Word",
    accentColor: "#A89CB0",
    bio: "Jackie Hill Perry is a dynamic artist, author, poet, teacher, and speaker whose work has resonated deeply with audiences around the world. Known for her powerful blend of spoken word and hip-hop, Jackie is also an accomplished author exploring themes of identity, grace, and spiritual growth. After signing with Reach Records, she is set to release PRACTICE — her first project since 2018 — pushing artistic boundaries while staying true to her roots. Wife to Preston Perry and mother of four, Jackie is a cultural force inspiring a generation to live out their faith boldly.",
    profileImage: "/images/artists/jackie-hill-perry.jpg",
    heroImage: "/images/artists/jackie-hill-perry.jpg",
    imagePosition: "center 15%",
    stats: [
      { value: "1.4M", label: "Instagram Followers" },
      { value: "386K", label: "YouTube Subscribers" },
      { value: "385K", label: "TikTok Followers" },
      { value: "85K", label: "Monthly Listeners" },
    ],
    accomplishments: [
      "Signed to Reach Records — debut project PRACTICE releasing 2025",
      "Author of Gay Girl Good God, Holier Than Thou, and Upon Waking",
      "Recorded the entire ESV Bible",
      "Co-hosts podcast 'Thirty Minutes with the Perrys' with husband Preston Perry",
      "Released hip-hop album Crescendo (May 2018) — nearly 2.5M YouTube hits",
      "Headlined The Gospel Coalition's National Conference, Lifeway Women's Abundance, Propel Women's Active",
      "Featured in Essence, Relevant, and TBN",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "PRACTICE — New Single" },
      { id: "dQw4w9WgXcQ", title: "Crescendo" },
      { id: "dQw4w9WgXcQ", title: "Spoken Word" },
    ],
    photos: [],
    syncExamples: [],
    discoUrl: "https://www.discogs.com/artist/jackie-hill-perry",
    socials: {
      instagram: "https://www.instagram.com/jackiehillperry",
      youtube: "https://www.youtube.com/@jackiehillperry",
    },
  },
  {
    name: "2819 Church",
    slug: "2819-church",
    genre: "Ministry / Gospel",
    accentColor: "#C03030",
    bio: "In January 2023, Pastor Philip Anthony Mitchell planted 2819 Church in Atlanta with 183 believers and a singular conviction: the last command Jesus gave is the first thing the Church must do. Named for Matthew 28:19 — the Great Commission — 2819 has grown to over 5,700 weekly in-room attendees in under three years. All generations and races line up outside the doors at 5:30 a.m. on Sundays. The gospel is being preached without apology, and God is moving in ways that defy every natural explanation.",
    profileImage: "/images/artists/2819-church.jpg",
    heroImage: "/images/artists/2819-church.jpg",
    imagePosition: "center center",
    stats: [
      { value: "5,708", label: "Weekly Attendance" },
      { value: "75.2M", label: "YouTube Views (2025)" },
      { value: "~40K", label: "State Farm Arena" },
      { value: "50+", label: "Nations Reached" },
    ],
    accomplishments: [
      "Historic Baptism Weekend — 2,576 people publicly declared faith in Jesus Christ in one weekend",
      "ACCESS 2025 — nearly 40,000 gathered at State Farm Arena for a free public hour of prayer",
      "London Crusade at ExCeL London — 7,000+ gathered, 2,000+ decisions for Jesus (Jan 30–Feb 1, 2026)",
      "Grew from 183 members (Jan 2023) to 5,708 weekly attendees in under three years",
      "75.2M YouTube views and 1.79M new subscribers in 2025 — 868M total impressions",
      "$1.3M invested into 15 churches, families, and missions",
      "Featured in Fortune, CBN News, Premier Christianity, and K-LOVE Radio",
      "+246% staff growth year-to-date; First Internship Program launched",
    ],
    youtubeVideos: [
      { id: "dQw4w9WgXcQ", title: "ACCESS — State Farm Arena" },
      { id: "dQw4w9WgXcQ", title: "London Crusade — ExCeL" },
      { id: "dQw4w9WgXcQ", title: "Sunday Service" },
    ],
    photos: [],
    syncExamples: [],
    discoUrl: "https://2819church.org",
    socials: {
      instagram: "https://www.instagram.com/2819church",
      youtube: "https://www.youtube.com/@2819Church",
    },
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
