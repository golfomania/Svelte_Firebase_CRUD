<script>
	let register = true;
	let email = '';
	let password = '';
	let confirmPassword = '';
</script>

<div class="container">
	<h1>{register ? 'Sign up' : 'Sign in'}</h1>
	<form action="">
		<label for="">
			<input bind:value={email} type="text" placeholder="email" />
		</label>
		<label for="">
			<input bind:value={password} type="password" placeholder="password" />
		</label>
		{#if register}
			<label for="">
				<input bind:value={confirmPassword} type="password" placeholder="confirm password" />
			</label>
		{/if}
		<button type="submit">Sign up</button>
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
