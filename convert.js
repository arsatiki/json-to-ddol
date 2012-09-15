function convert(obj) {
	if (typeof obj != 'object')
		return document.createTextNode(obj);
	
	if (Array.isArray(obj))
		return convertArray(obj);
		
	return convertObj(obj);

}

function convertArray(arr) {
	var ol = document.createElement('ol');
	var li;
	var k;
	for (k = 0; k < arr.length; k++) {
		li = document.createElement('li');
		li.appendChild(convert(arr[k]));
		ol.appendChild(li);
	}
	return ol;
}

function convertObj(obj) {
	var dl = document.createElement('dl');
	var dd, dt;
	for (key in obj) {
		if (!obj.hasOwnProperty(key))
			continue;
		dt = document.createElement('dt');
		dd = document.createElement('dd');
		dt.appendChild(document.createTextNode(key));
		dd.appendChild(convert(obj[key]));
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	return dl;
}