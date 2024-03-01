<script>
	import { authStore } from '../../stores/authStore.js';
	let email;
	authStore.subscribe((value) => {
		email = value?.currentUser?.email;
	});
</script>

{#if $authStore.currentUser}
	<div>
		<h1>current user: {email}</h1>
	</div>
{:else}
	<div>
		<h1>loading...</h1>
	</div>
{/if}

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
