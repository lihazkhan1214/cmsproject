"use client";


import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import cardimg1 from "../assets/moveimg1.png";
import cardimg2 from "../assets/moveimg2.png";
import cardimg3 from "../assets/moveimg3.png";

export function CardMoving() {
  return (
    <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
   img:cardimg1
  },
  {
    img:cardimg2
   }, {
    img:cardimg3
   }, {
    img:cardimg1
   }, {
    img:cardimg3
   }, {
    img:cardimg2
   }, {
    img:cardimg1
   }, {
    img:cardimg2
   },
 
];
