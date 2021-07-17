const fs = require('fs')

module.exports = function (path, ext, cb) {
	let filteredList = [];
	fs.readdir(path, (err, list) => {
		if(err) {
			return cb(err);
		}

    	for(let fileName of list) {
        	if(fileName.endsWith(`.${ext}`)) {
            	filteredList.push(fileName)
	        }
	    }
		return cb(null, filteredList)
	})
}
