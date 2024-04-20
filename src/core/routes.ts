import { PageLink } from "optimus-bo-ui/dist/components/Navbar";

const ROUTES = {
  home: "/",
  contacts: "/contacts",
  hobbies: "/hobbies",
  funFacts: "/fun-facts",
};

function pageTitleForPath(path: string): string {
  const defaultName = "Tarekun";
  const mappings = {
    [ROUTES.home]: "Home",
    [ROUTES.contacts]: "Contatti",
    [ROUTES.hobbies]: "Hobbies",
    [ROUTES.funFacts]: "Fun fact",
  };
  return mappings[path] || defaultName;
}

const navbarLinks: PageLink[] = [
  {
    label: "Home",
    url: ROUTES.home,
  },
  {
    label: "Contacts",
    url: ROUTES.contacts,
  },
  {
    label: "Fun Facts",
    url: ROUTES.funFacts,
  },
];

export { ROUTES, navbarLinks, pageTitleForPath };
