import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const Question = () => {

    const faqs = [
        {
            question: "What types of drinks do you offer?",
            answer:
                "We offer a wide selection of beverages including wines, spirits, coffee, tea, soft drinks, and specialty drinks. Our collection is carefully curated to suit different tastes, occasions, and preferences, ensuring quality and variety in every category."
        },
        {
            question: "Are non-alcoholic drinks available on your website?",
            answer:
                "Yes, we provide a wide range of non-alcoholic options such as coffee, tea, soft drinks, and refreshing beverages. These options are ideal for customers who prefer alcohol-free drinks without compromising on taste or quality."
        },
        {
            question: "How do you ensure the quality of your drinks?",
            answer:
                "We work closely with trusted brands and reliable suppliers to maintain high quality standards. Each drink is selected based on taste, consistency, and overall customer satisfaction."
        },
        {
            question: "Can I order drinks online easily?",
            answer:
                "Our platform is designed to make browsing and selecting drinks simple and convenient. You can explore categories, view details, and choose your favorite beverages with ease."
        },
        {
            question: "Are your drinks suitable for special occasions?",
            answer:
                "Yes, our collection includes drinks perfect for celebrations, gatherings, and special moments. From casual meetups to memorable events, we offer beverages to match every occasion."
        },
        {
            question: "Do you regularly update your drink collection?",
            answer:
                "We regularly refresh our collection by adding new and trending beverages. This helps us offer exciting options while continuing to provide our popular classics."
        },
        {
            question: "Why should I choose your platform for drinks?",
            answer:
                "We focus on quality, variety, and a smooth user experience. Our goal is to make discovering and choosing drinks enjoyable, reliable, and convenient for every customer."
        }
    ];

    const [isOpen, setIsOpen] = useState(null);

    function toggleAnswer(index) {
        setIsOpen(isOpen === index ? null : index);
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-10 px-4 w-full dark:text-[#E8E8E8]'>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    Frequently Asked Question
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl">
                    Here are some commonly asked questions to help clarify doubts and make your experience easier.
                </p>
            </div>

            <div className="flex justify-center items-center mb-10 ">
                <div className="w-full max-w-4xl dark:text-white ">
                    {faqs.map((items, index) => (
                        <div key={index} className={isOpen === index ? 'bg-gray-200 dark:bg-[#1a1a1d] p-2 rounded-sm' : ''}
                             >
                            <div
                                className="flex justify-between items-center w-full cursor-pointer p-2 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-900 "
                                onClick={() => toggleAnswer(index)}>

                                <p className="text-3xl font-bold ">
                                    {items.question}
                                </p>
                                {isOpen === index ? <ChevronUp /> : <ChevronDown />}
                            </div>

                            {isOpen === index && (
                                <p className="text-xl mt-2">
                                    {items.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Question