async function get() {
	const response = await fetch("https://api.adviceslip.com/advice");
	data = await response.json();
	inputAdvice(data)
}

function inputAdvice(data) {
	var adviceArea = document.querySelector(".advice-box-container");
	adviceArea.innerHTML =
		`
			<div class="advice-ID">ADVICE #${data.slip.id}</div>
			<div class="advice-area">
				<div class="advice">"${data.slip.advice}"</div>
				<div class="img-area">
					<img class="play-img" src="images/pattern-divider-desktop.svg" alt="">
				</div>
				<div class="btn-area">
					<button onclick="get()">click</button>
				</div>
			</div>
		`
}

get()



