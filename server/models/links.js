export function getAllLinks(links) {
  return links;
}

export function getLinksByWeek(links, week) {
  return links.filter((item) => item.week === week);
}

export function createLink(links, link) {
  return [...links, link];
}

export function updateLink(links, oldLink, newLink) {
  const oldLinkIndex = links.findIndex((item) => item.name === oldLink.name);
  return [
    ...links.slice(0, oldLinkIndex),
    newLink,
    ...links.slice(oldLinkIndex),
  ];
}

export function deleteLink(links, linkToDelete) {
  const linkToDeleteIndex = links.findIndex((item) => item.name === linkToDelete.name);
  return [...links.slice(0, linkToDeleteIndex), ...links.slice(linkToDeleteIndex + 1)]
}
