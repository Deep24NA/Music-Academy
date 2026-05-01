"use client";
import courseData from "@/data/music_courses.json";
import { Button } from "./ui/moving-border";
import ButtonResuable from "./ui/ButtonResuable";
import Link from "next/link";
import { Course } from "@/lib/types";
import { BackgroundGradient } from "./ui/background-gradient";

function FeaturedCourses() {

  const featuredData = courseData.courses.filter((c: Course) => c.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredData.map((c: Course) => (
            <div key={c.id} className="flex justify-center h-full">
              <BackgroundGradient 
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {c.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {c.description}
                  </p>
                  <Link 
                    href={`/course/${c.slug}`}
                    className="mt-6 px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <ButtonResuable children={"Follow for more"} />
        </Link>
      </div>
    </div>

  );
}

export default FeaturedCourses;
