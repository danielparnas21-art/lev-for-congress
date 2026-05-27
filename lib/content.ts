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
    "Town halls. Meet-and-greets. Canvasses. Debate watches. Every event open to the public. Bring a friend. Bring a neighbor. Bring the hard questions — I want them.",
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
    "Names get added here as endorsements come in. If you're a current or former elected official, a civic leader, a community organization, or a union and you want to back this campaign — write endorse@levparnas.org. I'm not asking for safety. I'm asking for solidarity.",
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
    "Enough is enough. I came to America from the Soviet Union as a four-year-old refugee. I helped Donald Trump and Rudy Giuliani build MAGA — and I woke up. I served my time. Nobody knows how this system operates better than I do, and nobody will fight harder to expose it. I'm not backed by corporations. I'm not backed by PACs. I'm backed by you.",
  emailCtaLabel: "Get on the list. Updates from me and the team — nothing else.",
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
  text: "I woke up. I'm not running as a Democrat or a Republican. I'm running as an Independent.",
  href: "/story#independent",
} as const;

export const homeStoryTeaser = {
  eyebrow: "Meet Lev",
  headline:
    "Refugee. Father of six. Witness. Fighter.",
  body: `I came to America from the Soviet Union as a four-year-old refugee. America took my family in. Brooklyn raised me. Florida built me. I've been a husband, a father of six, a businessman in this community for three decades.

Then I helped Donald Trump and Rudy Giuliani build MAGA. I broke the law inside that operation. I went to prison for it. I served my time.

And I woke up.

Nobody knows how this system operates better than I do. I've sat in the rooms. I've watched both parties protect their own while the families on this block get squeezed — groceries, rent, healthcare. I'm done watching. I'm running for the people of Florida's 27th. Enough is enough.`,
  cta: { href: "/story", label: "Read Lev's full story" },
} as const;

export const issues = [
  {
    id: "affordability",
    eyebrow: "Affordability",
    title: "Florida 27 is being squeezed. Washington argues.",
    summary:
      "Families in our district are being squeezed from every direction — groceries, rent, healthcare, insurance. Hurricane-zone premiums on a Miami home have tripled in five years. Wages haven't moved. And while families on this block get pushed out, both parties argue about whose fault it is. I'm not interested in the argument. I'm interested in what we do about it.",
    detail: [
      "Federal reinsurance backstop so a Miami family isn't paying triple for hurricane coverage.",
      "Tax credits tied to housing supply. We build for the rich. We don't build for the rest of us.",
      "Real teeth on price-gouging. Grocery chains and energy monopolies don't get to call record profits 'inflation'.",
      "Finish what the Inflation Reduction Act started on prescription drug caps. Don't stop at insulin.",
    ],
    stat: { value: "3×", label: "Hurricane-zone insurance premium increase in five years" },
    pullQuote: "If a Miami family can't afford to live in Miami, we don't have a community. We have a real estate market.",
  },
  {
    id: "corruption",
    eyebrow: "Drain the Swamp",
    title: "I know this swamp from the inside. Now let's actually drain it.",
    summary:
      "I was in the rooms when the money moved. The stock trading. The lobbying revolving door. The donations with strings the public never sees. Trump's people do it. Democratic leadership does it too. I'm not interested in a side. I'm interested in ending it. Nobody knows how these people operate better than I do.",
    detail: [
      "Ban Congress and senior officials from trading individual stocks. Period.",
      "Lifetime ban on members becoming lobbyists. Public service, not a stepping stone.",
      "Within 24 hours of any meeting between a member and a paid lobbyist, the public sees who, what, and why.",
      "Maximum age of 75 for federal office. These are jobs, not thrones.",
    ],
    stat: { value: "$0", label: "Corporate, PAC, or party money I will accept" },
    pullQuote: "I went to prison for breaking the rules. Then I came home and watched senators break the same rules in public and call it lawful. The rules are the problem.",
  },
  {
    id: "accountability",
    eyebrow: "Accountability",
    title: "The American people have been lied to. Here's how we fix it.",
    summary:
      "I was a witness in the first Trump impeachment. I testified before the House Oversight Committee under oath, on camera. I watched lawmakers ask the questions they wanted asked and skip the ones they didn't. I watched officials lie to Congress and walk away. Speaking truth to power is one of the toughest things to do in this town. We can build a Congress that actually does it.",
    detail: [
      "Inspectors general get statutory protection from political firing. Nobody fires the people watching the watchers.",
      "Lie under oath to Congress → mandatory DOJ referral. Currently it's a suggestion. Make it law.",
      "Public dashboard of every open oversight investigation. People deserve to see what their representatives are actually working on.",
    ],
    stat: { value: "2×", label: "Times I've testified before Congress — once as a witness, once as a citizen" },
    pullQuote: "I've sat at that witness table. I know which questions get asked when the cameras are on and which ones get dropped when they're off. We can fix that.",
  },
  {
    id: "immigration",
    eyebrow: "Immigration",
    title: "I came here at four years old. America took my family in. We've forgotten how to do that.",
    summary:
      "Florida 27 is full of people who fled places — Cuba, Venezuela, Nicaragua, Haiti, the Soviet Union. So am I. Most of us know exactly what dictatorship and authoritarianism look like, and we know what we owe to the country that took us in. We need an immigration system that enforces the law without cruelty. Both can be true. The politicians who tell you otherwise are selling you something.",
    detail: [
      "Triple the number of immigration judges. The backlog is a policy choice, not an act of God.",
      "Permanent legal status for Dreamers who have built lives here. They're not bargaining chips.",
      "A real, secure, dignified asylum process. Not detention camps.",
      "Stop using immigrants as props in political ads. Solve it.",
    ],
    stat: { value: "4", label: "Years old when my family fled the Soviet Union and America took us in" },
    pullQuote: "If America had treated my family the way Washington wants to treat asylum-seekers today, I would not exist as an American. Neither would millions of you.",
  },
  {
    id: "democracy",
    eyebrow: "Democracy",
    title: "I helped build MAGA. I know exactly what authoritarianism looks like.",
    summary:
      "I watched Donald Trump operate up close. I watched what he tried to do to Ukraine — the country my family came from. I watched what he tried to do here. Putin doesn't want peace. He wants submission. And too many people in Washington — on both sides — are willing to look away. Democracy is not a Democratic issue. It is not a Republican issue. It is an American one.",
    detail: [
      "Codify federal protections for free and fair elections. Don't leave it to whoever wins next.",
      "Stand with Ukraine. Speak for Ukraine. The country we fled to should keep helping the country we left.",
      "End partisan gerrymandering. Voters pick politicians, not the other way around.",
      "Public financing options so candidates spend their time talking to voters, not donors.",
    ],
    stat: { value: "20", label: "Months I served for crimes that originated in someone else's authoritarian project" },
    pullQuote: "I went to prison because I was part of an effort to corrupt an American election. I know what the real thing looks like. I'm running to stop it before it happens again.",
  },
  {
    id: "epstein-survivors",
    eyebrow: "Epstein survivors",
    title: "I stood in the room with them. I'm not stopping.",
    summary:
      "I sat in the field hearing in West Palm Beach — minutes from this district, the scene of the crime — and listened to Maria Farmer, Dani Bensky, Courtney Wild, Jena-Lisa Jones, and Virginia Giuffre's brothers Sky and Daniel. I traveled to New York for the 24-hour reading of the Epstein files. I delivered new material directly to Congress. The Epstein class — the people in powerful seats on both sides of the aisle — has every reason to keep that file half-redacted forever. They're going to find out what one congressman who actually shows up looks like.",
    detail: [
      "Full, unredacted release of the Epstein files. Survivor identities protected by survivors' consent — Roza Bensky was doxed 540 times in the DOJ release. That doesn't happen if survivors are in the room.",
      "Aggressive use of congressional subpoena power on every named Epstein-network figure. My petition asking Congress to subpoena 12 of them — including Bill Gates, Steve Bannon, Prince Andrew, Elon Musk, Alex Acosta — has over 47,000 signatures. The list has been public for years. The political will to act on it has not.",
      "Trafficked minors do not get prosecuted for prostitution. Period. A 14-year-old survivor from across the bridge from Mar-a-Lago was threatened with charges. That part I cannot get past.",
      "Survivor-led decisions on what accountability looks like. They lived it. They get a seat at the table — not after the press release, before it.",
      "Bipartisan accountability for the entire Epstein circle. The cover-up has been bipartisan. The accountability has to be too.",
    ],
    stat: { value: "47K+", label: "Signatures on my petition demanding Congress subpoena the Epstein network" },
    pullQuote: "We are not forgetting. We are not backing down. And we are going to keep shining a light until every survivor is heard, every name is exposed, and every person who protected this system is held accountable.",
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
      heading: "I came here at four years old.",
      body: `I was born in Odesa in 1972. My family were Jewish refugees from the Soviet Union. We knew what authoritarianism looked like — we had lived under it. America took us in. We landed in Detroit, then Brooklyn. One-bedroom apartment. Me, my parents, my grandmother. I learned English on the playground. I went to public school. I owe everything I am to this country and to the people who built the systems that let a refugee kid become someone.`,
    },
    {
      heading: "I built businesses. And I got close to power.",
      body: `Out of college I was selling Trump-branded apartments in Brooklyn. I moved to South Florida in the '90s. I built companies. Some made it. Some didn't. By 2018 I had a friend named Rudy Giuliani, and through Rudy, proximity to the President of the United States. I'm not going to pretend I didn't enjoy it. I was in the rooms. I was in the loop. I helped build MAGA. I should have asked harder questions about what I was being asked to do. I didn't.`,
    },
    {
      heading: "I broke the law. I'm not going to pretend otherwise.",
      body: `In October 2019 I was arrested at Dulles. The charges were real. A federal jury convicted me in 2021 on six counts — campaign finance violations and false statements. Twenty months in federal prison. $2.3 million in restitution. I served my time. I came home in 2023. I'm not going to stand here and tell you I was framed, because I wasn't. I broke the rules. I paid for it. I almost lost my family. I almost lost my kids, my wife. And I learned more about how Washington really works than any briefing book could have taught me.`,
    },
    {
      id: "independent",
      heading: "I woke up. And I'm done with both parties.",
      body: `When the prosecutors came for me, Trump's people abandoned me. When I started telling the truth — to Rachel Maddow, to the House, on the record — I expected the other side to want accountability. Some did. Many didn't. Both parties protect their own first. They are more loyal to each other than they are to you. I tried to do this work inside the Democratic Party. I'm done. I'm running as an Independent because I'm not a politician. I don't have loyalty to any real hardcore party. I'm not backed by corporations. I'm not backed by PACs. I'm backed by you.`,
    },
    {
      heading: "I started showing up.",
      body: `When I came home, I made a promise to myself. The next time the powerful were getting away with something, I wasn't going to be on the wrong side of it. I built a Substack. I built a daily livestream. I built a community I call the Wolfpack. We started doing the work the press wouldn't do — covering the Epstein files release, interviewing whistleblowers, delivering material directly to Congress. I sat in the House Oversight field hearing in West Palm Beach — twenty minutes from this district — and listened to Maria Farmer, Dani Bensky, Roza, Courtney Wild, Jena-Lisa Jones, and the brothers of Virginia Roberts Giuffre testify. I went to New York for the 24-hour reading of the 3.5 million pages. We are not going to let them use these survivors when it is politically useful and abandon them when it is time to stand. That's a promise.`,
    },
    {
      heading: "Why Congress. Why now.",
      body: `Florida's 27th deserves a representative who isn't owned by a party or by a donor class. I have no PAC. I have no party machine. I have no future political career to protect — I just have what I learned, and I want to use it. Nobody knows how these people operate better than I do, and nobody will fight harder to expose them. If you're tired of being represented by people who'd rather perform for cable news than do the job, I'm asking for your vote. And before that, I'm asking for your help getting me on the November ballot.`,
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
      year: "Apr 2026",
      text: "Stands with Virginia Roberts Giuffre's brothers in DC after her death. Begins escalating Epstein-files advocacy.",
    },
    {
      year: "May 2026",
      text: "Attends House Oversight field hearing in West Palm Beach with Epstein survivors. Travels to New York for the 24-hour reading of 3.5 million pages.",
    },
    {
      year: "May 2026",
      text: "Switches to Independent. Goes direct to the November general election.",
    },
  ],
} as const;

export const joinSection = {
  eyebrow: "Get Involved",
  headline: "We are not just a community. We are a movement.",
  body: `No DNC. No RNC. No super PAC. No corporate money. Just you. If you can give five minutes or five hours, this campaign needs both. Together, we can take our country back.`,

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
  headline: "I'm not backed by corporations. I'm backed by you.",
  subhead: `Independent candidates don't get a party to pay their filing fees, hire their staff, or buy their ads. Every dollar you give goes straight to fighting for Florida's 27th. No PAC. No corporate check. No strings. Just neighbors funding neighbors.`,
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
  body: `I'm not running on party money. I'm not running on corporate money. I'm not running on PAC money. The whole point of this campaign is that I won't owe anyone but the people who got me elected.

That means I need you.

Five dollars from a thousand neighbors will do more than one big check from a donor with strings attached. Five dollars buys a yard sign. Twenty-five pays for digital ads to a hundred voters in our district. Fifty knocks on doors that political pros say aren't worth knocking — and we knock them anyway.

If you can give, give it. If you can't right now, get on the email list and send this page to a friend in Florida 27 who can.

Enough is enough. Thank you for standing with me.`,
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
  intro: "Everything I've said about Trump, Giuliani, the cult, the cover-up — it's all on the record. Read every link. Watch every clip. Then decide for yourself who's telling you the truth.",

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

  // The book. Available externally — campaign doesn't sell it.
  book: {
    title: "Shadow Diplomacy",
    subtitle: "Lev Parnas' Wild Ride from Brooklyn to Donald Trump's Inner Circle",
    coAuthor: "with Jerry Langton",
    year: 2024,
    url: "", // External book retailer — TBD. Empty hides the buy button.
  },
  pressContact: {
    email: "press@levparnas.org",
    label: "Press inquiries",
    note: "For interviews, statements, scheduling, or fact-checks, write the press team directly.",
  },
} as const;
