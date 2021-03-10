//!від 1 до 999_999
//123 == 3
//1 - сто.
//2 - двадцать.
//3 - три
//	- гривні
//сто + двадцать + три + гривні
//если длина строки == 3 символа тогда розделаем число на 3 части ...первая часть в масив с 100 - мя, вторая часть в масив с 10 - ми, 3 часть в //масив с 1  потом все три значения + и к конце добавляем падеж гривни как в 1.

// длина символа 1
// 0 гривень, 1 гривня, 2 гривні, 	3 гривні , 4 гривні 5 гривень 6 гривень 7 гривень 8 гривень 9 гривень

//[{ '0': 'нуль' }, { '1': 'одна' }, { '2': 'дві' }, { '3': 'три' }, { '4': 'чотири' }, { '5': 'пять' }, { '6': 'шість' }, { '7': 'сімь' }, { '8': 'вісім' }, { '9': 'девять' }];
// Длина символов 2
// десять, одинадцять, дванадцять, тринадцять, чотирнадцять, пятнадцять, шістнадцять,сімнадцять, вісімнадцять, девятнадцять, двадцять  гривень
//[{ '10': 'десять' }, { '11': 'одинадцять' }, { '12': 'дванадцять' }, { '13': 'тринадцять' }, { '14': 'чотирнадцять' }, { '15': 'пятнадцять' }, { '16': 'шістнадцять' }, { '17': 'сімнадцять' }, { '18': 'вісімнадцять' }, { '19': 'девятнадцять' }, { '20': 'двадцять' }];
// Длина символов 3
// сто, двісті, триста,чотириста, пятьсот, шістьсот, сімсот,вісімсот, девьятьсот, гривень
let numbers0_9 = new Map([
	['0', ' гривень'], ['1', 'одна гривня'], ['2', 'дві гривні'], ['3', 'три гривні'], ['4', 'чотири гривні'], ['5', 'пять гривень'], ['6', 'шість гривень'], ['7', 'сімь гривень'], ['8', 'вісім гривень'], ['9', 'девять гривень'],
]);
let numbers0_9_1000 = new Map([
	['0', ' гривень'], ['1', 'одна тисяча'], ['2', 'дві тисячи'], ['3', 'три тисячи'], ['4', 'чотири тисячи'], ['5', 'пять тисяч'], ['6', 'шість тисяч'], ['7', 'сімь тисяч'], ['8', 'вісім тисяч'], ['9', 'девять тисяч'],
]);


let numbers11_19 = new Map([
	['11', 'одинадцять'], ['12', 'дванадцять'], ['13', 'тринадцять'], ['14', 'чотирнадцять'], ['15', 'пятнадцять'], ['16', 'шістнадцять'], ['17', 'сімнадцять'], ['18', 'вісімнадцять'], ['19', 'девятнадцять'],
]);

let numbers10_90 = new Map([
	['10', 'десять'], ['20', 'двадцять'], ['30', 'тридцять'], ['40', 'сорок'], ['50', 'пятьдесят'], ['60', 'шістисят'], ['70', 'сімдесят'], ['80', 'вісімдесят'], ['90', 'девяносто'],
]);
let numbers1_90 = new Map([
	['1', 'десять'], ['2', 'двадцять'], ['3', 'тридцять'], ['4', 'сорок'], ['5', 'пятьдесят'], ['6', 'шістисят'], ['7', 'сімдесят'], ['8', 'вісімдесят'], ['9', 'девяносто'],
]);
let numbers100 = new Map([
	['1', 'сто'], ['2', 'двісті'], ['3', 'триста'], ['4', 'чотириста'], ['5', 'пятьсот'], ['6', 'шістьсот'], ['7', 'сімсот'], ['8', 'вісімсот'], ['9', 'девятсот'],
]);
let numbers1000 = new Map([
	['1', 'одна'], ['2', 'дві'], ['3', 'три'], ['4', 'чотири'], ['5', 'пять'], ['6', 'шість'], ['7', 'сім'], ['8', 'вісім'], ['9', 'девять'],
]);



let numberChek = '999999';

let arr = [...numberChek];

for (let i = 0; i < arr.length; i++) {
	if (arr.length == 1) {
		words = numbers0_9.get(arr[i]);

	}
	else if (arr.length == 2) {
		let num_X = numberChek[0] + numberChek[1];
		if (num_X >= 11 && num_X <= 19) {
			words = numbers11_19.get(num_X) + ' гривень';
		}
		else if (numberChek % 10 == 0) {
			words = numbers10_90.get(numberChek) + ' гривень';
		} else {
			words = numbers1_90.get(numberChek[0]) + ' ' + numbers0_9.get(numberChek[1]);
		}
	}
	else if (arr.length == 3) {
		let num_X = numberChek[1] + numberChek[2];
		if (num_X >= 11 && num_X <= 19) {
			words = numbers100.get(numberChek[0]) + ' ' + numbers11_19.get(num_X) + ' гривень';
		} else if (numberChek % 100 == 0) {
			words = numbers100.get(numberChek[0]) + ' тисяч ' + numbers0_9.get(numberChek[2]);
		} else {
			words = numbers100.get(numberChek[0]) + ' ' + numbers1_90.get(numberChek[1]) + ' ' + numbers0_9.get(numberChek[2]);
		}
	}
	else if (arr.length == 4) {
		let num_X = numberChek[1] + numberChek[2];
		if (num_X >= 11 && num_X <= 19) {
			words = numbers0_9_1000.get(numberChek[0]) + ' ' + numbers100.get(numberChek[1]) + ' ' + numbers11_19.get(num_X) + ' гривень';
		}

		else if (numberChek % 100 == 0) {
			words = numbers0_9_1000.get(numberChek[0]) + ' ' + numbers0_9.get(numberChek[3]);
		}
		else {
			words = numbers0_9_1000.get(numberChek[0]) + ' ' + numbers100.get(numberChek[1]) + ' ' + numbers1_90.get(numberChek[2]) + ' ' + numbers0_9.get(numberChek[3]);

		}
	}
	else if (arr.length == 5) {
		let num_X = numberChek[1] + numberChek[2];
		let num_Y = numberChek[4] + numberChek[5];
		if (num_X >= 11 && num_X <= 19 && num_Y >= 11 && num_Y <= 19) {
			words = numbers11_19.get(num_X) + ' тисяч ' + numbers100.get(numberChek[2]) + ' ' + numbers11_19.get(num_Y) + ' гривень';
		}
		else if (numberChek % 1000 == 0) {
			words = numbers10_90.get(numberChek[0]) + ' тисяч ' + numbers0_9.get(numberChek[4]);
		}
		else {
			words = numbers1_90.get(numberChek[0]) + ' ' + numbers0_9_1000.get(numberChek[1]) + ' ' + numbers100.get(numberChek[2]) + ' ' + numbers1_90.get(numberChek[3]) + ' ' + numbers0_9.get(numberChek[4]);

		}
	}
	else if (arr.length == 6) {
		let num_X = numberChek[4] + numberChek[5];
		let num_Y = numberChek[1] + numberChek[2];
		if (num_X >= 11 && num_X <= 19 && num_Y >= 11 && num_Y <= 19) {
			words = numbers100.get(numberChek[0]) + ' ' + numbers11_19.get(num_Y) + ' тисяч ' + numbers100.get(numberChek[3]) + ' ' + numbers11_19.get(num_X) + ' гривень';
		}

		else if (numberChek % 10000 == 0) {
			words = numbers100.get(numberChek[0]) + ' тисяч ' + numbers0_9.get(numberChek[5]);
		}
		else {
			words = numbers100.get(numberChek[0]) + ' ' + numbers1_90.get(numberChek[1]) + ' ' + numbers0_9_1000.get(numberChek[2]) + ' ' + numbers100.get(numberChek[3]) + ' ' + numbers1_90.get(numberChek[4]) + ' ' + numbers0_9.get(numberChek[5]);

		}
	}
}

console.log(words)