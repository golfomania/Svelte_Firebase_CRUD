<script>
	import { onMount } from 'svelte';
	import { auth, db } from '../lib/firebase/firebase.js';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import { get } from 'svelte/store';

	const nonAuthRoutes = ['/', '/product'];
	onMount(() => {
		console.log('layout mounted');
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && !nonAuthRoutes.includes(currentPath)) {
				window.location.href = '/';
				return;
			}

			if (user && currentPath === '/') {
				window.location.href = '/dashboard';
				return;
			}

			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) {
				userRef = doc(db, 'users', user.uid);
				await setDoc(
					userRef,
					{
						email: user.email,
						todos: []
					},
					{ merge: true }
				);
				return;
			}
		});
	});
</script>

<div class="mainContainer">
	<slot />
</div>

<style>
	.mainContainer {
		min-height: 100vh;
		background: linear-gradient(to right, #000428, #000046);
		color: white;
		position: relative;
		display: flex;
		flex-direction: column;
	}
</style>
