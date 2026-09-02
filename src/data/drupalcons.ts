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
  { year: 2017, city: "Baltimore",             talk: "Decode and Reload: Personality Gaps in the Workplace", url: "https://www.youtube.com/watch?v=SGGi3aPtCqA", rec: "youtube" },
  { year: 2018, city: "Nashville",             talk: "One Entry Point: Commerce for online and real-world transactions", url: "https://www.youtube.com/watch?v=Mid-D5IuKWY", rec: "youtube" },
  { year: 2020, city: "Minneapolis · virtual", talk: "Let’s get real about work/life balance", url: "https://www.youtube.com/watch?v=CwzZaX4KzaA", rec: "youtube" },
  { year: 2023, city: "Pittsburgh",            talk: "Urban Institute: 24 research websites, one platform, three-person team", url: "https://www.youtube.com/watch?v=kGC8gVKTiLs", rec: "youtube" },
  { year: 2025, city: "Atlanta",               talk: "Accessibility and inclusive design (Summit breakout, unrecorded)", url: "https://drupalcon-atlanta-2025.sessionize.com/session/866730", rec: "link" },
  { year: 2026, city: "Chicago",               talk: "Should You Use AI to Serve Your Nonprofit’s Mission? Getting Past the Hype, fireside with Tim Lehnen (Nonprofit Summit, unrecorded) · Agentic Interface and Nonprofits: Survival Tips (Summit breakout, unrecorded) · MCP live demo at the Pantheon booth (youtube)", url: "https://youtu.be/MkmSpV2l_1k", rec: "youtube", featured: true },
];
