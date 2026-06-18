import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, 'dist');

const allowedExtensions = new Set([
  '.html',
  '.css',
  '.js',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.svg',
  '.ico',
  '.woff',
  '.woff2',
]);

const ignoredDirectories = new Set(['.git', 'dist', 'node_modules']);
const ignoredRootFiles = new Set([
  '.gitignore',
  'build.mjs',
  'generate-docs.js',
  'package-lock.json',
  'package.json',
  'project.json',
  'server.js',
  'vercel.json',
]);

let copiedFiles = 0;

async function copyBuildFile(source, destination) {
  const fileStat = await stat(source);

  if (fileStat.isDirectory()) {
    await mkdir(destination, { recursive: true });

    const entries = await readdir(source, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
        continue;
      }

      await copyBuildFile(
        join(source, entry.name),
        join(destination, entry.name),
      );
    }

    return;
  }

  if (!allowedExtensions.has(extname(source).toLowerCase())) {
    return;
  }

  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { force: true });
  copiedFiles += 1;
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

const rootEntries = await readdir(root, { withFileTypes: true });

for (const entry of rootEntries) {
  if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
    continue;
  }

  if (entry.isFile() && ignoredRootFiles.has(entry.name)) {
    continue;
  }

  await copyBuildFile(join(root, entry.name), join(distDir, entry.name));
}

await readFile(join(distDir, 'index.html'), 'utf8');
await writeFile(join(distDir, '404.html'), await readFile(join(distDir, 'index.html'), 'utf8'));

console.log(`Built ${copiedFiles} files into ${distDir}`);
