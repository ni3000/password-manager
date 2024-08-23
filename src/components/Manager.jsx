import React from 'react'

function Manager() {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            <div className=" bg-slate-50 mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>

                <p className='text-green-900 text-lg text-center'>You own password manager</p>

                <div className="flex flex-col p-4 text-black gap-3 items-center">

                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                    </div>
                    <button className='flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full px-2 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon> Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager