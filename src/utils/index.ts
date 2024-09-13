import fs from 'fs';
import path from 'path';

/**
 * Reads and returns the list of files and directories from the specified path.
 * 
 * @param {string} dirPath - The directory path to read from.
 * @returns {string[]} An array of file and directory names in the specified path.
 * If the path is not found or an error occurs, it returns an empty array.
 */
export const getListFromPath = (dirPath: string): string[] => {
  try {
    return fs.readdirSync(dirPath);
  } catch (err: any) {
    console.error(`Error reading directory: ${err.message}`);
    return [];
  }
};

/**
 * Recursively copies files and directories from the source path to the destination path.
 * 
 * @param {string} src - The source path where the files and directories are located.
 * @param {string} dest - The destination path where files and directories should be copied to.
 */
export const copyTemplate = (src: string, dest: string): void => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);
  items.forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyTemplate(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

/**
 * Joins multiple path segments into a single path string.
 * 
 * @param {...string[]} paths - The path segments to be joined.
 * @returns {string} The final joined path.
 */
export const joinPaths = (...paths: string[]): string => {
  return path.join(...paths);
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
    const packageJsonPath = path.join(destinationPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(`./${packageJsonPath}`, 'utf-8'));

    // Update the project name in package.json
    packageJson.name = projectName;

    // Write the updated package.json back to the file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
    console.log(`Nombre de la aplicación actualizado a "${projectName}" en package.json`);
  } catch (error: any) {
    console.error(`Error actualizando package.json: ${error.message}`);
  }
};

/**
 * Updates the title tag in the index.html file located at the destination path.
 * 
 * @param {string} destinationPath - The path to the directory containing the index.html file.
 * @param {string} projectName - The new title to set in the index.html file.
 * @returns {void}
 */
export const updateIndexHtml = (destinationPath: string, projectName: string) => {
  try {
    const indexPath = path.join(destinationPath, 'index.html');
    let indexHtml = fs.readFileSync(`./${indexPath}`, 'utf-8');

    // Replace the <title> tag with the new project name
    indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${projectName}</title>`);

    // Write the updated index.html back to the file
    fs.writeFileSync(indexPath, indexHtml, 'utf-8');
    console.log(`Título actualizado a "${projectName}" en index.html`);
  } catch (error: any) {
    console.error(`Error actualizando index.html: ${error.message}`);
  }
};
