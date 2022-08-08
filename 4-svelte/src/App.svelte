<script>
import { onMount } from "svelte";

let todos = []
let todoText = ''

onMount(() => {
	const existingTodos = JSON.parse(localStorage.getItem("todos"))
	todos = existingTodos || []
})

function addTodo() {
	todos = [todoText, ...todos]
	localStorage.setItem("todos", JSON.stringify(todos))
	todoText = ''
}
</script>

<main>
	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>

	<form on:submit|preventDefault={addTodo}>
		<input bind:value={todoText} />
		<input type="submit" value="Add todo" />
	</form>
</main>

<style></style>