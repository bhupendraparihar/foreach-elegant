/* @flow */
module.exports = function foreachElegant(list /* :Array<mixed>|{[key:string]:mixed} */, iterator /* :function */, flattenArray /* boolean */) {
	if (Array.isArray(list)) {
		if(flattenArray){
			list = steamrollArray(list);
		}
		for (var index = 0; index < list.length; ++index) {
			var value = list[index];
			if (iterator.call(list, value, index, list) === false) {
				break;
			}
		}
	} else {
		var keys = Object.keys(list);
		for (var _index = 0; _index < keys.length; ++_index) {
			var key = keys[_index];
			var _value = list[key];
			if (iterator.call(list, _value, key, list) === false) {
				break;
			}
		}
	}
	return list;
	
	function steamrollArray(arr) {
		var flatArray = [];

		function  flattenArray( element ){
       	//not an array
       	if( !Array.isArray(element)){
       		flatArray.push( element );
       	}
           //if its an array
           else {
           	element.forEach( flattenArray );
           }
       }

       arr.forEach(flattenArray);
       return flatArray;
   }
};