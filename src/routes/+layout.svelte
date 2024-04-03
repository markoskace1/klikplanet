<script lang="ts">
	import '../app.css';
	import '@fontsource/syncopate/700.css';
	import '@fontsource/saira/400.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	export let data;

	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 350);
	});
</script>

<Navbar />
{#key data.url}
	<main
		class="px-6"
		in:fade={{ duration: 300, delay: 200, easing: sineOut }}
		out:fade={{ duration: 300, easing: sineOut }}
	>
		<slot />
	</main>
{/key}
<Footer />
