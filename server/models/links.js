export function getAllLinks(links) {
  return links;
}

export function getLinksByWeek(links, week) {
  return links.filter((item) => item.week === week);
}

export function createLink(links, link) {
  return [...links, link];
}
