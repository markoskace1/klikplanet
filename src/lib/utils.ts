import { writable } from 'svelte/store';

// NAVIGATION LINKS

export const navLinks = writable([
	{ name: 'Storitve', href: '/storitve' },
	{
		name: 'Cenik',
		href: '/cenik'
	},
	{
		name: 'FAQ',
		href: '/faq'
	},

	{
		name: 'Kontakt',
		href: '/kontakt'
	}
]);

// ISOPEN

export const isOpen = writable(false);

export const handleClick = () => {
	isOpen.update((value) => !value);
};

// CLICK OUTSIDE

export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
