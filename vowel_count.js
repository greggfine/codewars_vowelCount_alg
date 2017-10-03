function vowelCount(str) {
	var vowelsCount = 0;

	let vowels = 'aeiou';

	for (var i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelsCount++
		}
	}

	return vowelsCount;
}



console.log(vowelCount('pear tree'));







// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.