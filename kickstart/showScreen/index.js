let textArea = document.querySelector('.text-area');
let limiter = document.querySelector('.limiter');
let output = document.querySelector('.output');

textArea.addEventListener('input', showMessages);
limiter.addEventListener('input', showMessages);

showMessages();

function showMessages() {
	if(+limiter.value < 1) return;
	let messages = messageSeparator(textArea.value, +limiter.value);

	// console.log(messages);
	createList(messages);
}
function createList(list) {
	var messagesList = typeof list === 'string' ?  [list] : list;

	let ol = document.createElement('ol');

	for(let key of messagesList) {
		let li = document.createElement('li');
		li.textContent = key;

		let span = document.createElement('span');
		span.textContent = `(${key.length} characters)`;
		li.append(span);

		ol.append(li);
	}
	// console.log(ol);
	output.innerHTML = '';
	output.append(ol);
}




function messageSeparator(S,K) {
	try{
		// console.log(K);
		if(K < 1) return;

		let text = S.replace(/\s\s+/g, ' ').trim();
		let regExp = new RegExp(`\\b.{1,${K}}\\b`, 'g');
		let message = text.match(regExp).map(element => element.trim());
		// console.log(message);
		return message;
	} catch (e) {
		console.error(e);
		return -1;
	}
}