import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAnswer() {
    setIsOpen(!isOpen);
  }

        return (

            <div>
                <div className='flex flex-col justify-center items-center mb-10 px-4 w-full dark:text-[#E8E8E8] ' >
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Frequently Asked Question
                    </p>
                    <p className=" text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl">
                        Here are some commonly asked questions to help clarify doubts and make your experience easier.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-4xl">

                        <div className="flex justify-between items-center w-full" onClick={toggleAnswer}>
                            <p className="text-3xl font-bold">
                                What types of drinks do you offer?
                            </p>
                            {isOpen? <ChevronUp/>: <ChevronDown className="cursor-pointer" />}
                            
                        </div>

                        {isOpen && (
                            <p className="text-xl mt-2">
                                We offer wines, spirits, coffee, tea, soft drinks, and carefully curated special beverages.
                            </p>
                        )}

                    </div>
                </div>


            </div>
        )
    }

    export default Question
