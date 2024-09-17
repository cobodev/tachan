#!/usr/bin/env node
import { cloneTemplate, joinPaths, updateIndexHtml, updatePackageJson } from './utils'
import { askConfirm, askFramework, askProjectDetails, askTemplateDetails } from './prompts'
import { bold, error, success } from './messages';
import fs from 'fs'

const init = async (): Promise<void> => {
  try {
    // get template list
    const templates = JSON.parse(fs.readFileSync(`${__dirname}/../templates/templates.json`, 'utf-8'))

    // questions
    const projectDetails = await askProjectDetails()
    const framework = await askFramework(templates)
    const template = await askTemplateDetails(templates[framework.framework])
    const confirmation = await askConfirm(template.template, projectDetails.name)

    // confirm
    if (!confirmation.confirm) {
      error('Project setup cancelled.')
      process.exit(0);
    }

    // clone template to path
    const templateUrl = templates[framework.framework][template.template]
    const destinationPath = joinPaths(projectDetails.path, projectDetails.name)
    await cloneTemplate(templateUrl, destinationPath)
    
    // update project name
    updatePackageJson(destinationPath, projectDetails.name)
    updateIndexHtml(destinationPath, projectDetails.name)
    
    success(`Project "${bold(projectDetails.name)}" has been created at ${bold(destinationPath)}`)
  } catch (error: any) {
    error('Error creating project:', error.message)
  }
}

init()
