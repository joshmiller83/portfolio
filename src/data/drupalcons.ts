export type RecType = 'youtube' | 'link' | 'none';

export interface DrupalCon {
  year: number;
  city: string;
  talk: string;
  url?: string;
  rec: RecType;
  featured?: boolean;
}

export const drupalcons: DrupalCon[] = [
  { year: 2014, city: "Austin",                talk: "Commerce By Example", url: "https://austin2014.drupal.org/session/commerce-example.html", rec: "link" },
  { year: 2015, city: "Bogotá",                talk: "Conversion Rate Optimization", url: "https://latinamerica2015.drupal.org/session/conversion-rate-optimization.html", rec: "link" },
  { year: 2017, city: "Baltimore",             talk: "Decode and Reload: Personality Gaps in the Workplace", url: "https://events.drupal.org/baltimore2017/sessions/decode-and-reload-personality-gaps-workplace", rec: "link" },
  { year: 2018, city: "Nashville",             talk: "One Entry Point — Commerce for online and real-world transactions", url: "https://events.drupal.org/nashville2018/sessions/one-entry-point-commerce-online-and-real-world-transactions", rec: "link" },
  { year: 2020, city: "Minneapolis · virtual", talk: "Let's get real about work/life balance", url: "https://events.drupal.org/minneapolis2020/sessions/lets-get-real-about-worklife-balance", rec: "link" },
  { year: 2023, city: "Pittsburgh",            talk: "Urban Institute: 24 research websites, one platform, three-person team", url: "https://events.drupal.org/pittsburgh2023/session/urbanorg-urban-institute-24-research-websites-one-platform-three-person-team", rec: "link" },
  { year: 2025, city: "Atlanta",               talk: "Accessibility and inclusive design", url: "https://drupalcon-atlanta-2025.sessionize.com/session/866730", rec: "link" },
  { year: 2026, city: "Chicago",               talk: "Fireside with Tim Lehnen · Agentic interfaces breakout · MCP live demo (Pantheon booth)", url: "https://youtu.be/MkmSpV2l_1k", rec: "youtube", featured: true },
];
