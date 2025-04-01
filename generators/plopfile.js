module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      },
      {
        type: "list",
        name: "type",
        message: "What is your component type?",
        choices: ["atoms", "molecules", "templates"]
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{type}}/{{pascalCase name}}/{{camelCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{pascalCase name}}/types.ts",
        templateFile: "templates/types.ts.hbs"
      }
    ]
  });
};
