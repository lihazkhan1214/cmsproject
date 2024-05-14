"use client";


import { InfiniteMoveservice } from "./ui/InfiniteMoveservice";

export function MoveService2() {
  return (
    <div className=" rounded-md pb-5 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMoveservice
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
   title:"App Design"
  },
  {
    title:"Website Design"
   }, {
    title:"Digital Marketing"
   }, {
    title:"Seo"
   }, {
    title:"Web Development"
   }, {
    title:"App Development"
   }, {
    title:"Content Writting"
   }, {
    title:"On Page Seo"
   },
   {
    title:"Off Page Seo"
   },
 
];
