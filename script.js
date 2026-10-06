function makeid(l) {
  // write your code here
	let res = "";
	const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0; i<l; i++){
		const idx = Math.floor(Math.random() * char_list.length);

		res += char_list.charAt(idx);
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");  
alert(makeid(l));
