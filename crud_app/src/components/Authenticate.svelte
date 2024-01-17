<div class="authContainer">
	<form>
		<h1>Login</h1>
		<label for="">
			<input type="email" placeholder="E-Mail" />
		</label>
		<label for="">
			<input type="password" placeholder="Password" />
		</label><label for="">
			<input type="password" placeholder="Confirm Password" />
		</label>
		<button type="button">Submit</button>
	</form>
</div>

<style>
	.authContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 24px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 400px;
		max-width: 100%;
		margin: 0 auto;
	}

	form input {
		width: 100%;
		padding: 14px;
		border-radius: 4px;
		border: none;
		background: transparent;
		color: white;
	}
	form input:focus {
		outline: none;
	}

	form label {
		position: relative;
		border: 1px solid darkblue;
		border-radius: 5px;
	}

	h1 {
		text-align: center;
		font-size: 3rem;
	}

	button {
		background: darkblue;
		color: white;
		border: none;
		border-radius: 5px;
		padding: 10px 0px;
		margin-top: 10px;
		cursor: pointer;
		font-size: 1rem;
	}
	form button:hover {
		background: blue;
	}
</style>
