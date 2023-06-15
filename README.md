
# CSV Filtering Script

This script processes a CSV file and filters out any lines that do not contain a given search string. The user specifies the search string as a command-line argument when running the script. The output is written to a new CSV file.

## Prerequisites

This script requires Node.js to be installed on your system. You can download Node.js from the official website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Usage


`node filter.js <filename> <searchString>`

Replace <filename> with the name of the XLS file you want to filter, and <searchString> with the string you want to search for. The search string is case-insensitive, so it will match rows regardless of their case.

The script will create a new XLS file with the filtered data, and save it in the same directory as the original file. The new filename will have "_filtered" appended to it. For example, if your original filename was "data.xlsx", the filtered filename will be "data_filtered.xlsx".
    

## Input file format

The script assumes that the input file is a CSV file with one line of data per row. Each column should be separated by a comma. If your CSV file uses a different delimiter or has a different format, you may need to modify the script accordingly.

## Output file format

The output file has the same format as the input file: one line of data per row, with each column separated by a comma. The output file contains only the lines that contain the search string specified by the user.

## Example

Suppose you have a CSV file called `data.csv` with the following contents:

```
Name,Age,Gender
John,25,Male
Jane,30,Female
Mark,20,Male
```

If you want to filter out any lines that do not contain the string "Male", you can run the script using the following command:

```
node filter.js myfile.csv female female2 "Female with spaces"
```

The script will create a new file called `output.csv` with the following contents:

```
Name,Age,Gender
Jane,30,Female
```

Note that the lines containing "Male" are retained, while the line containing "Female" is filtered out.
