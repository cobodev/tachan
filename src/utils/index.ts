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
