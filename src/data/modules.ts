export interface Module {
  name: string;
  usage: string;
  url?: string;
}

export const modules: Module[] = [
  { name: "commerce_recurring",       usage: "4.2k sites",                url: "https://www.drupal.org/project/commerce_recurring" },
  { name: "commerce_license",         usage: "2.1k sites",                url: "https://www.drupal.org/project/commerce_license" },
  { name: "commerce_pricelist",       usage: "1.8k sites",                url: "https://www.drupal.org/project/commerce_pricelist" },
  { name: "commerce_stock",           usage: "1.6k sites",                url: "https://www.drupal.org/project/commerce_stock" },
  { name: "commerce_shipping_easy",   usage: "980 sites" },
  { name: "commerce_invoice_pdf",     usage: "820 sites" },
  { name: "mcp_drupal_resources",     usage: "core team",                 url: "https://www.drupal.org/project/mcp_drupal" },
  { name: "commerce_authnet_cim",     usage: "640 sites" },
  { name: "commerce_addressbook",     usage: "590 sites" },
  { name: "commerce_braintree_vault", usage: "410 sites" },
  { name: "commerce_tax_eu_vat",      usage: "380 sites" },
  { name: "+ 19 more",                usage: "drupal.org/u/joshmiller",   url: "https://www.drupal.org/u/joshmiller" },
];
