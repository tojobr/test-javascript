/**
 * check if the two words are twins
 * each character of first word exists on second word
 * @param {string} a 
 * @param {string} b 
 * @returns {boolean}
 */
function isTwin(a, b) {
	a = a.toLowerCase();
	b = b.toLowerCase();

	const indexes = [];
	for (let i = 0; i < a.length; i++) {
		const c = a.charAt(i);
		let index = b.indexOf(c);
		if (index >= 0) {
			b = b.replace(c, '$');
		}
		indexes[i] = index;
	}

	return indexes.every(i => i >= 0);
}

console.log(isTwin('Hello', 'World'));
console.log(isTwin('abc', 'bAc'));
console.log(isTwin('uOtlook', 'Lookout'));
