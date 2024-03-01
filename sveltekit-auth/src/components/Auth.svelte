<script>
	import { authHandlers, authStore } from '../stores/authStore.js';

	let register = true;
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
	<h1>{register ? 'Sign up' : 'Sign in'}</h1>
	<form action="">
		<label for="">
			<input bind:value={email} type="email" placeholder="email" />
		</label>
		<label for="">
			<input bind:value={password} type="password" placeholder="password" />
		</label>
		{#if register}
			<label for="">
				<input bind:value={confirmPassword} type="password" placeholder="confirm password" />
			</label>
		{/if}
		<button type="submit" on:click={handleSubmit}>Sign up</button>
		<p class="switchHintText">{register ? 'Already have an account?' : "Don't have an account?"}</p>
		<button type="button" on:click={() => (register = !register)}>
			{register ? 'I want to sign in' : ' I want to sign up'}
		</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
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
