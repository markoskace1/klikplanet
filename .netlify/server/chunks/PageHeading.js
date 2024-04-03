import { c as create_ssr_component, d as escape } from "./ssr.js";
const PageHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageName } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  return `<div class="prose prose-h1:text-slate-900 prose-h1:mb-0 relative flex flex-col justify-center items-center uppercase py-4 -skew-x-12"><h1 class="font-logo skew-x-12">${escape(pageName)}</h1> <div class="absolute right-0 sm:right-1/4 top-0 from-teal-500 to-violet-700 bg-gradient-to-l w-screen h-full -z-20"></div></div>`;
});
export {
  PageHeading as P
};
