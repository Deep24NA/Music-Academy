"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BackGroundGrid } from "./ui/backgorund-grid";
import { musicSchoolTestimonials } from "@/data";





function TestimonialCards() {
  return (
    <BackGroundGrid className="h-[40rem]">
      <h2 className="text-3xl font-bold text-center mb-8 z-10"> Hear Our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10">
        <div className="w-full max-w-6xl">
           <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
          />
        </div>
      </div>
    </BackGroundGrid>
  )
}

export default TestimonialCards