<script>
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { authStore } from '../stores/authStore.js';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return {
					...curr,
					currentUser: user,
					loading: false
				};
			});
		});
	});
</script>

<main class="mainContainer">
	<slot />
</main>

<style>
	.mainContainer {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
