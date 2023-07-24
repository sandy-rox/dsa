function cntDisPairs(arr,N , K) {
	var cntPairs = 0;
	arr.sort();
	var i = 0;
	var j = N - 1;
	
	while (i < j) {
		if (arr[i] + arr[j] == K) {
		  console.log(arr[i] +','+ arr[j])
			while (i < j && arr[i] == arr[i + 1]) {
				i++;
			}
			while (i < j && arr[j] == arr[j - 1]) {
				j--;
			}
			cntPairs += 1;
			i++;
			j--;
		}
		else if (arr[i] + arr[j] < K) {
			i++;
		}
		else {
			j--;
		}
	}
	return cntPairs;
}
var arr = [ 5, 6, 5, 7, 7, 8 ];
var N = arr.length;
var K = 13;
console.log(cntDisPairs(arr, N, K));
