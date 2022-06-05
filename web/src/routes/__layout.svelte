
<script>
	import '../app.css';

	// import { connected, provider, chainId, chainData, signer, signerAddress, contracts } from 'svelte-ethers-store'

	import { defaultEvmStores, signerAddress } from 'svelte-ethers-store'
</script>
<svelte:head>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>
<div class="bg-white font-sans">
    <nav class="py-2 shadow">
        <div class="container mx-auto flex items-center">
            <div class="w-1/5">
                <!-- <a href="/" class="mr-6"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a> -->
                <a href="/" class="text-red-400 tracking-tight">
                	<i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                	<span class="text-black font-bold tracking-tight">DTube</span>
                </a>
            </div>
            <div class="w-3/5">
                <div class="relative">
                    <input type="text" class="h-8 p-4 text-sm w-full border" placeholder="Search">
                    <span class="flex items-center bg-slate-100 hover:bg-slate-300 absolute right-0 top-0 border px-8 h-full"><i class="fa fa-search text-grey-dark"></i></span>
                </div>
            </div>
            <div class="w-1/5">
                <div class="flex items-center justify-end">
									{#if $signerAddress}
										<a href="#" class="mr-6"><i class="fa fa-upload fa-lg" aria-hidden="true"></i></a>
                    <a href="/channel?id={$signerAddress}">
											{$signerAddress.slice(0,6)}...{$signerAddress.slice(-4)}
                    	<!-- <img class="h-8 w-8 rounded-full" src="https://yt3.ggpht.com/-d4QhdOi4N6c/AAAAAAAAAAI/AAAAAAAAAAA/vpG4T-iVv7w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="avatar"> -->
                    </a>
									{:else}
										<button class="mr-6 p-2 border bg-slate-100 hover:bg-slate-300" on:click={() => { defaultEvmStores.setProvider(); } } >Connect</button>
									{/if}
                </div>
            </div>
        </div>
    </nav>
		
		<slot />
</div>  

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
