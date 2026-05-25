const BASE = "/contact?utm_source=Craven%20Solutions&utm_medium=Website";

export const contactUrl = (campaign: string) =>
  `${BASE}&utm_campaign=${encodeURIComponent(campaign)}`;
