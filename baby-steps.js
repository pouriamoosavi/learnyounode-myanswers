const args = process.argv;
let result = 0;
for(let i=2; i< args.length; i++) {
	const num = Number(args[i]);
	if(isNaN(num)) {
		continue;
	}
	result += num;
}

console.log(result)
