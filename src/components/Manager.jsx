import { React, useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Manager() {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("password")
        if (password) {
            setPasswordArray(JSON.parse(password));
        }

    }, [])

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "icons/eyecross.png";
            passwordRef.current.type = "password"
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form]);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />

            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className=" mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>

                <p className='text-green-900 text-lg text-center'>You own password manager</p>

                <div className="flex flex-col p-4 text-black gap-3 items-center">

                    <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Password" className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />
                            <span className="absolute right-0 top-1 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className="p-1" width={35} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full gap-2 px-6 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon> Add Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="py-2">Site</th>
                                <th className="py-2">UserName</th>
                                <th className="py-2">Passwords</th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-100">
                            {passwordArray.map((items, index) => {
                                return <tr key={index}>
                                    <td className="py-2 border border-white text-center ">
                                        <div className="flex items-center justify-center">
                                            <a href={items.site} target="_blank">
                                                <span>{items.site}</span></a>
                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(items.site) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px", "paddingTop": "4px", "paddingLeft": "4px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white text-center ">
                                        <div className="flex items-center justify-center">
                                            <span>{items.username}</span>
                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(items.username) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px", "paddingTop": "4px", "paddingLeft": "4px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white text-center ">
                                        <div className="flex items-center justify-center">
                                            <span>{items.password}</span>
                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(items.password) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px", "paddingTop": "4px", "paddingLeft": "4px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager