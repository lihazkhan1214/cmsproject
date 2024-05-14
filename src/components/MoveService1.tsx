"use client";


import { InfiniteMoveservice } from "./ui/InfiniteMoveservice";

export function MoveService1() {
  return (
    <div className="py-5 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMoveservice
        items={testimonials}
        direction="right"
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
