const myModule = require("./mymodule");
const path = process.argv[2];
const ext = process.argv[3];

myModule(path, ext, (err, list) => {
	if(err) console.log(err);
	else {		
		for(let fileName of list) {
    		console.log(fileName)
		}
	}
});


