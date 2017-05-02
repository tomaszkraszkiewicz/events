var list = document.getElementById('list');
var	add = document.getElementById('addElem');
var tag = document.getElementsByTagName('li').lenght;

add.addEventListener('click', function () {
		list.innerHTML += '<li>item</li>';
}) 