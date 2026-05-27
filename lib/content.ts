/**
 * All site copy lives here. Edit text in this file; pages re-render automatically.
 * Placeholders marked TODO need real campaign-supplied content before launch.
 */

export const site = {
  title: "Lev Parnas for Congress — Independent, Florida's 27th District",
  shortTitle: "Lev Parnas for Congress",
  description:
    "Lev Parnas is running for Congress as an Independent in Florida's 27th District. He saw the rot from inside. Now he's running to fix it.",
  url: "https://levparnas.org", // TODO: confirm final domain
  district: "Florida's 27th District",
  candidateName: "Lev Parnas",
  cycle: "2026",
  // FEC committee disclaimer — TODO: replace with real committee name once treasurer files Form 1
  fecDisclaimer:
    "Paid for by Lev Parnas for Congress. Not authorized by any candidate or candidate's committee.",
  // Social — TODO: confirm handles
  social: {
    x: "https://x.com/levparnas",
    instagram: "https://instagram.com/levparnas",
    youtube: "https://youtube.com/@levparnas",
    tiktok: "https://tiktok.com/@levparnas",
    bluesky: "https://bsky.app/profile/levparnas.bsky.social",
    threads: "https://threads.net/@levparnas",
    substack: "https://levremembers.substack.com",
  },
  contact: {
    email: "info@levparnas.org", // TODO: confirm
    pressEmail: "press@levparnas.org", // TODO: confirm
  },
} as const;

export const nav = {
  links: [
    { href: "/story", label: "Story" },
    { href: "/platform", label: "Platform" },
    { href: "/writings", label: "Writings" },
    { href: "/events", label: "Events" },
    { href: "/press", label: "Press" },
    { href: "/join", label: "Join" },
  ],
  ctaPrimary: { href: "/donate", label: "Donate" },
  ctaSecondary: { href: "/join", label: "Join" },
} as const;

// CAMPAIGN EVENTS — placeholder until real schedule is set
// TODO: connect to CRM / Action Network event API at launch
export const events = {
  eyebrow: "Events",
  headline: "Show up. In person.",
  intro:
    "Town halls, meet-and-greets, GOTV canvasses, and debate watch parties. Every event is open to the public. Bring a friend, bring a neighbor, bring your questions.",
  // Empty until the campaign confirms its first events. Edit this array to
  // add real events: { id, date (YYYY-MM-DD), time, title, location, venue,
  // type, description, capacity, rsvpHref }.
  upcoming: [] as Array<{
    id: string;
    date: string;
    time: string;
    title: string;
    location: string;
    venue: string;
    type: string;
    description: string;
    capacity: string;
    rsvpHref: string;
  }>,
  past: [] as Array<{
    date: string;
    title: string;
    location: string;
    type: string;
    summary: string;
  }>,
} as const;

// PRESS KIT — for journalists, downloads + bio paragraphs at every length
export const pressKit = {
  eyebrow: "Press Kit",
  headline: "Everything a reporter needs.",
  intro:
    "Bio paragraphs at every length, high-resolution photos, the campaign logo, and a direct contact. Use any of this in your story — no permission required.",
  bios: [
    {
      length: "One-liner",
      text:
        "Lev Parnas is an Independent candidate for U.S. Congress in Florida's 27th District.",
    },
    {
      length: "Short (40 words)",
      text:
        "Lev Parnas is an Independent candidate for U.S. Congress in Florida's 27th District. A Ukrainian-born refugee, federal witness in Donald Trump's first impeachment, and author of Shadow Diplomacy, he is running on anti-corruption, affordability, and democratic accountability.",
    },
    {
      length: "Medium (120 words)",
      text:
        "Lev Parnas is an Independent candidate for U.S. Congress in Florida's 27th District (Miami-Dade). Born in Odesa, Ukraine in 1972, he immigrated to the United States with his family as Jewish refugees at age four. After three decades as a South Florida businessman, he became a central figure in the first impeachment of Donald Trump and a federal witness in 2020. He was convicted of campaign finance violations in 2021, served 20 months in federal prison, and completed his sentence in 2023. He testified before the House Oversight Committee in March 2024. His memoir Shadow Diplomacy was published in 2024. He is the subject of the MSNBC Films documentary From Russia with Lev.",
    },
  ],
  assets: [
    {
      label: "Official portrait — high resolution",
      type: "JPG",
      href: "/images/lev-hero.jpg",
      note: "Color, vertical orientation. 1500w.",
    },
    {
      label: "Campaign logo (3-color, dark)",
      type: "PNG",
      href: "/images/lev-logo.png",
      note: "Transparent background, optimized for light surfaces.",
    },
    {
      label: "House Oversight Committee testimony (written statement)",
      type: "PDF",
      href: "https://oversight.house.gov/wp-content/uploads/2024/03/Parnas-Lev-Written-Statement.pdf",
      note: "Lev's full sworn statement, March 19, 2024.",
    },
    {
      label: "FEC candidate filing",
      type: "External",
      href: "https://www.fec.gov/data/candidate/H6FL27106/",
      note: "Public record of campaign filings.",
    },
    {
      label: "From Russia with Lev — official trailer",
      type: "Video",
      href: "https://www.youtube.com/watch?v=LIbKyujShRY",
      note: "MSNBC Films, September 2024.",
    },
  ],
  factSheet: [
    { label: "Born", value: "February 6, 1972 — Odesa, Ukraine" },
    { label: "Immigrated", value: "1976 (age 4) via U.S. Refugee Resettlement" },
    { label: "Education", value: "Brooklyn College, Baruch College" },
    { label: "Current residence", value: "South Florida" },
    { label: "Party", value: "Independent" },
    { label: "District", value: "Florida's 27th Congressional District" },
    { label: "Opponent", value: "Maria Elvira Salazar (R, incumbent)" },
    { label: "Election", value: "November 3, 2026" },
    { label: "FEC ID", value: "H6FL27106" },
    { label: "Campaign launch", value: "March 5, 2026" },
  ],
  contact: {
    email: "press@levparnas.org",
    phone: "TBA",
    responseTime: "Within one business day",
  },
} as const;

// ENDORSEMENTS — public-figure and org backing
// TODO: replace placeholders with real endorsements as they come in
export const endorsements = {
  eyebrow: "Endorsements",
  headline: "Standing with Lev.",
  intro:
    "We add names to this page as endorsements come in. If you'd like to endorse the campaign — as an individual, organization, or coalition — write the team at endorse@levparnas.org.",
  // Empty for now — when first endorsements land, populate this array.
  endorsers: [] as Array<{
    name: string;
    title: string;
    location?: string;
    quote?: string;
    category: "elected" | "civic" | "labor" | "faith" | "media" | "community";
  }>,
  callout:
    "Endorsements coming soon. If you're a current or former elected official, civic leader, or organization head considering backing the campaign, the team welcomes the conversation.",
  contactEmail: "endorse@levparnas.org",
} as const;

export const hero = {
  eyebrow: "Lev Parnas — Independent for Congress — Florida's 27th District",
  // Heart-led headline. The confessional ("I saw the rot from inside") lives on /story instead.
  headline: "I'm not running for me.",
  headlineAccent: "I'm running for us.",
  subhead:
    "I'm a refugee. I'm a father of six. I'm from this neighborhood. I'm running for Congress as an Independent because Florida deserves a representative who isn't owned by a party, isn't bankrolled by corporations, and isn't afraid to fight for the people who actually live here.",
  emailCtaLabel: "Sign up for campaign updates — straight to your inbox.",
  primaryCta: { href: "/donate", label: "Donate" },
  secondaryCta: { href: "/join", label: "Join us" },
} as const;

export const supporterStats = {
  // TODO: connect to real CRM (Action Network / Mailchimp) count
  signedUp: 8412,
  daysToGeneral: Math.max(
    0,
    Math.ceil((new Date("2026-11-03").getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  ),
} as const;

export const announcement = {
  // Shown as a thin bar at the top of the site post-switch.
  // Set show to false to hide.
  show: true,
  text: "Lev is now running as an Independent. Read his statement.",
  href: "/story#independent",
} as const;

export const homeStoryTeaser = {
  eyebrow: "Meet Lev",
  headline:
    "A refugee. A father. A neighbor. A fighter.",
  body: `I was four years old when my family fled the Soviet Union. We came to America with nothing — Jewish refugees, scared, looking for a country that would take us in. America did. Brooklyn raised me. Florida built me. I've been a husband, a father of six, a businessman in this community for three decades.

I've stood in rooms where decisions about your life were being made by people who don't think about you. I've watched both parties protect their own while the families I grew up around got squeezed harder every year. I'm done watching. So I'm running as an Independent — for the people of Florida's 27th, for my family, for yours.`,
  cta: { href: "/story", label: "Read Lev's full story" },
} as const;

export const issues = [
  {
    id: "affordability",
    eyebrow: "Affordability",
    title: "Make South Florida livable again.",
    summary:
      "Insurance, rent, groceries, gas — Miamians are being priced out of their own city while Washington argues. We need real action on housing supply, a federal backstop for hurricane-zone insurance, and an end to the corporate price-gouging in food and energy.",
    detail: [
      "Federal reinsurance backstop for Florida homeowners — premiums in some neighborhoods have tripled in five years.",
      "Federal tax credits tied to multifamily housing supply in coastal cities.",
      "Price-gouging investigations with real teeth against grocery and energy monopolies.",
      "Cap prescription drug costs the way the IRA started — and finish the job.",
    ],
    stat: { value: "3×", label: "Hurricane-zone insurance premium increase in five years" },
    pullQuote: "If a Miami family can't afford to live in Miami, we don't have a community — we have a real estate market.",
  },
  {
    id: "corruption",
    eyebrow: "End the Legal Corruption",
    title: "Stop members of Congress from getting rich off their jobs.",
    summary:
      "I watched this from the inside. The trading. The lobbying revolving door. The donations that come with strings the public never sees. Both parties do it. Both parties protect it. I'm running to end it.",
    detail: [
      "Ban members of Congress and senior officials from trading individual stocks.",
      "Lifetime ban on members becoming lobbyists.",
      "Mandatory disclosure — in plain English, within 24 hours — of any meeting between a member and a paid lobbyist.",
      "Maximum age of 75 for federal office. These are jobs, not lifetime appointments.",
    ],
    stat: { value: "$0", label: "Corporate, PAC, or party money I will accept in this campaign" },
    pullQuote: "I went to prison for breaking the rules. Then I came home and watched senators break the same rules in public and call it lawful. The rules are the problem.",
  },
  {
    id: "accountability",
    eyebrow: "Accountability",
    title: "Make oversight work like it's supposed to.",
    summary:
      "I was a witness in the first Trump impeachment. I testified before the House Oversight Committee. I know what Congressional subpoena power can do — and what happens when it's abused or ignored. We need real consequences for officials who lie, obstruct, or abuse their offices.",
    detail: [
      "Empower inspectors general with statutory protection from political firing.",
      "Mandatory referrals to DOJ when officials are found to have lied to Congress.",
      "Public-facing accountability dashboard showing every open oversight investigation and its status.",
    ],
    stat: { value: "2×", label: "Times I've testified before Congress — once as a witness, once as a citizen" },
    pullQuote: "I've sat at that witness table. I know which questions get asked when the cameras are on and which ones get dropped when they're off. We can fix that.",
  },
  {
    id: "immigration",
    eyebrow: "Immigration",
    title: "I am the system working. Most aren't so lucky.",
    summary:
      "I came to this country as a four-year-old refugee. My family had nothing. America gave us a chance. We've forgotten how to do that — and we've forgotten how to enforce the law without cruelty. Both can be true.",
    detail: [
      "Triple the number of immigration judges to clear the backlog.",
      "Permanent protection for Dreamers who have built lives here.",
      "A real, secure, dignified asylum process — not detention camps.",
      "Stop using immigration as a political football. Solve it.",
    ],
    stat: { value: "4", label: "Years old when my family fled the Soviet Union and America took us in" },
    pullQuote: "If America had treated my family the way Washington wants to treat asylum-seekers today, I would not exist as an American. Neither would millions of you.",
  },
  {
    id: "democracy",
    eyebrow: "Democracy",
    title: "Stand up to authoritarians — including the ones at home.",
    summary:
      "I watched Donald Trump operate up close. I watched what he tried to do to Ukraine. I watched what he tried to do here. The threat is real and it is bipartisan in target — democracy is not a Democratic or Republican issue, it is an American one.",
    detail: [
      "Codify protections for free and fair elections at the federal level.",
      "Strengthen support for Ukraine and democratic allies — full stop.",
      "End the gerrymandering that lets politicians pick their voters instead of the other way around.",
      "Public financing options for federal campaigns so candidates don't have to spend half their time begging from donors.",
    ],
    stat: { value: "20", label: "Months I served for crimes that originated in someone else's authoritarian project" },
    pullQuote: "I went to prison because I was part of an effort to corrupt an American election. I know what the real thing looks like. I'm running to stop it before it happens again.",
  },
] as const;

export const pullQuotes = [
  {
    text: "Trump knew exactly what was going on.",
    source: "Lev Parnas, MSNBC interview with Rachel Maddow, January 2020",
  },
  {
    text: "The American people have been lied to.",
    source:
      "Lev Parnas, testimony before the House Oversight Committee, March 2024",
  },
  {
    text: "It was like a cult.",
    source: "Lev Parnas, on the Trump inner circle, MSNBC, January 2020",
  },
] as const;

export const pressMentions = [
  // TODO: replace with real logos + verified quote pulls from coverage of the campaign
  { outlet: "The New York Times", quote: "" },
  { outlet: "MSNBC", quote: "" },
  { outlet: "CBS Miami", quote: "" },
  { outlet: "WLRN", quote: "" },
  { outlet: "PBS NewsHour", quote: "" },
  { outlet: "The Washington Post", quote: "" },
] as const;

export const story = {
  eyebrow: "Lev's Story",
  headline: "Everything they say about me is on the record. So is everything I'm telling you now.",
  // Long-form narrative paragraphs. Edit freely.
  paragraphs: [
    {
      heading: "I came here with nothing.",
      body: `I was born in Odesa, Ukraine, in 1972. My family were Jewish refugees from the Soviet Union. I was four years old when we landed in Detroit, then moved to Brooklyn. I grew up in a one-bedroom apartment with my parents and my grandmother. I went to public school. I learned English on the playground. I owe everything I am to this country, and to the people who built the systems that let a refugee kid become someone.`,
    },
    {
      heading: "I built businesses. And I got close to power.",
      body: `I started selling Trump-branded apartments in Brooklyn when I was barely out of college. I moved to Florida in the '90s. I built companies — some succeeded, some didn't. By 2018 I had a friend named Rudy Giuliani, and through him, proximity to the President of the United States. I won't pretend I didn't enjoy it. I should have asked harder questions about what I was being asked to do. I didn't.`,
    },
    {
      heading: "I broke the law. I'm not going to pretend otherwise.",
      body: `In October 2019 I was arrested at Dulles airport. The charges were real. A federal jury convicted me in 2021 on six counts including campaign finance violations and false statements. I was sentenced to twenty months in federal prison and ordered to pay $2.3 million in restitution. I served my time. I came home in 2023. I will not stand here and tell you I was framed, because I wasn't. I broke the rules. I paid for it. And I learned more about how Washington really works than any briefing book could have taught me.`,
    },
    {
      id: "independent",
      heading: "I told the truth — and I'm done with both parties.",
      body: `When prosecutors came for me, the Trump people abandoned me. When I started telling the truth — about the pressure on Ukraine, about what the President knew, about Rudy and Barr and Pence and the whole operation — I expected the other side to want accountability. Some did. Many didn't. What I learned is that both parties protect their own first. They are far more loyal to each other than they are to you. I tried to fix this from inside the Democratic Party. I'm done. I'm running as an Independent — because the work is the work, and it can't get done by either side alone.`,
    },
    {
      heading: "Why Congress. Why now.",
      body: `Florida's 27th District deserves a representative who isn't owned by a party or by a donor class. I have no PAC. I have no party machine. I have no future political career to protect — I just have what I learned, and I want to use it. If you're tired of being represented by people who'd rather perform for cable news than do their job, I'm asking for your vote. And before that, I'm asking for your help getting on the November ballot.`,
    },
  ],
  timeline: [
    { year: "1972", text: "Born in Odesa, Ukraine, to a Jewish family." },
    { year: "1976", text: "Family arrives in the US as refugees." },
    {
      year: "1990s",
      text: "Builds businesses in New York and South Florida.",
    },
    {
      year: "2018",
      text: "Begins working with Rudy Giuliani on Ukraine matters.",
    },
    {
      year: "Oct 2019",
      text: "Arrested at Dulles. Charged with campaign finance and false statement offenses.",
    },
    {
      year: "Jan 2020",
      text: "Breaks publicly with Trump. Interviews with Rachel Maddow.",
    },
    {
      year: "Oct 2021",
      text: "Convicted on six counts after a two-week federal jury trial.",
    },
    {
      year: "Jun 2022",
      text: "Sentenced to 20 months in federal prison, three years supervised release, $2.3M restitution.",
    },
    { year: "Sep 2023", text: "Completes sentence. Returns home." },
    {
      year: "Mar 2024",
      text: "Testifies before the House Oversight Committee: \"The American people have been lied to.\"",
    },
    { year: "2024", text: "Publishes Shadow Diplomacy with co-author Jerry Langton." },
    { year: "Mar 2026", text: "Files to run for Florida's 27th Congressional District." },
    {
      year: "May 2026",
      text: "Switches to Independent. Goes direct to the November general election.",
    },
  ],
} as const;

export const joinSection = {
  eyebrow: "Get Involved",
  headline: "This campaign runs on people, not party machines.",
  body: `We have no DNC, no RNC, no super PAC. We have you. If you can give five minutes or five hours, the campaign needs both.`,

  // What members of the email list actually get
  benefits: [
    {
      title: "A welcome from Lev",
      description: "A personal note from Lev — what he learned, why he's running, what's at stake.",
    },
    {
      title: "Twice-weekly updates",
      description: "Campaign news from Florida 27 straight from Lev's team. No spam, no sold lists.",
    },
    {
      title: "Event invites first",
      description: "Town halls, meet-and-greets, debate watches — supporters get in before the public.",
    },
    {
      title: "When it matters most",
      description: "Direct asks only when we genuinely need help — ballot petition drives, FEC deadlines, GOTV.",
    },
  ],

  // Volunteer roles
  roles: [
    {
      label: "Knock doors in FL-27",
      description: "Saturdays, Sundays. Walking lists provided. Free pizza after.",
      time: "3–4 hours / shift",
    },
    {
      label: "Phone bank from home",
      description: "We send the script and the list. You make the calls when it fits your schedule.",
      time: "Any time, 1+ hour",
    },
    {
      label: "Host a meet-and-greet",
      description: "Your living room, 10–20 neighbors, Lev shows up. We bring the rest.",
      time: "One evening",
    },
    {
      label: "Translate & write",
      description: "Spanish, Russian, Ukrainian, Haitian Creole. We need real voices, not Google Translate.",
      time: "Async / remote",
    },
    {
      label: "Make content",
      description: "Short-form video, design, social posts. If you've got a phone, you can help.",
      time: "Async / remote",
    },
    {
      label: "Legal & compliance",
      description: "If you're a lawyer or paralegal, we can use you on ballot access + FEC filings.",
      time: "Pro bono, episodic",
    },
  ],

  // Supporter testimonials — placeholder, swap with real ones at launch
  supporterVoices: [
    {
      name: "Maria L.",
      city: "Miami, FL",
      role: "Volunteer & donor",
      quote: "I'm tired of being asked to pick between two parties that don't see me. Lev sees Florida 27.",
    },
    {
      name: "James R.",
      city: "Coral Gables, FL",
      role: "Door-knocker",
      quote: "He owned his mistakes in public. That's more honesty than I've seen from any politician in twenty years.",
    },
    {
      name: "Yelena K.",
      city: "Brooklyn, NY",
      role: "Donor",
      quote: "My family came here as refugees too. Lev's running for the country that took us in. I'm with him.",
    },
  ],
} as const;

export const donateCopy = {
  eyebrow: "Donate",
  headline: "Help get Lev on the ballot.",
  subhead: `Independent candidates don't get a party to pay their filing fees, hire their staff, or buy their ads. Every dollar you give goes directly to getting Lev's name in front of voters in Florida's 27th.`,
  amounts: [10, 25, 50, 100, 250, 500] as number[],
  defaultAmount: 50,
  defaultRecurring: false,
  perElectionLimit: 3500,
  feeCoverPercent: 3,
  attestation: `I am a US citizen or lawfully admitted permanent resident, at least 18 years old. This contribution is made from my own funds, not from a corporation, labor organization, federal contractor, or foreign national. This contribution is not made on the credit card of another person and is not from funds held in a corporate or business entity account.`,
  thankYou: {
    headline: "Thank you.",
    body: "Your contribution is being processed. A receipt is on its way to your email.",
  },
} as const;

// What each donation level actually buys — concrete, visible, motivating.
// Numbers are realistic estimates for a small Florida district campaign.
export const donateImpact: Record<number, string> = {
  10: "5 sign-wave flyers",
  25: "1 yard sign in a Miami neighborhood",
  50: "Digital ads to 1,000 voters",
  100: "A full day of door-knocking supplies",
  250: "One mailer to 500 households",
  500: "A precinct's worth of get-out-the-vote turf",
  1000: "A week of Spanish-language radio",
  3500: "A whole field organizer's stipend for a month",
};

// Donation drive goal — show progress publicly.
// TODO at launch: connect to real CRM totals via API
export const donateGoal = {
  raisedSoFar: 47230,
  goalAmount: 75000,
  deadline: "2026-06-15", // FL qualifying period closes June 12 in 2026
  deadlineLabel: "ballot deadline",
  donorCount: 1284,
} as const;

// Recent donors ticker — placeholder until real data wires in.
// TODO at launch: pull last N donations from Square / donor DB (first name + city + amount only — FEC privacy minimum)
export const recentDonors = [
  { name: "Maria L.", city: "Miami, FL", amount: 50, when: "2 min ago" },
  { name: "James R.", city: "Coral Gables, FL", amount: 25, when: "5 min ago" },
  { name: "Yelena K.", city: "Brooklyn, NY", amount: 100, when: "11 min ago" },
  { name: "Carlos B.", city: "Hialeah, FL", amount: 10, when: "18 min ago" },
  { name: "Sarah W.", city: "Doral, FL", amount: 500, when: "24 min ago" },
  { name: "Mike D.", city: "Pinecrest, FL", amount: 35, when: "33 min ago" },
  { name: "Inna S.", city: "Sunny Isles, FL", amount: 250, when: "42 min ago" },
  { name: "David P.", city: "Aventura, FL", amount: 75, when: "1 hr ago" },
  { name: "Anastasia G.", city: "Miami Beach, FL", amount: 25, when: "1 hr ago" },
  { name: "Tom F.", city: "Kendall, FL", amount: 100, when: "2 hrs ago" },
] as const;

// Where the money goes — for the visualization on /donate.
export const donateBreakdown = [
  { label: "Direct voter contact", percent: 42, detail: "Door-knockers, phone bank, text outreach" },
  { label: "Ads (digital + radio)", percent: 28, detail: "Spanish + English, Miami-Dade focused" },
  { label: "Field materials", percent: 14, detail: "Yard signs, mailers, literature" },
  { label: "Compliance + legal", percent: 10, detail: "FEC reporting, ballot access, treasurer" },
  { label: "Travel + events", percent: 6, detail: "Meet-and-greets, town halls" },
] as const;

// Letter from Lev that appears on the donate page.
export const donateLetter = {
  body: `If you're reading this, the campaign is asking for your help — and I'm asking too. I'm not running with party money, corporate money, or PAC money. The whole point is that I won't owe anyone but the people who got me elected. That means I need you. Five dollars from a thousand neighbors will do more than one big check from a donor with strings attached. Whatever you can give, give it. And if you can't right now, sign up for the email list and forward this to a friend who can. Thank you for standing with me.`,
  signoff: "Lev Parnas",
} as const;

// Donor testimonials — placeholder until real ones come in.
export const donorVoices = [
  {
    name: "Maria L.",
    location: "Miami, FL",
    amount: 50,
    quote: "I gave because I'm tired of being asked to pick between two parties that don't see me. Lev sees Florida 27.",
  },
  {
    name: "James R.",
    location: "Coral Gables, FL",
    amount: 250,
    quote: "He owned his mistakes in public. That's more honesty than I've seen from any politician in twenty years.",
  },
  {
    name: "Yelena K.",
    location: "Brooklyn, NY",
    amount: 100,
    quote: "My family came here as refugees too. Lev's running for the country that took us in. I'm with him.",
  },
] as const;

// Curated press coverage, organized by chapter of the story
export const press = {
  eyebrow: "Press",
  headline: "On the record.",
  intro: "Every link below is to a verifiable, primary-source story about Lev. Read them. Watch them. Decide for yourself.",

  // FEATURED — the documentary
  featured: {
    kicker: "Featured",
    title: "From Russia with Lev",
    outlet: "MSNBC Films",
    date: "September 2024",
    description:
      "Rachel Maddow and Adam McKay's Hyperobject Industries spent three years making a film about Lev. Director Billy Corben pulled together more than 30 hours of interviews, photos, video, documents, and secret recordings nobody had ever seen. Critics called it \"un-put-down-able.\" IMDb gave it 8.1.",
    videoId: "LIbKyujShRY",
    pressLinks: [
      {
        outlet: "Hollywood Reporter",
        title: "MSNBC Picks Up Rachel Maddow Documentary Film",
        url: "https://www.hollywoodreporter.com/news/politics-news/rachel-maddow-documentary-msnbc-from-russia-with-lev-1235965174/",
      },
      {
        outlet: "Salon",
        title: "“Lev's story is un-put-down-able”",
        url: "https://www.salon.com/2024/08/05/from-with-lev-parnas-rachel-maddow/",
      },
      {
        outlet: "MSNBC Opinion",
        title: "Reveals the dark toll of Trump's reality-show presidency",
        url: "https://www.ms.now/opinion/msnbc-opinion/russia-lev-reveals-dark-toll-trumps-reality-show-presidency-rcna170060",
      },
    ],
  },

  // CHAPTERS — organized by era
  chapters: [
    {
      id: "campaign",
      kicker: "Chapter Four",
      title: "The Campaign",
      summary:
        "March 2026: Lev files to run for US Congress in Florida's 27th District. Coverage follows.",
      articles: [
        {
          outlet: "WLRN Public Radio",
          date: "March 5, 2026",
          title: "From Trump impeachment figure to candidate: Lev Parnas enters Florida congressional race",
          quote:
            "Parnas said he is running on “cleaning up Washington's corruption, holding the powerful to account, strengthening affordability, expanding support for seniors, and improving our desperately broken immigration system.”",
          url: "https://www.wlrn.org/government-politics/2026-03-05/lev-parnas-trump-impeachment-florida-congress-candidate-salazar",
        },
        {
          outlet: "CBS Miami",
          date: "March 2026",
          title: "Former Trump supporter Lev Parnas among candidates running in South Florida's District 27",
          quote:
            "Parnas joins a crowded field of candidates seeking to unseat Republican incumbent Maria Elvira Salazar.",
          url: "https://www.cbsnews.com/miami/news/south-florida-district-27-miami-dade-lev-parnas/",
        },
        {
          outlet: "The Times of Israel",
          date: "March 2026",
          title: "Lev Parnas, Trump ally turned critic, announces run for US Congress",
          quote:
            "Parnas, the son of Jewish refugees from the Soviet Union, said he was running to give other immigrant families the same chance America gave his.",
          url: "https://www.timesofisrael.com/lev-parnas-trump-ally-turned-critic-announces-run-for-us-congress-as-florida-democrat/",
        },
      ],
    },
    {
      id: "testimony",
      kicker: "Chapter Three",
      title: "Under Oath",
      summary:
        "March 19, 2024: Lev testifies before the House Oversight Committee — invited by Democrats to set the record straight on the Biden allegations.",
      articles: [
        {
          outlet: "CNN Politics",
          date: "March 19, 2024",
          title: "Lev Parnas invited by House Oversight Democrats as witness for Biden impeachment hearing",
          quote:
            "Parnas is expected to testify that the allegations against the Bidens originated with Russian intelligence and were laundered through Giuliani.",
          url: "https://www.cnn.com/2024/03/19/politics/lev-parnas-democrats-witness-biden-impeachment-hearing/index.html",
        },
        {
          outlet: "NBC News",
          date: "March 20, 2024",
          title: "Parnas testifies allegations against Bidens are false and “spread by the Kremlin”",
          quote:
            "“The only information ever pushed on the Bidens and Ukraine has come from one source and one source only: Russia and Russian agents.”",
          url: "https://www.nbcnews.com/politics/joe-biden/lev-parnas-ex-giuliani-associate-testifies-allegations-bidens-are-fals-rcna144250",
        },
        {
          outlet: "Rolling Stone",
          date: "March 2024",
          title: "Lev Parnas Says GOP Impeachment Push Based on Russian Lies",
          quote:
            "Parnas blasted Republican members of Congress for “doing the bidding” of Russia and pushing false allegations against President Joe Biden.",
          url: "https://www.rollingstone.com/politics/politics-news/lev-parnas-gop-impeachment-push-russian-lies-1234991335/",
        },
        {
          outlet: "UPI",
          date: "March 20, 2024",
          title: "Key witness Lev Parnas blasts Republicans for pushing 'falsehoods'",
          quote:
            "Parnas told the committee “The American people have been lied to.”",
          url: "https://www.upi.com/Top_News/US/2024/03/20/Joe-Biden-impeachment-inquiry-hearing/2211710974684/",
        },
        {
          outlet: "NY1",
          date: "March 2024",
          title: "Former Giuliani associate: Zero evidence of Biden corruption",
          quote:
            "Parnas, who once was tasked by Giuliani with finding dirt on the Bidens, told lawmakers the search came up empty.",
          url: "https://ny1.com/nyc/all-boroughs/politics/2024/03/20/lev-parnas-testimony-joe-biden-impeachment-inquiry",
        },
        {
          outlet: "U.S. House Oversight Committee",
          date: "March 19, 2024",
          title: "Written Statement of Lev Parnas (PDF, primary source)",
          quote: "The complete sworn statement Lev submitted to the Committee.",
          url: "https://oversight.house.gov/wp-content/uploads/2024/03/Parnas-Lev-Written-Statement.pdf",
        },
      ],
    },
    {
      id: "maddow",
      kicker: "Chapter Two",
      title: "The Interviews That Started It All",
      summary:
        "January 15–16, 2020: Lev sits across from Rachel Maddow for two nights. Record ratings. Emmy nomination. The moment the silence around Trump and Ukraine ended.",
      articles: [
        {
          outlet: "NBC News",
          date: "January 16, 2020",
          title: "Key things we learned from Lev Parnas' revealing MSNBC interview",
          quote:
            "Parnas told Maddow that Trump “knew exactly what was going on” in Ukraine and that AG William Barr and VP Mike Pence were in the loop.",
          url: "https://www.nbcnews.com/politics/trump-impeachment-inquiry/key-things-we-learned-lev-parnas-revealing-msnbc-interview-n1116931",
        },
        {
          outlet: "The Philadelphia Inquirer",
          date: "January 16, 2020",
          title: "What to know about Lev Parnas, the obscure figure interviewed on MSNBC and CNN",
          quote:
            "Parnas put John Bolton, Mike Pompeo, Rick Perry, and Mike Pence on the impeachment witness list overnight.",
          url: "https://www.inquirer.com/politics/nation/lev-parnas-msnbc-rachel-maddow-cnn-anderson-cooper-trump-impeachment-ukraine-rudy-giuliani-20200116.html",
        },
        {
          outlet: "MSNBC (Primary Transcript)",
          date: "January 15, 2020",
          title: "Rachel Maddow Interviews Lev Parnas — Part 1 (full transcript)",
          quote: "The full, unedited record of the first night.",
          url: "https://www.msnbc.com/transcripts/rachel-maddow-show/2020-01-15-msna1322756",
        },
        {
          outlet: "MSNBC (Primary Transcript)",
          date: "January 16, 2020",
          title: "Rachel Maddow Interviews Lev Parnas — Part 2 (full transcript)",
          quote: "Night two. Read every word.",
          url: "https://www.msnbc.com/msnbc/amp/msna1323171",
        },
        {
          outlet: "NBC News — Inside Impeachment Podcast",
          date: "January 2020",
          title: "Transcript: Lev Parnas Speaks",
          quote:
            "The companion podcast deep-dive into what Lev's interviews meant for the impeachment trial.",
          url: "https://www.nbcnews.com/podcast/inside-impeachment/transcript-lev-parnas-speaks-n1119481",
        },
      ],
    },
    {
      id: "documentary",
      kicker: "Chapter One",
      title: "The Documentary",
      summary:
        "September 2024: Rachel Maddow and Adam McKay's Hyperobject Industries release “From Russia with Lev,” directed by Billy Corben. The full story, told with the receipts.",
      articles: [
        {
          outlet: "Rotten Tomatoes",
          date: "2024",
          title: "From Russia with Lev — critics' aggregate",
          quote: "The critical consensus on the film.",
          url: "https://www.rottentomatoes.com/m/from_russia_with_lev",
        },
        {
          outlet: "IMDb",
          date: "2024",
          title: "From Russia with Lev (8.1/10)",
          quote: "Audience reviews from viewers worldwide.",
          url: "https://www.imdb.com/title/tt33070481/",
        },
        {
          outlet: "Wikipedia",
          date: "Reference",
          title: "From Russia with Lev",
          quote: "Production, distribution, and reception, sourced.",
          url: "https://en.wikipedia.org/wiki/From_Russia_With_Lev",
        },
        {
          outlet: "Solzy at the Movies",
          date: "September 2024",
          title: "Timely and essential ahead of the election",
          quote:
            "“Director Corben overwhelms the viewer with facts and endless testimony, plus satirical jabs against Trump and his cronies.”",
          url: "https://solzyatthemovies.com/2024/09/20/from-russia-with-lev-is-timely-and-essential-ahead-of-election/",
        },
      ],
    },
  ],

  // The book + Substack
  book: {
    title: "Shadow Diplomacy",
    subtitle: "Lev Parnas' Wild Ride from Brooklyn to Donald Trump's Inner Circle",
    coAuthor: "with Jerry Langton",
    year: 2024,
    url: "https://levremembers.com",
  },
  substack: {
    title: "Lev Remembers",
    description:
      "Lev writes his own newsletter — reporting, reflections, and the receipts. New posts most weeks.",
    url: "https://levremembers.substack.com",
  },
  pressContact: {
    email: "press@levparnas.org",
    label: "Press inquiries",
    note: "For interviews, statements, scheduling, or fact-checks, write the press team directly.",
  },
} as const;

// Lev's personal apparel + book site. Pre-existing, separate from the
// campaign. A portion of sales supports Ukraine — NOT the campaign.
// Keep the FEC line distinct on every callout.
export const merch = {
  url: "https://levremembers.com",
  brand: "Lev Remembers Shop",
  tagline: "Apparel, books, and the receipts.",
  description:
    "Lev's personal shop — apparel, the book, and curated collections. A portion of every sale goes to support Ukraine. This is not campaign merchandise and not campaign fundraising.",
  ukraineNote: "A portion of all sales supports Ukraine relief.",
  fecNote: "Sales support Ukraine relief, not the campaign committee.",
  collections: [
    { name: "Enough Is Enough", id: "enough-is-enough" },
    { name: "Voice From Ukraine", id: "voice-from-ukraine" },
    { name: "Lev Remembers Tees", id: "lev-remembers" },
    { name: "Wolfpack", id: "wolfpack" },
  ],
  featured: {
    title: "Shadow Diplomacy",
    subtitle: "The book.",
    price: "$39.99",
  },
} as const;
