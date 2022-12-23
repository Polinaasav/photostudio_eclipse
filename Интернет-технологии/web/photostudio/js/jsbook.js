//Форма
const hourInput = document.querySelector('#hours');
const dateInput = document.querySelector('#date');
const inputs = document.querySelectorAll('input');

//Чекбоксы
const fhoto = document.querySelector('input[name="fhoto"]');
const visagist = document.querySelector('input[name="visagist"]');
const stylist = document.querySelector('input[name="stylist"]');

hallbaseprice=1000
const totalPriceElement = document.querySelector('#total-price');

function calculate(){
    let totalPrice=hallbaseprice*parseInt(hourInput.value);

    if (fhoto.checked) {
        totalPrice = totalPrice + parseFloat(fhoto.value);
	}

	if (visagist.checked) {
		totalPrice = totalPrice + parseFloat(visagist.value); // ---
	}

	if (stylist.checked) {
		totalPrice = totalPrice + parseFloat(stylist.value); // ---
	}

	const formatter = new Intl.NumberFormat('ru');
	totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

for (const input of inputs) {
	input.addEventListener('input', function () {
		calculate();
	});
}