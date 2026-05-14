export interface Podcast {
  ep: string;
  title: string;
  show: string;
  url: string;
  topic: string;
}

export const podcasts: Podcast[] = [
  { ep: "#453", title: "Urban Institute, what they do, and how they use Drupal", show: "Talking Drupal", url: "https://talkingdrupal.com/453", topic: "drupal" },
  { ep: "#461", title: "The Benefits of Distributions", show: "Talking Drupal", url: "https://talkingdrupal.com/461", topic: "contrib" },
  { ep: "#462", title: "DrupalCon Singapore — what to expect and what’s next for Drupal in Asia", show: "Talking Drupal", url: "https://talkingdrupal.com/462", topic: "community" },
  { ep: "#463", title: "Drupal vs. DIY Site Builders", show: "Talking Drupal", url: "https://talkingdrupal.com/463", topic: "drupal" },
  { ep: "#464", title: "Drupal Content Production", show: "Talking Drupal", url: "https://talkingdrupal.com/464", topic: "drupal" },
];
