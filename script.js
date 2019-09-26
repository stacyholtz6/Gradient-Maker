var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

// just to make sure it works
// console.log(css);
// console.log(color1);
// console.log(color2);

// Changes the body style to red
// body.style.background = 'red';

function setGradient() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

	css.textContent = body.style.background + ';';
}

// dont need to call the function setGradient() is not needed here...... want it to be called every time the input is selected
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
