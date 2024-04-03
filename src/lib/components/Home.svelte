<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import Typed from 'typed.js';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	let firstLoad: boolean = false;

	onMount(() => {
		firstLoad = true;
		setTimeout(() => {
			new Typed('#typed', {
				strings: ['hitrih', 'varnih', 'lepih', 'SEO &#10084;'],
				typeSpeed: 40,
				backSpeed: 20,
				backDelay: 1500,
				showCursor: false,
				loop: true
			});
		}, 500);
	});
</script>

<section
	class="flex flex-col lg:flex-row items-center container mx-auto h-screen mb-10 sm:mb-32 md:mb-44 lg:mb-2 lg:-mt-16"
>
	{#if firstLoad}
		<!-- Hero Text with Links-->
		<div
			in:fly={{ x: -200, duration: 700, easing: expoOut }}
			class="prose max-w-none prose-sm md:prose-base prose-h1:m-0 xl:prose-lg prose-headings:text-slate-200 prose-a:text-slate-200 prose-a:no-underline flex flex-col items-center lg:items-start space-y-8 w-full"
		>
			<h1 class="font-logo uppercase text-center md:text-left">
				Izdelava<br class="md:hidden" />
				<span
					id="typed"
					class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500"
				/><br /> spletnih strani
			</h1>
			<h3 class="pb-6 text-center md:text-left">Vrhunske spletne rešitve za nepozabne vtise</h3>

			<div class="flex items-center space-x-12">
				<a
					data-sveltekit-preload-data
					href="/storitve"
					class="border-2 font-semibold px-7 py-2 lg:px-9 lg:py-3 hover:bg-lime-500 hover:text-slate-950 hover:border-lime-500 transition duration-200 ease-in-out"
					>Storitve</a
				>
				<div class="group flex space-x-2 items-center transition duration-200 ease-in-out">
					<a
						data-sveltekit-preload-data
						href="/cenik"
						class=" font-semibold group-hover:text-lime-500 transition duration-200 ease-in-out"
						>Kontakt</a
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="5"
						stroke="currentColor"
						class="w-4 h-4 text-slate-200 group-hover:translate-x-2 group-hover:text-lime-500 hover:text-lime-500 transition duration-200 ease-in-out"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</div>
		</div>
	{/if}
</section>
