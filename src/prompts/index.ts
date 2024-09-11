import inquirer from "inquirer";
import { getListFromPath, joinPaths } from "../utils";

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
    },
    {
      type: 'input',
      name: 'path',
      message: 'Path:',
      default: './',
    },
  ]);
};

/**
 * Prompts the user to select a framework from the available choices in a given path.
 * 
 * @param {string} path - The path where the frameworks are located.
 * @returns {Promise<Object>} A promise that resolves with the selected framework.
 */
export const askFramework = async (path: string) => {
  const choices = getListFromPath(path);
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
 * Prompts the user to select a template and a version for a given technology.
 * 
 * @param {string} techsPath - The base path where the templates for the selected technology are stored.
 * @param {string} selectedTech - The selected technology for which templates are available.
 * @returns {Promise<Object>} A promise that resolves with the selected template and version details.
 */
export const askTemplateDetails = async (techsPath: string, selectedTech: string) => {
  const techTemplatesPath = joinPaths(techsPath, selectedTech);

  const templateChoices = getListFromPath(techTemplatesPath);
  const templateAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'What template would you like to use?',
      choices: templateChoices,
    },
  ]);

  const versionChoices = getListFromPath(joinPaths(techTemplatesPath, templateAnswers.template));
  const versionAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'version',
      message: 'What version would you like to use?',
      choices: versionChoices,
    },
  ]);

  return {
    template: templateAnswers.template,
    version: versionAnswers.version,
  };
};
