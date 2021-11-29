<script lang="ts">
	import { onMount } from 'svelte';
	import { getCardsListUseCase, readOwnedCardsUseCase, toggleCardOwnershipUseCase } from './application/card-use-cases';
	import type ICard from './domains/Card/Card';
	import Table from './ui/atoms/Table.svelte';

	let cards: ICard[] = [];
	let loading: boolean = false;

	onMount(() => {
		loading = true;
		getCardsListUseCase()
		.then(cardsResponse => {
			cards = cardsResponse;
			loading = false;
		})
	})

	const toggleOwnedCheckbox = (id) => (e) => {
		cards = toggleCardOwnershipUseCase(cards, id);
		const checked = e.target.checked
		setTimeout(() => e.target.checked = checked, 0)
	}

	function saveOwnedCards(){
		console.log(readOwnedCardsUseCase(cards));
	}
</script>

<main>
	<div>
		<h1>Cards number: {cards.length}</h1>
	</div>
	<div>
		<button on:click={saveOwnedCards}>save owned cards</button>
	</div>
	<div class='cards'>
		{#if loading}
			<div>...loading</div>
		{:else}
			<Table fullWidth>
				<thead>
					<tr>
						<th>Nr</th>
						<th></th>
						<th>Name</th>
						<th>owned</th>
					</tr>
				</thead>
				<tbody>
					{#each cards as card (card.id)}
						<tr>
							<td>{card.id}</td>
							<td>
								<img src={card.iconUrl} alt={card.name} />
							</td>
							<td>{card.name}</td>
							<td><input type=checkbox on:click|preventDefault={toggleOwnedCheckbox(card.id)} /></td>
						</tr>
					{/each}
				</tbody>
			</Table>
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