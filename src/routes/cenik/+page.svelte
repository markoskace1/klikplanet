<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
</script>

<section
	class="prose max-w-none prose-sm lg:prose-base prose-ul:text-slate-200 prose-h1:m-0 prose-h2:text-lime-300 prose-p:mb-0 prose-h2:my-6 prose-h2:font-headings prose-a:text-slate-300 prose-p:text-slate-200 flex flex-col justify-center mt-24 mb-48 h-full"
>
	<!-- HEADING -->
	<PageHeading pageName="Cenik" />

	<!-- PRICING TABLE -->
	<div class="grid md:grid-cols-3 mx-auto mt-32 w-full max-w-sm md:max-w-6xl px-4">
		<!-- Osnovni paket -->
		<div class="flex flex-col items-center border-2 border-slate-500 rounded-lg">
			<div class="flex flex-col items-center">
				<h2>Začetni</h2>
				<p class="text-3xl font-semibold">od 490 €</p>
				<span class="text-slate-500">+DDV</span>
			</div>

			<ul class="border-t-2 border-slate-500 w-2/3">
				<li>do 5 strani</li>
				<li>1 kontaktni obrazec</li>
				<li>SEO optimizacija</li>
				<li>GDPR piškotki</li>
				<li>Google zemljevidi</li>
			</ul>
		</div>

		<!-- Standard paket -->
		<div class="flex flex-col items-center border-2 scale-110 bg-black border-lime-300 rounded-lg">
			<div class="flex flex-col items-center">
				<h2>Standard</h2>
				<p class="text-3xl font-semibold">od 990 €</p>
				<span class="text-slate-500">+DDV</span>
			</div>

			<ul class="border-t-2 border-slate-500 w-2/3">
				<li>do 10 podstrani</li>
				<li>do 3 kontaktni obrazci</li>
				<li>SEO optimizacija</li>
				<li>GDPR piškotki</li>
				<li>Google zemljevidi</li>
				<li>Google analytics</li>
			</ul>
		</div>

		<!-- Napredni paket -->
		<div class="flex flex-col items-center border-2 border-slate-500 rounded-lg bg-black">
			<div class="flex flex-col items-center">
				<h2>Napredni</h2>
				<p class="text-3xl font-semibold">od 1490 €</p>
				<span class="text-slate-500">+DDV</span>
			</div>

			<ul class="border-t-2 border-slate-500 w-2/3">
				<li>do 20 podstrani</li>
				<li>do 5 kontaktnih obrazcev</li>
				<li>SEO optimizacija</li>
				<li>GDPR piškotki</li>
				<li>Google zemljevidi</li>
				<li>Google analytics</li>
			</ul>
		</div>
	</div>
</section>
