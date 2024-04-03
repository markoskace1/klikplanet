<script>
	import { clickOutside, handleClick, navLinks } from '../utils';
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<div
	transition:slide={{ axis: 'x', duration: 300, easing: expoInOut }}
	use:clickOutside
	on:click_outside={handleClick}
	class="pr-28 fixed flex top-0 -right-16 h-full w-full max-w-sm md:max-w-lg lg:max-w-xl items-center bg-slate-900/90 shadow-xl shadow-slate-200 -skew-x-6 z-20"
>
	<ul
		class="text-4xl md:text-5xl lg:text-6xl skew-x-6 space-y-10 lowercase w-full text-right flex flex-col items-end leading-9 lg:leading-7"
	>
		<button
			on:click={handleClick}
			class="hover:scale-125 hover:text-lime-300 hover:rotate-90 transition duration-200 ease-in-out"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		{#each $navLinks as link}
			<li class="hover:-translate-x-4 transition duration-200 ease-in-out hover:text-lime-300">
				<a
					data-sveltekit-preload-data
					href={link.href}
					on:click={handleClick}
					class="font-logo uppercase">{link.name}</a
				>
			</li>
		{/each}
	</ul>
</div>
