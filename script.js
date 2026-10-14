function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	let i = 0;
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==1) {
		i="I";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==2) {
		i="II";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==3) {
		i="III";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==4) {
		i="IV";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==5) {
		i="IV";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==6) {
		i="VI";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==7) {
		i="VII";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==8) {
		i="VIII";
	}
	if (Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)))==9) {
		i="IX";
	}




	
	let m = Math.floor(num/1000);
	let d = Math.floor((num-(m*1000))/500);
	let c = Math.floor((num-(m*1000)-(d*500))/100);
	let l = Math.floor((num-(m*1000)-(d*500)-(c*100))/50);
	let x = Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50))/10);
	// let v = Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10))/5);
	// let i = Math.floor((num-(m*1000)-(d*500)-(c*100)-(l*50)-(l*10)-(v*5))/1);

	let str="";
	str += m*"M"+d*"D"+c*"C"+l*"L"+x*"X"+i;
	return str;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
