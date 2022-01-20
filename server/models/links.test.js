import { links } from "../../db/seed-data";
import { createLink, getAllLinks, getLinksByWeek } from "./links";

describe("testing getting data back", () => {
  test("getting all links back", () => {
    const actual = getAllLinks(links);
    const expected = links;
    expect(actual).toStrictEqual(expected);
  });

  test("getting all links from week 1", () => {
    const actual = getLinksByWeek(links, 1);
    const expected = [
      {
        name: "JS HTML DOM docs ",
        link: "https://www.w3schools.com/js/js_htmldom.asp",
        week: 1,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });

  test("getting all links from week 2", () => {
    const actual = getLinksByWeek(links, 2);
    const expected = [];
    expect(actual).toStrictEqual(expected);
  });

  test("getting all links from week 3", () => {
    const actual = getLinksByWeek(links, 3);
    const expected = [
      {
        name: "Comms style quiz",
        link: "https://sterka.team/comms-style/",
        week: 3,
      },
      {
        name: "Persona Tool",
        link: "https://www.hubspot.com/make-my-persona",
        week: 3,
      },
      {
        name: "5 Stages of Design Video ",
        link: "https://www.youtube.com/watch?v=-ySx-S5FcCI",
        week: 3,
      },
      {
        name: "Applying Design Thinking",
        link: "https://www.invisionapp.com/inside-design/what-is-design-thinking/",
        week: 3,
      },
      {
        name: "Flexbox Froggy CSS Game",
        link: "https://flexboxfroggy.com/",
        week: 3,
      },
      {
        name: "CSS Grid Garden Game",
        link: "https://cssgridgarden.com/",
        week: 3,
      },
      {
        name: "CSS Specificity docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
        week: 3,
      },
      {
        name: "CSS Attribute docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
        week: 3,
      },
      {
        name: "CSS Opacity docs",
        link: "https://getbootstrap.com/docs/5.1/utilities/opacity/",
        week: 3,
      },
      {
        name: "Deisgn Wireframing Video",
        link: "https://www.youtube.com/watch?v=aqdn7vVKygA",
        week: 3,
      },
      {
        name: "Wireframing Online Tool",
        link: "https://wireframe.cc/",
        week: 3,
      },
      {
        name: "Understanding Visual Design",
        link: "https://webdesign.tutsplus.com/articles/understanding-visual-hierarchy-in-web-design--webdesign-84",
        week: 3,
      },
      {
        name: "7 Tips for Cheating at Design",
        link: "https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886",
        week: 3,
      },
      {
        name: "Coolors Colour Palette Tool",
        link: "https://coolors.co/",
        week: 3,
      },
      {
        name: "Paletton Colour Palette Tool",
        link: "https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF",
        week: 3,
      },
      {
        name: "Figma Design/User Journey Tool",
        link: "https://www.figma.com/",
        week: 3,
      },
      {
        name: "Lighthouse Report Viewer Tool",
        link: "https://googlechrome.github.io/lighthouse/viewer/",
        week: 3,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe("testing creating resource", () => {
  test("creating a new resource", () => {
    const actual = createLink(links, {
      name: "useReducer WebDevSimplified video",
      link: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
      week: 8,
    });
    const expected = [
      ...links,
      {
        name: "useReducer WebDevSimplified video",
        link: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
        week: 8,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
