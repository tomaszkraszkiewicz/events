var list = document.getElementById('list');
var	add = document.getElementById('addElem');
var tag = document.getElementsByTagName('li').length;

add.addEventListener('click', function () {
		list.innerHTML +='<li>item' + tag++ +'</li>' ;
})

