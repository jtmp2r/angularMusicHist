var global_base = 50;

function throwaway	 {
	global_base += 500;
}

throwaway();

//IIFE

(function () {
  var _internal_base = 10;
  var _internal_sum = _internal_base + global_base;
  console.log("_internal_sum", _internal_sum);
}());