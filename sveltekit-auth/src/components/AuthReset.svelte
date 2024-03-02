<script>
	import { authHandlers, authStore } from '../stores/authStore.js';

	let action = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	const handleSubmit = async (e) => {
		e.preventDefault();

		// form validation
		if (!email || !password) return alert('Please fill in all fields');

		if (register && password !== confirmPassword) {
			alert('Passwords do not match');
			confirmPassword = '';
			return;
		}

		// register logic
		if (register && confirmPassword === password) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			// login logic
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}

		// reroute on login
		if ($authStore.currentUser) {
			// navigate to privatedashboard
			window.location.href = '/privatedashboard';
		}
	};
</script>

<div class="container">
	<div>
		<button on:click={() => (action = 'updateEmail')}>Update E-Mail</button>
		<button>Update Password</button>
	</div>
	{#if action === 'updatePass'}
		<form action="">
			<label for="">
				<input bind:value={email} type="email" placeholder="email" />
			</label>
			<label for="">
				<input bind:value={password} type="password" placeholder="password" />
			</label>
		</form>
	{/if}

	{#if action === 'updateEmail'}
		<form action="">
			<label for="">
				<input bind:value={email} type="email" placeholder="email" />
			</label>
			<label for="">
				<input bind:value={password} type="password" placeholder="password" />
			</label>
		</form>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.container div {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.container form {
		display: flex;
		flex-direction: column;
	}

	.container form label input {
		width: 100%;
	}

	.switchHintText {
		margin-top: 3rem;
	}
</style>
