const fs = require('fs');
const path = require('path');

const materialsFolderPath = path.join(__dirname, 'Materials');
const fileContentsPath = path.join(__dirname, 'file_contents.json');
const filesListPath = path.join(__dirname, 'files.json');

fs.readdir(materialsFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading Materials folder:', err);
    return;
  }

  const jsonFiles = files.filter(file => file.endsWith('.json'));
  const fileContents = [];

  jsonFiles.forEach(file => {
    const filePath = path.join(materialsFolderPath, file);

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      fileContents.push({ filename: file, content: content });
    } catch (error) {
      console.error(`Error reading file "${file}":`, error);
    }
  });

  fs.writeFile(fileContentsPath, JSON.stringify(fileContents, null, 2), err => {
    if (err) {
      console.error('Error writing file_contents.json:', err);
      return;
    }
    console.log('file_contents.json generated successfully.');
  });

  // Generate files.json
  fs.writeFile(filesListPath, JSON.stringify(files, null, 2), err => {
    if (err) {
      console.error('Error writing files.json:', err);
      return;
    }
    console.log('files.json generated successfully.');
  });
});
