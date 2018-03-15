import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { FIREBASE_CONFIG } from './constants.js';

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

export function addRequestEmail(email) {
	return addEmail(email, 'request-access');
}

export function addSubscriptionEmail(email) {
	return addEmail(email, 'subscriptions');
}

function addEmail(email, collection) {
	return db.collection(collection).doc(email).set({
		addedAt: new Date()
	}, { merge: true });
}
