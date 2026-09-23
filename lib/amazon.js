/** Amazon Associates tag already used across EarGuards product links. */
export const AMAZON_ASSOCIATE_TAG = "earguards-20";

/** Associate-tagged product URL. Pass a verified ASIN only. */
export function amazonProductUrl(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}
