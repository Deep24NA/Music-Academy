"use client"
import React from 'react'
import ButtonResuable from './ui/ButtonResuable'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';
import { featuredWebinars } from '@/data';




function UpcomingWebinar() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINAR</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featuredWebinars.map((card) => (
                    {
                        title: card.title,
                        description: card.description,
                        link: card.slug,
        
                    }
                ))}/>
            </div>
            <div className='mt-10 text-center'>
                <Link href={"/"}>
                <ButtonResuable children={"view all webinar"}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar