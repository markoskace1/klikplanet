<script lang="ts">
	import klikPlanetLogo from '$lib/images/logo-klik-lime.png';
	import Sidebar from './Sidebar.svelte';
	import { handleClick, isOpen, navLinks } from '$lib/utils';
</script>

<!-- NAVIGATION BAR -->
<header class="flex mb-16 lg:mb-0 px-4 py-4 md:py-6 z-20 bg-transparent">
	<nav class="flex flex-col container mx-auto">
		<div class="flex flex-row justify-between">
			<a
				href="/"
				class="flex font-logo text-2xl sm:text-3xl md:text-4xl text-lime-500 uppercase gap-2"
				><img
					src={klikPlanetLogo}
					alt="logo"
					width="50px"
					height="50px"
					class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
				/>klikr.net
			</a>

			<button type="button" name="menu button" on:click|preventDefault={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="rgb(190 242 100)"
					class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>

			<!-- <div
				class="prose prose-a:text-green-500 prose-a:no-underline prose-li:list-none prose-li:pl-0 prose-a:font-logo uppercase hidden xl:flex"
			>
				<ul class="flex items-center space-x-10">
					{#each $navLinks as link}
						<li
							class="relative before:bg-green-500 before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-sm before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:hover:origin-left before:hover:scale-x-100"
						>
							<a data-sveltekit-preload-data href={link.href}>{link.name}</a>
						</li>
					{/each}
				</ul>
			</div> -->
		</div>

		<!-- SIDE OPEN -->
		{#if $isOpen}
			<Sidebar />
		{/if}
	</nav>
</header>
