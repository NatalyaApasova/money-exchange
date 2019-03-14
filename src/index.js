module.exports = function makeExchange(currency) {
    if (currency <= 0 ) {
    	return {};
    }
    if (currency >= 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let value;
    let coins = {
		'H':50,
		'Q':25,
		'D':10,
		'N':5,
		'P':1
    }
    let result = {};
    for (let key in coins) {
    	if (currency >= coins[key]) {
    		result[key] = Math.floor(currency / coins[key]);
			currency = currency - result[key]*coins[key];
    	} else {
    		continue
    	}
	}
	return result;
}
