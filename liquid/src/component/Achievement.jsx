import React from 'react'
import { ShoppingCart, MapPin, Coffee, Star } from "lucide-react";

const Achievement = () => {
    const achievements = [
        {
            id: 1,
            icon: ShoppingCart,
            title: "Over 10k+ Order Everyday",
            description: "Successfully delivering 10,000+ orders to customers everyday nationwide. Built on consistent quality, dependable service, and long-term customer trust."
        },
        {
            id: 2,
            icon: MapPin,
            title: "Expand across 25+ Cities",
            description: "Proudly serving customers across 25+ cities nationwide. Connecting people through trusted service, quality, and global reach."
        },
        {
            id: 3,
            icon: Coffee,
            title: "Wide Range of Drinks",
            description: "Explore a collection of 1000+ different drinks from around the world. Curated to offer unmatched variety, quality, and authentic taste."
        },
        {
            id: 4,
            icon: Star,
            title: "High Customer Satisfaction Rate",
            description: "Consistently earning high satisfaction ratings from customers worldwide. Driven by quality products, reliable service, and a customer-first approach."
        }
    ];

    return (
        <div className='py-16 px-4 mb-20'>
            <div className='flex flex-col justify-center items-center mb-10'>
                <p className='text-5xl our_story mb-'>What we have earned until now?</p>
                <p className='text_para text-center '>
                    Real growth driven by real people who believe in quality and consistency. Here are our Earnings.
                </p>
            </div>

            <div className='flex flex-wrap gap-6 justify-center max-w-6xl mx-auto '>
                {achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                        <div key={achievement.id} className='flex-1 min-w-[250px] p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                            <div className='mb-4'>
                                <IconComponent className='w-12 h-12 text-gray-600' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mb-2'>{achievement.title}</p>
                                <p className='text-gray-600'>{achievement.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Achievement