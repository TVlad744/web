function Test(num) {
	if(!(isNaN(Number(num))) && num != null)
	{
		if(num % 2 == 0)
			return alert("Парне число");
		else
			return alert("Непарне число");
	}
	else
		return alert("");
}

function SumSimple() {
	let arr = [];

	input:for(let i = 1; ; i++)
	{
		for (let j = 1; j <= i; j++)
		{
			if (i % j == 0 && j != 1 && i != j)
        	    continue input;
		}

		arr.push(i);

		if(arr.length == 5)
		{
			let sum = 0;
			for (let number of arr) {
				sum += number;
			}
			alert("Сума перших 5-ти простих чисел: " + sum);
			return sum;
		}
	}
}

function SumNOne(n) {
	if(!(isNaN(Number(n))) && n != null)
	{
		let num = "";
		let sum = 0;
		for (let i = 1; i <= n; i++) {
			num = num + "1";
			console.log(num);
			sum += Number(num);
		}
		return alert(sum);
	}
	else
		return alert("");	
}

let input = prompt("Введіть число",);
Test(input);

SumSimple();

let inp_num = prompt("Введіть число",);
SumNOne(inp_num);