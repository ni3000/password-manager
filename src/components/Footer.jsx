import React from 'react'

function Footer() {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
            <div className='logo font-bold text-2xl'>
                <span className='text-green-700'>&lt;</span>
                <span>Pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </div>
            <div>
                Password Manager by ni3000
            </div>
        </div>
    )
}

export default Footer