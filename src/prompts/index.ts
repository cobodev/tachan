import inquirer from "inquirer";

/**
 * Prompts the user to input project details, such as the project name and path.
 * 
 * @returns {Promise<Object>} A promise that resolves with the user's project details, 
 * including the project name and path.
 */
export const askProjectDetails = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project name:',
      default: 'my-first-app',
      validate: (input) => {
        if (input.includes(' ')) return 'Invalid project name.';
        return true;
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'Path (if empty, current directory):',
      default: './',
      validate: (input) => {
        const validPathRegex = /^([a-zA-Z0-9]|\.\/|\/|\.\.\/)[a-zA-Z0-9/]*$/;
        if (!validPathRegex.test(input)) return 'Invalid path';
        return true;
      } 
    },
  ]);
}

/**
 * Prompts the user to select a framework from the available templates.
 * 
 * @param {Object} templates - An object containing available frameworks as keys.
 * @returns {Promise<Object>} A promise that resolves with the user's selected framework.
 */
export const askFramework = async (templates: any) => {
  const choices = Object.keys(templates);
  return inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'What framework would you like to use?',
      choices,
    },
  ]);
}

/**
 * Prompts the user to select a specific template within the chosen framework.
 * 
 * @param {Object} templates - An object containing available templates for a specific framework.
 * @returns {Promise<Object>} A promise that resolves with the user's selected template.
 */
export const askTemplateDetails = async (templates: any) => {
  const choices = Object.keys(templates);
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'What template would you like to use?',
      choices,
    },
  ]);
}

/**
 * Prompts the user to confirm the project creation details.
 * 
 * @param {string} template - The selected template for the project.
 * @param {string} projectName - The name of the project to be created.
 * @returns {Promise<Object>} A promise that resolves with the user's confirmation (true/false).
 */
export const askConfirm = async (template: string, projectName: string) => {
  return await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Are you sure you want to create project ${projectName} with template ${template}?`
    }
  ]);
}
