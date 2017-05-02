var list = document.getElementById('list');
var	add = document.getElementById('addElem');
var tag = document.getElementsByTagName('li').lenght;

add.addEventListener('click', function () {
	for (i = 0; i > tag; i++)
		list.innerHTML += '<li>item</li>';
}) 