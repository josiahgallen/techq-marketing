/* global Firebase */
require('firebase/database');

export function init() {
	Firebase.database();
}

// const database = Firebase.database();
export function saveContactInfo(fName, lName, email, number, company, message) {
	const today = new Date();
	Firebase.database().ref(`contacts/${today.toDateString()}/${lName}, ${fName} `).set({
		fName,
		lName,
		email,
		number,
		company,
		message,
		dateSubmitted: today.toString()
	});
}
