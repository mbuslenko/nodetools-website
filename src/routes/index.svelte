<script context="module">
	import { dev } from '$app/env';

	export const hydrate = dev;
	export const router = false;
</script>

<script>
	import '../app.css';
	import card from '$lib/idea-banner.png';
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';

	/** @type {string} */
	export let version;

	/** @type {string} */
	export let currentStage;
</script>

<svelte:head>
	<title>Nodetools</title>
	<meta name="description" content="Desktop application that does all the routine work for you" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@NodetoolsApp" />
	<meta name="twitter:creator" content="@NodetoolsApp" />
	<meta name="twitter:title" content="Nodetools" />
	<meta name="twitter:description" content="Desktop application that does all the routine work for you" />
	<meta name="twitter:image" content="{$page.url.origin}{card}" />
	<meta name="twitter:image:alt" content="Banner" />
</svelte:head>

<Card />

<main>
	<div class="title">
		<h1><span>Your personal <br /> all-hands assistant</span></h1>
		<p><span>Will be available soon</span></p>
	</div>

	<div class="info">
		<div class="block">
			<div class="contents">
				<span>Current release</span>
				<strong>{version}</strong>
			</div>
		</div>
		<div class="block">
			<div class="contents">
				<span>Current stage</span>
				<strong class="blue">{currentStage}</strong>
			</div>
		</div>
	</div>
</main>

<Footer />

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100%;
		padding: 2.5rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-height: 100vh;
		position: absolute;
		bottom: 10vh;
		left: 50%;
		transform: translateX(-50%);
	}
	
	p {
		color:#7E8BB6
	}

	.blue {
		background: linear-gradient(270deg, #0058f7 38.2%, #467ee3 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	h1 {
		font-size: min(16vw, 4rem);
		font-weight: 600;
		margin: 0;
		text-align: center;
		width: 100%;
		padding: 0 2.5rem;
		box-sizing: border-box;
		line-height: 1;
	}

	.contents {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 span {
		display: block;
		max-width: 6em;
		margin: 0 auto;
	}

	.info {
		--border-color: rgba(0, 0, 0, 0.08);
		position: absolute;
		bottom: 9rem;
		left: 0;
		width: 100%;
		display: grid;
		padding: 0 2.5rem;
		font-size: min(5vw, 2rem);
		box-sizing: border-box;
	}

	.block {
		display: flex;
		margin: 0;
		padding: 1rem 0;
	}

	.block:nth-child(1) {
		border-bottom: 1px solid var(--border-color);
	}

	.block span {
		display: block;
		margin: 0 0 0.2em 0;
		text-transform: uppercase;
		font-size: 0.6em;
		text-align: center;
	}

	.block strong {
		display: block;
		font-size: 1.4em;
		margin: 0;
		font-weight: 600;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: min(8vw, 4rem);
		}

		h1 span {
			max-width: none;
		}

		.info {
			display: flex;
			justify-content: center;
			position: relative;
			top: 60vh;
			gap: 4rem;
			grid-template-columns: 1fr 1fr;
		}

		.block:nth-child(1) {
			border-bottom: none;
			justify-content: end;
		}

		.block:nth-child(2) {
			justify-content: start;
		}
	}

	@media (prefers-color-scheme: dark) {
		.block:nth-child(1) {
			--border-color: rgba(255, 255, 255, 0.35);
		}
	}
</style>
