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

export { ROUTES, pageTitleForPath };
