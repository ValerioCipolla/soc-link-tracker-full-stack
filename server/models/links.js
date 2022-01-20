export function getAllLinks(links) {
  return links;
}

export function getLinksByWeek(links, week) {
  return links.filter(item => item.week === week);
}