const fs = require("fs")
const fileName = process.argv[2];

let count = 0;
const read = fs.readFileSync(fileName, 'utf-8');
for(let char of read) {
	count += char === '\n'
}
console.log(count)
