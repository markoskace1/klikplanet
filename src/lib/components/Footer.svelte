<script>
	import { navLinks } from '$lib/utils';
</script>

<footer class="flex from-black to-transparent bg-gradient-to-tl px-6 py-4 md:py-6">
	<div
		class="container mx-auto flex flex-col sm:flex-row gap-y-4 justify-between items-center text-xs md:text-sm lg:text-base"
	>
		<div>
			<p class="text-slate-400">&copy; Klik planet, Mitja s.p.</p>
		</div>

		<div>
			<ul class="flex justify-between text-slate-400 space-x-10 order-first sm:order-last">
				{#each $navLinks as link}
					<li><a href={link.href} class="hover:underline hover:text-slate-400">{link.name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
