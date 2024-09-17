import fs from 'fs'
import path from 'path'
import simpleGit from 'simple-git'
import { bold, error, info } from '../messages'

/**
 * Clones a Git repository template into a specified destination directory.
 * 
 * @param url - The URL of the Git repository to clone.
 * @param dest - The destination path where the repository should be cloned.
 * @returns A promise that resolves when the cloning process completes.
 */
export const cloneTemplate = async (url: string, dest: string) => {
  const git = simpleGit();
  try {
    info(`Cloning template from ${bold(url)} into ${bold(dest)}...`);
    await git.clone(url, dest);
    info('Template cloned.');
  } catch (err: any) {
    error('Error cloning template:', err.message);
  }
}

/**
 * Joins multiple path segments into a single path string.
 * 
 * @param {...string[]} paths - The path segments to be joined.
 * @returns {string} The final joined path.
 */
export const joinPaths = (...paths: string[]): string => {
  return path.join(...paths)
}

/**
 * Checks if a given path exists.
 * 
 * @param path - The file or directory path to check.
 * @returns - A boolean indicating whether the path exists.
 */
export const checkPathExists = (path: string): boolean => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    return false;
  }
};

/**
 * Updates the "name" field in the package.json file located at the destination path.
 * 
 * @param {string} destinationPath - The path to the directory containing the package.json file.
 * @param {string} projectName - The new name to set in the package.json file.
 * @returns {void}
 */
export const updatePackageJson = (destinationPath: string, projectName: string) => {
  try {
    const packageJsonPath = joinPaths(destinationPath, 'package.json')
    if (!checkPathExists(packageJsonPath)) return;

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

    // Update the project name in package.json
    packageJson.name = projectName

    // Write the updated package.json back to the file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8')
    info(`Application name updated to "${bold(projectName)}" in package.json`)
  } catch (error: any) {
    error('Error updating package.json:', error.message)
  }
}

/**
 * Updates the title tag in the index.html file located at the destination path.
 * 
 * @param {string} destinationPath - The path to the directory containing the index.html file.
 * @param {string} projectName - The new title to set in the index.html file.
 * @returns {void}
 */
export const updateIndexHtml = (destinationPath: string, projectName: string) => {
  try {
    let indexPath = joinPaths(destinationPath, 'index.html')
    if (!checkPathExists(indexPath)) return;

    let indexHtml = fs.readFileSync(indexPath, 'utf-8')

    // Replace the <title> tag with the new project name
    indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${projectName}</title>`)

    // Write the updated index.html back to the file
    fs.writeFileSync(indexPath, indexHtml, 'utf-8')
    info(`Application title updated to "${bold(projectName)}" in index.html`)
  } catch (error: any) {
    error('Error updating index.html:', error.message)
  }
}
