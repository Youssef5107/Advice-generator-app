var data = "";

async function get() {
	const response = await fetch("https://api.adviceslip.com/advice");
	var data = await response.json();
	console.log(data);
	var adviceBox = document.querySelector(".box-container");
	adviceBox.innerHTML =
		`
	<div>${data.slip.advice}</div>
	`
}

