const fs = require('fs')
const path = process.argv[2];
const ext = process.argv[3];

fs.readdir(path, (err, list) => {
	for(let fileName of list) {
		if(fileName.endsWith(`.${ext}`)) {
			console.log(fileName)
		}
	}
})

