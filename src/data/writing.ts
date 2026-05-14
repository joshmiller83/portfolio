export interface WritingEntry {
  year: string;
  title: string;
  venue: string;
  topic: string;
  url?: string;
  impressions?: string;
  quote?: string;
  body?: string;
  imageId?: string;
  imagePlaceholder?: string;
}

export const writing: WritingEntry[] = [
  {
    year: "2026",
    title: "MCP vs. Markdown: feeding the web vs. participating in it",
    venue: "LinkedIn",
    impressions: "1,507 impressions",
    topic: "mcp",
    url: "https://www.linkedin.com/posts/josh3_pantheon-recently-announced-a-bot-protected-activity-7450532256915324928-AT9t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    quote: "MCP gives organizations a way to build a web that does more than serve markdown. It enables a back-and-forth — your site can expose functionality, capture intent, and participate in the agentic ecosystem rather than just feed it.",
    body: "Pantheon recently announced a bot-protected CDN that can serve markdown versions of your Drupal, WordPress, or Next.js content to AI agents. This is genuinely exciting, and if you can join the beta, you should. But I want to push on something.\n\nServing markdown to bots is a one-way street — your content goes out, and nothing comes back. You learn nothing about who (or what) is consuming it. Dries put it well in his post 'The Third Audience': making content easier for AI to consume might accelerate the hollowing out of the web if the value exchange isn't carefully considered. This potential for hollowing out the web is a clarion call to action.\n\nThat's how we preserve a decentralized internet where individual organizations still have a real relationship with their audience, even when that audience is arriving through an AI agent. Join the Pantheon GCDN Bot Protected beta. Serve the markdown. And at the same time, start asking what an MCP endpoint would look like for your organization.",
  },
  {
    year: "2026",
    title: "What AI can't do that open source has always done",
    venue: "LinkedIn · on Roland Obermair's SDC toolkit proposal",
    topic: "community",
    url: "https://www.linkedin.com/posts/josh3_drupal-sdc-displaybuilder-activity-7457175987450085376-xUJS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    quote: "AI is going to be a multiplier of these kinds of efforts, but it will never replace community-based conversations that happen amongst agencies and practitioners. The human connections and the ability to work together — even when that means having a long view of the value of such work — are things our LLMs can articulate but would never execute autonomously.",
    body: "Ideas and collaboration like this are how open source projects innovate. And innovation is how we survive and adapt.\n\nIn the same way AI can't touch this kind of culture, closed-source 'markets' do not have this kind of culture either. The Drupal community has been sharing valuable ideas that turn into traction for the last 20 years. There's real value in ideas like this — and the culture that supports and motivates people to share them — and Roland is proposing we discuss and validate together.\n\nI celebrate his tactic, the signal that we're adapting and innovating, and I love the idea on its own merits.",
  },
  {
    year: "2026",
    title: "On the DrupalCon Nonprofit Summit",
    venue: "LinkedIn · ahead of DrupalCon Chicago",
    impressions: "281 impressions",
    topic: "community",
    url: "https://www.linkedin.com/posts/josh3_hey-all-drupalcon-north-america-is-just-activity-7435302416427692032-61br?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    quote: "Having gone to enough DrupalCons now to lose count, hear me when I say: the Nonprofit Summit is the single most impactful event I have ever attended during one of these conferences. See you there.",
    body: "The summit included breakout sessions on AI governance, agentic interfaces, and digital sovereignty — themes I carried into my own sessions: a fireside chat with Tim Lehnen, a breakout on agentic interfaces, and a live MCP demo at the Pantheon expo booth.",
  },
  {
    year: "2025",
    title: "The interpretability problem is baked in (and why that matters for nonprofits)",
    venue: "LinkedIn",
    impressions: "408 impressions",
    topic: "ai-gov",
    url: "https://www.linkedin.com/posts/josh3_things-get-dicey-when-algorithms-start-making-activity-7422760488733704192-A2oK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    imageId: "essay-interpretability",
    imagePlaceholder: "drop the adversarial-medical-image diagram here",
    quote: "Researchers added imperceptible noise to medical images. A healthy retina becomes diabetic retinopathy. A normal chest X-ray becomes pneumothorax. The images look identical to us. The AI sees something completely different. The model found patterns that work — not necessarily the patterns we assume it found.",
    body: "Things get dicey when algorithms start making decisions about people.\n\nGrant Sanderson's 3Blue1Brown video on gradient descent shows how a neural network recognizing handwritten digits has around 13,000 adjustable parameters. That's tiny by today's standards — frontier models have hundreds of billions. But the principle's the same: training nudges those parameters until the network responds well to test data. Nobody programs what to look for. The structure emerges through backpropagation.\n\nDavid Peterson, a sociology professor at Purdue whose AI risks course I took, framed this as the interpretability problem. It's baked into how these systems work. I've spent years in web development and open source, where transparency is the whole point. Nonprofits I've worked with — and the people those organizations serve — need governance they can trust. Deep learning doesn't provide that transparency. The outputs are useful; how it reaches decisions is a black box.\n\nI'm not against black boxes. These systems do remarkable things. But we should be clear-eyed about what 'learning' means here. That distinction matters when we start trusting algorithms to see things for us.",
  },
  {
    year: "2025",
    title: "The alignment problem isn't hypothetical — Wells Fargo already ran the experiment",
    venue: "LinkedIn · on Bostrom, Goodhart's Law, and nonprofit governance",
    impressions: "160 impressions",
    topic: "ai-gov",
    url: "https://www.linkedin.com/posts/josh3_the-stakes-for-getting-specification-and-activity-7423122851173449728-bJ65?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    quote: "Wells Fargo's CEO wanted 8 products per customer. Why 8? 'It rhymes with great.' Employees were rewarded for hitting the number. Result: 3.5 million fake accounts, $3 billion in fines, 5,300 employees fired. That's the alignment problem showing up for humans without AI like we have it today.",
    body: "Reading Bostrom's Superintelligence, it's all about the philosophy of specification. His core problem: how do you trust that an intelligent system has your goals at its heart? He calls it the alignment problem. You can optimize for a metric, but metrics are proxies. The system finds shortcuts you didn't anticipate. Economists have a name for this: Goodhart's Law — 'When a measure becomes a target, it ceases to be a good measure.'\n\nThis connects with my nonprofit governance work and open source experience. I've sat in meetings where we debated success metrics for programs, workflows, and sales funnels. We often struggle to see that gamifying a number is at the expense of the mission. We're not good at specifying what we want from each other. Specifying it for machines can be harder.\n\nThe alignment problem is showing up in AI, but it's also a governance problem, a management problem, a human problem. We've been wrestling with it for centuries. The difference now is scale and speed. Think deeply about your specs and requirements; they will be driving your technical debt and missed estimates tomorrow.",
  },
  {
    year: "2025",
    title: "We're building systems that work but can't be read",
    venue: "LinkedIn · reading Melanie Mitchell",
    impressions: "248 impressions",
    topic: "ai-gov",
    url: "https://www.linkedin.com/posts/josh3_theres-comfort-and-security-in-code-you-activity-7422398080450191360-Y_PE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    quote: "Like a river seeking least resistance, modern AI found a different path — neural networks consume massive data and patterns emerge through backpropagation. Powerful, clearly. But it costs us something. You can't open the hood and trace the logic anymore. This is a new kind of technical debt — one that is very, very opaque.",
    body: "There's comfort and security in code you can read. We're building systems that work but can't be read.\n\nReading Melanie Mitchell's Artificial Intelligence: A Guide for Thinking Humans, I keep thinking about a codebase I inherited years ago. Hundreds of nested conditionals trying to anticipate every edge case. It worked until it didn't. That's what happened to symbolic AI (AlphaGo, Google Translate, Siri). Researchers tried to encode human knowledge as rules, but the world has too many exceptions. They called it 'combinatorial explosion' — rules multiply faster than you can write them.",
  },
  {
    year: "2025",
    title: "When the 'problem' in your data is the actual insight",
    venue: "LinkedIn · sprint analytics, KDD process",
    impressions: "1,138 impressions",
    topic: "data",
    url: "https://www.linkedin.com/posts/josh3_sometimes-the-problem-in-your-data-is-the-activity-7411953037360979969-rNPx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    imageId: "essay-sprint-dashboard",
    imagePlaceholder: "drop a screenshot of the sprint dashboard here",
    quote: "About 66% of our sprint work was 'invisible' — unpointed tickets that were diluting the signal. Once I filtered to pointed work only, a different picture emerged: our core dev team is running at 91% completion with stable velocity. The apparent decline was a data visibility problem.",
    body: "I spent the last few weeks building a sprint performance dashboard for my team. We're evaluating whether to shift from two-week to three-week sprints, and I wanted the data to guide that decision.\n\nInitial finding: completion rates appeared to be declining. Concerning, right? But when I applied the KDD (Knowledge Discovery in Databases) process from a data mining course I was taking, I realized I was measuring the wrong thing.\n\nKey takeaway: 'Begin with the end in mind' is evidence-based advice. Know what question you're actually trying to answer before you trust what the numbers seem to say.",
  },
  {
    year: "2025",
    title: "What I built when I finished Anthropic's MCP course",
    venue: "LinkedIn",
    impressions: "985 impressions",
    topic: "mcp",
    url: "https://www.linkedin.com/posts/josh3_completed-anthropics-official-mcp-course-activity-7412275561089232896-vqft?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXDBtcBEqCjn6_2aV_kMdyjXir96jvX0kA",
    imageId: "essay-mcp-course",
    imagePlaceholder: "drop a screenshot of your MCP server in action",
    quote: "Built MCP servers and clients using the Python SDK — tools, resources, and prompts. Resources and prompts were standout concepts: despite generic names, they enable powerful patterns for controlled data exposure and standardized workflows.",
    body: "Highly recommend all of Anthropic's training courses. They are so incredibly well done.\n\n(Note: this post predates joining the Drupal MCP module core team, where I've since applied this work directly.)",
  },
  { year: "2024", title: "A Privacy-Preserving Validation Server, Version 2.0", venue: "Urban Institute · coauthored research publication", topic: "research", url: "https://www.urban.org/research/publication/privacy-preserving-validation-server-version-2" },
  { year: "2024", title: "New tools are needed to unlock private data for better policymaking", venue: "Urban Institute on Medium", topic: "research", url: "https://medium.com/urban-institute/new-tools-are-needed-to-unlock-private-data-for-better-policymaking-64a088565b2b" },
  { year: "2021", title: "Drupal 8 to Drupal 9: the easiest major upgrade in a decade", venue: "Acro Media", topic: "drupal", url: "https://www.acromedia.com/article/drupal-8-to-drupal-9-the-easiest-major-upgrade-in-a-decade" },
  { year: "2020", title: "Drupal Commerce checkout: an example of being headless-ready", venue: "Acro Media", topic: "commerce", url: "https://www.acromedia.com/article/drupal-commerce-checkout-an-example-of-being-headless-ready" },
  { year: "2020", title: "The Drupal community's work with React", venue: "Acro Media", topic: "drupal", url: "https://www.acromedia.com/article/the-drupal-communitys-work-with-react" },
  { year: "2019", title: "Open source is teaching others to fish", venue: "Acro Media", topic: "community", url: "https://www.acromedia.com/article/open-source-is-teaching-others-to-fish" },
  { year: "2018", title: "Multiple ecommerce shopping carts in Drupal Commerce", venue: "Acro Media", topic: "commerce", url: "https://www.acromedia.com/article/multiple-ecommerce-shopping-carts-in-drupal-commerce" },
  { year: "2018", title: "Web-to-print with Drupal Commerce", venue: "Acro Media", topic: "commerce", url: "https://www.acromedia.com/article/web-to-print-with-drupal-commerce" },
  { year: "2017", title: "The case of reCAPTCHA session validation errors", venue: "Acro Media", topic: "drupal", url: "https://www.acromedia.com/article/the-case-of-recaptcha-session-validation-errors" },
  { year: "2018", title: "Installing Drupal Commerce 2 using Lando", venue: "Acro Media (Commerce Guys era)", topic: "commerce", url: "https://www.acromedia.com/article/installing-drupal-commerce-2-using-lando" },
];
