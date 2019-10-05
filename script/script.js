function calculateInsurance(){
	
	var age = 0;
	var horsepower = 0;

	var input = {};
	var arrId = ["name","age","country","horsepower"];
	for (i = 0; i < arrId.length; i++){

		var item = document.getElementById(arrId[i]);
		input[i] = item.value;
	}

	var textOut = document.getElementById("resultdisplay");
	var result = 0;

	age = Number(input[1]);
	horsepower = Number(input[3]);

	console.log(input[0], input[1], input[2], input[3]);

	if (input[0] && input[1] && input[2] && input[3]) {


	if (horsepower > 0 && age > 0){

		if (input[2] == "0") { // Austria 
			result = (horsepower * 100) / age + 50;
		}
		else if (input[2] == "1") { // Hungary
			result = (horsepower * 120) / age + 100;
		}
		else if (input[2] == "2") { // Greece
			result = (horsepower * 150) / (age + 3) + 150;
		}
	}
	
	textOut.innerText = input[0] + " your insurance costs " + Math.floor(result) + " €";

} else textOut.innerText = "Not Enough data!";


}


document.getElementById("button").addEventListener("click",calculateInsurance, false);