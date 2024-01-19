<script>
	import { onMount } from 'svelte';
	import { auth, db } from '../lib/firebase/firebase.js';

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
