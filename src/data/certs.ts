export interface Cert {
  name: string;
  by: string;
  date: string;
  url?: string;
}

export interface CertGroup {
  group: string;
  items: Cert[];
}

export const certs: CertGroup[] = [
  { group: "AI & MCP", items: [
    { name: "Model Context Protocol: Advanced Topics", by: "Anthropic", date: "Jan 2026", url: "https://verify.skilljar.com/c/bqct4ifiewfm" },
    { name: "Introduction to Model Context Protocol", by: "Anthropic", date: "Dec 2025", url: "https://verify.skilljar.com/c/jcmrwmj3etab" },
    { name: "AI Fluency for Nonprofits", by: "Anthropic", date: "Dec 2025", url: "https://verify.skilljar.com/c/ehu3z5i9icrr" },
    { name: "Global Regulations of Artificial Intelligence", by: "Purdue University · microcredential", date: "Jan 2026", url: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/567033/view" },
    { name: "Demystifying AI, Understanding Risks, and Shaping the Future", by: "Purdue University · microcredential", date: "Jan 2026", url: "https://bip.brightspace.com/f81993d1-f040-40db-88cd-dddba8664daf/d2l/awards/assertions/571978/view" },
    { name: "Leveraging AI for Governance, Risk, and Compliance", by: "LinkedIn Learning", date: "Jan 2026", url: "https://www.linkedin.com/learning/certificates/eefd3893f88c1c224779fcb826f37df50265aa90f5c21e7cdb9adb5ade655551" },
  ]},
  { group: "Security & Compliance", items: [
    { name: "NIST 800-53r5: Introduction to Security and Privacy Controls", by: "LinkedIn Learning", date: "Sep 2025", url: "https://www.linkedin.com/learning/certificates/773f7e21c0bcea67d43d8c74f97fdb4cb65b19af21fff82fb0f173070966de4d" },
    { name: "How to Get FedRAMP Authorized", by: "LinkedIn Learning", date: "Sep 2025", url: "https://www.linkedin.com/learning/certificates/054ec58373ee4f8f8ca31797f51a4b0827f8e0a17fa3a84719a9956b27559c23" },
    { name: "Cybersecurity Foundations: Governance, Risk & Compliance", by: "LinkedIn Learning", date: "Sep 2025", url: "https://www.linkedin.com/learning/certificates/a5f8bc6fc2c7b910bd8cdc1d19eed99f6736eaf4c507841e9f04a25538f81a4e" },
    { name: "AWS Certified Security · Domain 1: Incident Response (SCS-C02)", by: "Amazon Web Services", date: "Sep 2025" },
    { name: "Complete Guide to Cybersecurity: A Practical Approach", by: "LinkedIn Learning", date: "Sep 2025", url: "https://www.linkedin.com/learning/certificates/0763bf46e221268436b156b7f01af98a2e3d60c158d187f94f06a2878b3d841a" },
    { name: "Cybersecurity Careers and Certifications", by: "LinkedIn Learning", date: "Sep 2025", url: "https://www.linkedin.com/learning/certificates/d5db110aef8a22c4f8b3400622de5b0f678f00c6642dc7b7cbb2b4231bb5b7f5" },
  ]},
  { group: "Data", items: [
    { name: "Python Data Analysis", by: "LinkedIn Learning", date: "Jan 2026", url: "https://www.linkedin.com/learning/certificates/1a777861e3831bea7fe2f9e2030a5451f8d0bcd4891998f591ec7e48ea8695ed" },
    { name: "Data Analytics for Decision Makers", by: "Purdue University · microcredential", date: "Dec 2025" },
  ]},
  { group: "Drupal & Project Management", items: [
    { name: "Acquia Certified Backend Specialist · Drupal 8", by: "Acquia", date: "Dec 2018", url: "https://certification.acquia.com/user/6620" },
    { name: "PMP Exam Prep Seminar (35 PDU)", by: "Instructing.com", date: "May 2026", url: "https://www.instructing.com/certificates/8ha91zei6m" },
    { name: "PMI Member", by: "Project Management Institute", date: "Mar 2026 → Mar 2027", url: "https://community.pmi.org/profile/josh3" },
    { name: "Building High-Performance Teams", by: "LinkedIn Learning", date: "Jan 2025", url: "https://www.linkedin.com/learning/certificates/1842193673da7a11c1a6a65fa53603193df711c78f1f4e107fc85df7d96f7f26" },
    { name: "Protecting Human Research Participants", by: "PHRP Online Training", date: "Jun 2021" },
  ]},
];
