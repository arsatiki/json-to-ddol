convert = function () {
	var convertAny = function(obj) {
		if (typeof obj != 'object')
			return document.createTextNode(obj);

		if (Array.isArray(obj))
			return convertArray(obj);

		return convertObj(obj);

	};
	
	var convertArray = function(arr) {
		var ol = document.createElement('ol');
		var li;
		var k;
		for (k = 0; k < arr.length; k++) {
			li = document.createElement('li');
			li.appendChild(convertAny(arr[k]));
			ol.appendChild(li);
		}
		return ol;
	};
	
	var convertObj = function(obj) {
		var dl = document.createElement('dl');
		var dd, dt;
		for (key in obj) {
			if (!obj.hasOwnProperty(key))
				continue;
			dt = document.createElement('dt');
			dd = document.createElement('dd');
			dt.appendChild(document.createTextNode(key));
			dd.appendChild(convertAny(obj[key]));
			dl.appendChild(dt);
			dl.appendChild(dd);
		}
		return dl;
	};
	
	return convertAny;
}();


