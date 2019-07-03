var number = +prompt("Введите число");
var degree = +prompt("Введите степень, в которую будет возводить число");
var sum=1;

//Используем for
for (var i=degree; i; i--) {
	sum *= number;
}
alert(sum);

//Используем do ... while
/*do {
	sum *= number;
	degree--;
} while (degree);
alert(sum);*/


//Используем while
/*while(degree){
	sum *= number;
	degree--;
}

alert(sum);*/