<script>
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/auth.js';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				console.log('User is signed in');
			} else {
				console.log('User is signed out');
			}
		});
	});
</script>

<slot />
