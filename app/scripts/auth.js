/* global Firebase */

require('firebase/auth');

export function init() {
	const provider = new Firebase.auth.GoogleAuthProvider();

	Firebase.auth().signInWithPopup(provider)
		.then((res) => {
			const { credential: { accessToken }, user } = res;
			console.log(accessToken, user);
		})
		.catch((err) => {
			const { code, message, email, credential } = err;
			console.log(code, message, email, credential);
		});
}
