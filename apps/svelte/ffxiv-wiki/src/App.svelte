<script lang="ts">
	import { onMount } from 'svelte';
	import { getCardsList } from './application/usecase-get-cards-list';
	import type ICard from './domains/Card/ICard';

	let cards: ICard[] = [];
	let loading: boolean = false;
	onMount(() => {
		loading = true;
		getCardsList()
		.then(cardsResponse => {
			cards = cardsResponse;
			loading = false;
		})
	})
</script>

<main>
	<div>
		<h1>Cards number: {cards.length}</h1>
	</div>
	<div class='cards'>
		{#if loading}
			<div>...loading</div>
		{:else}
			{#each cards as card (card.id)}
				<div>
					{card.name}
				</div>
			{/each}
		{/if}
	</div>
</main>

<style lang="less">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		div {
			color: red;
		}
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	div.cards {
		display: flex;
		flex-wrap: wrap;
		div {
			width:100%;
		}
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>