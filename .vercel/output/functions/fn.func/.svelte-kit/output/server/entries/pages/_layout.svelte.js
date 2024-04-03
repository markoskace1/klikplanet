import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/client.js";
const klikPlanetLogo = "/_app/immutable/assets/logo-klik-lime.B4JXrUOg.png";
const navLinks = writable([
  { name: "Storitve", href: "/storitve" },
  {
    name: "Cenik",
    href: "/cenik"
  },
  {
    name: "FAQ",
    href: "/faq"
  },
  {
    name: "Kontakt",
    href: "/kontakt"
  }
]);
const isOpen = writable(false);
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navLinks, $$unsubscribe_navLinks;
  $$unsubscribe_navLinks = subscribe(navLinks, (value) => $navLinks = value);
  $$unsubscribe_navLinks();
  return `<div class="pr-28 fixed flex top-0 -right-16 h-full w-full max-w-sm md:max-w-lg lg:max-w-xl items-center bg-slate-900/90 shadow-xl shadow-slate-200 -skew-x-6 z-20"><ul class="text-4xl md:text-5xl lg:text-6xl skew-x-6 space-y-10 lowercase w-full text-right flex flex-col items-end leading-9 lg:leading-7"><button class="hover:scale-125 hover:text-lime-300 hover:rotate-90 transition duration-200 ease-in-out" data-svelte-h="svelte-1m7a5jx"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${each($navLinks, (link) => {
    return `<li class="hover:-translate-x-4 transition duration-200 ease-in-out hover:text-lime-300"><a data-sveltekit-preload-data${add_attribute("href", link.href, 0)} class="font-logo uppercase">${escape(link.name)}</a> </li>`;
  })}</ul></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOpen, $$unsubscribe_isOpen;
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  $$unsubscribe_isOpen();
  return ` <header class="flex mb-16 lg:mb-0 px-4 py-4 md:py-6 z-20 bg-transparent"><nav class="flex flex-col container mx-auto"><div class="flex flex-row justify-between"><a href="/" class="flex font-logo text-2xl sm:text-3xl md:text-4xl text-lime-500 uppercase gap-2" data-svelte-h="svelte-1f90j2b"><img${add_attribute("src", klikPlanetLogo, 0)} alt="logo" width="50px" height="50px" class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9">klikr.net</a> <button type="button" name="menu button" data-svelte-h="svelte-1dzna9u"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="rgb(190 242 100)" class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path></svg></button> </div>  ${$isOpen ? `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}` : ``}</nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navLinks, $$unsubscribe_navLinks;
  $$unsubscribe_navLinks = subscribe(navLinks, (value) => $navLinks = value);
  $$unsubscribe_navLinks();
  return `<footer class="flex from-black to-transparent bg-gradient-to-tl px-6 py-4 md:py-6"><div class="container mx-auto flex flex-col sm:flex-row gap-y-4 justify-between items-center text-xs md:text-sm lg:text-base"><div data-svelte-h="svelte-ojw58m"><p class="text-slate-400">© Klik planet, Mitja s.p.</p></div> <div><ul class="flex justify-between text-slate-400 space-x-10 order-first sm:order-last">${each($navLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="hover:underline hover:text-slate-400">${escape(link.name)}</a></li>`;
  })}</ul></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="px-6">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
