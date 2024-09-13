#!/usr/bin/env node
import { copyTemplate, joinPaths, updateIndexHtml, updatePackageJson } from './utils';
import { askFramework, askProjectDetails, askTemplateDetails } from './prompts';

const init = async (): Promise<void> => {
  try {
    const templatesPath = joinPaths(__dirname, '../templates')

    const projectDetails = await askProjectDetails();
    const framework = await askFramework(templatesPath);
    const templateDetails = await askTemplateDetails(templatesPath, framework.framework);

    const templatePath = joinPaths(templatesPath, framework.framework, templateDetails.template, templateDetails.version);
    const destinationPath = joinPaths(projectDetails.path, projectDetails.name);
    copyTemplate(templatePath, destinationPath);
    updatePackageJson(destinationPath, projectDetails.name)
    updateIndexHtml(destinationPath, projectDetails.name)

    console.log(`Project "${projectDetails.name}" has been created at ${destinationPath}`);
  } catch (error: any) {
    console.error(`Error creating project: ${error.message}`);
  }
};

init();
