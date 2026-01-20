import React from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'

const Container = () => {
    return (
        <div className='flex w-full h-[600px]'>
            <div className='w-1/3'>
                <Left />
            </div>
            <div className='w-1/3'>
                <Center />
            </div>
            <div className='w-1/3'>
                <Right/>
            </div>
        </div>
    )
}

export default Container