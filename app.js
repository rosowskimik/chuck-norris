document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	const number = document.querySelector('input[type=number]').value;

	const xhr = new XMLHttpRequest();
	console.log(xhr);
	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
	
	xhr.onload = function() {
		if(this.status === 200) {
			const response = JSON.parse(this.responseText);
			console.log(response);
			let output = '';

			if(response.type === 'success') {
				response.value.forEach(joke => {
					output += `<li>${joke.joke}</li>`;
				});
			} else {
				output += '<li>Something went wrong</li>';
			}
			console.log(output);
			document.querySelector('.joke-list').innerHTML = output;
		}
	};

	xhr.send();

	e.preventDefault();
}