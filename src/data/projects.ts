export interface Project {
  title: string;
  org: string;
  years: string;
  stat: string;
  body: string;
  url?: string;
  urlLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Platform observability: the five golden metrics",
    org: "Urban Institute",
    years: "2025 → 2026",
    stat: "3 outages avoided in one week",
    body: "AI crawlers drove unprecedented traffic to Urban’s research data for two years and repeatedly took the sites down. I picked five metrics that could warn of trouble before downtime, connected New Relic, GoAccess, Cloudflare, Terminus, and Pantheon log polling, wrote the scripts, and built the dashboards. In one week they turned three traffic spikes that would have been downtime into notifications the team acted on. Full-stack visibility without a Datadog-scale subscription.",
  },
  {
    title: "Content taxonomy redesign and self-service editorial tooling",
    org: "Urban Institute",
    years: "2021 → 2026",
    stat: "80,000 pages moved at zero migration cost",
    body: "Replaced a hierarchical single-category menu system with a many-to-many tagging model across a dozen public websites. During the 2025 rebrand the tooling moved all 80,000 research articles and pages to new landing pages, with stakeholder verification as the only expense. Landing pages scaled from about a dozen to hundreds, and self-service term-conversion tools removed the content team’s dependency on engineering. The same tagging infrastructure carried the platform from Drupal 9 through Drupal 12 with zero downtime.",
  },
  {
    title: "Data Catalog migration to CloudFront and S3",
    org: "Urban Institute",
    years: "2025",
    stat: "2 TB of datasets, transfer cost near zero",
    body: "Serving the Data Catalog directly from S3 left the budget exposed: roughly ten bots downloading 30 percent of the catalog would have consumed the full annual budget in egress fees. I paced a multi-month ingestion into a CloudFront gateway to keep transfer costs below the threshold, so the migration itself was essentially free. Downloads are now cached, S3 pricing is protected from spikes, and the risk was closed before the bill ever arrived.",
  },
  {
    title: "Upward Mobility Initiative dashboard",
    org: "Urban Institute",
    years: "2023 → 2026",
    stat: "27 datasets · 1,300 launch attendees",
    body: "Directed development of an interactive dashboard for data-driven local policymaking, a multi-department spend of several million dollars run with the Communications Director. A decoupled API reads JSON descriptions of 27 datasets before visualizing them, so researchers add variables with almost no code. Every element is editable in Layout Builder, so full Spanish translations ship by swapping text. I selected and championed the vendor, which delivered on time and on budget. The launch drew nearly 1,300 attendees from hundreds of organizations.",
  },
  {
    title: "Safe Data Technologies validation server",
    org: "Urban Institute",
    years: "2022 → 2026",
    stat: "20+ person team across Urban, the IRS, RAND, Mathematica, and FSU",
    body: "Front-end lead on a privacy-preserving validation server prototype for safely releasing confidential government data. I built the dashboard interface, the notification system, and a decoupled API for long-running asynchronous jobs, gathering requirements directly from federal stakeholders and holding accessibility and secure data handling as fixed constraints in every release. The interfaces helped secure additional funding to expand the work. Coauthor on the resulting publication.",
    url: "https://www.urban.org/research/publication/privacy-preserving-validation-server-version-2",
    urlLabel: "read the publication",
  },
  {
    title: "GitLab CI/CD platform, with patches accepted upstream",
    org: "Acro Media",
    years: "2016 → 2021",
    stat: "40 developers · 7 teams · one pipeline hierarchy",
    body: "Architected and ran the agency-wide GitLab instance every team planned, reviewed, and shipped on: a project and team hierarchy, CI inheritance across pipelines, and hierarchical tagging that surfaced Kanban dashboards across teams at once. When GitLab lacked the tagging features we needed, I joined the UX discussions and landed accepted patches upstream. It was the first time I shipped code to make a tool fit the work rather than bending the work to fit the tool.",
  },
];
