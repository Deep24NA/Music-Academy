"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { musicSchoolContent } from "@/data";



function WhyChooseAs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseAs