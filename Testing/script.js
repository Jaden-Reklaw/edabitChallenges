$(document).ready(onReady);

function onReady() {
	$('#input').on('blur', getValues);
}

function getValues(event) {
	console.log($(this).text());
}