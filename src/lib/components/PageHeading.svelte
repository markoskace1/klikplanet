<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let pageName: string;
</script>

<div
	in:fly={{ x: -1500, duration: 500, delay: 200, easing: cubicOut }}
	class="prose prose-h1:text-slate-900 prose-h1:mb-0 relative flex flex-col justify-center items-center uppercase py-4 -skew-x-12"
>
	<h1 class="font-logo skew-x-12">{pageName}</h1>
	<div
		class="absolute right-0 sm:right-1/4 top-0 from-teal-500 to-violet-700 bg-gradient-to-l w-screen h-full -z-20"
	/>
</div>
