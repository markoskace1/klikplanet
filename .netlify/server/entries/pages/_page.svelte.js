import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "typed.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col lg:flex-row items-center container mx-auto h-screen mb-10 sm:mb-32 md:mb-44 lg:mb-2 lg:-mt-16">${``}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
