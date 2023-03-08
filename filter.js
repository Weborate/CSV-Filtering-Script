const fs = require('fs');
const readline = require('readline');

// Get command-line arguments
const args = process.argv.slice(2);
const filename = args[0];
const searchString = args[1].toLowerCase();
const outputFile = filename.replace('.csv', '_filtered.csv');

// Save user from losing the original file when replace failed and outputFile == input file
if (filename == outputFile) {
  throw "The input file is not a CSV"
}

// Create the readline interface for reading the input file
const rl = readline.createInterface({
  input: fs.createReadStream(filename),
  crlfDelay: Infinity
});

// Create a write stream for writing to the output file
const ws = fs.createWriteStream(outputFile);

// Process each line of the input file
rl.on('line', (line) => {
  // Convert the line to lowercase before checking for a match
  const lowerCaseLine = line.toLowerCase();

  // Check if the line contains the search string
  if (lowerCaseLine.includes(searchString)) {
    // Write the line to the output file
    ws.write(line + '\n');
  }
});

// Log a message when processing is complete
rl.on('close', () => {
  console.log('Processing complete.');
});
