const fs = require('fs');
const readline = require('readline');

// Get command-line arguments
const args = process.argv.slice(2);
if(args.length < 2) {
  console.error("Minimum 2 arguments required. Input file name, and the words to search.");
  console.error("Example: node filter.js myfile.csv Project1 Project2 \"Project with spaces\"");
  process.exit();
}
const filename = args[0];
const outputFile = filename.replace('.csv', '_filtered.csv');

const searchStrings = args.slice(1, args.length);

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

  // Check if the line contains one of the search strings
  let foundAny = false;
  for(let i = 0; i < searchStrings.length; i++){
    const searchString = searchStrings[i].toLowerCase();
    if(lowerCaseLine.includes(searchString)) {
      foundAny = true;
      break;
    }
  }

  if (foundAny) {
    // Write the line to the output file
    ws.write(line + '\n');
  }
});

// Log a message when processing is complete
rl.on('close', () => {
  console.log('Processing complete.');
});
