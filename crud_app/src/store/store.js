import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { writeable } from 'svelte/store';
import { auth } from '../lib/firebase/firebase';

export const authStore = writeable({
	user: null,
	loading: true,
	data: {}
});

export const authHandlers = {
	signup: async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
	},
	login: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	logout: async () => {
		await signOut(auth);
	}
};
