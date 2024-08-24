
function Navbar() {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
                <div className='logo font-bold text-2xl'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href='#'>Home</a>
                        <a className='hover:font-bold' href='#'>About Us</a>
                        <a className='hover:font-bold' href='#'>Contact Us</a>
                    </li>
                </ul> */}
                <button className="text-white bg-green-700 my-5 rounded-full flex gap-2 justify-between items-center">
                    <img className="invert w-8 p-1" src="/icons/github.png" alt="Github Logo" />
                    <span className="font-bold px-1">Github</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar