import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    return (
        <nav className='bg-white shadow-lg fixed top-0 left-0 w-full z-50'>
            <div className='mx-auto px-4 sm:px-5 lg:px-7 py-2'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-end gap-2 md:gap-4'>
                        <img
                            src='/logo-nav.png'
                            width={170}
                        />
                    </div>

                    {/* Navlinks */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <ul className='flex justify-center items-center gap-10'>
                                <li className='text-primary px-3 py-2 duration-200 ease-in hover:bg-primary hover:text-white rounded-md'><a href='/'>Beranda</a></li>
                                <li className='text-primary px-3 py-2 duration-200 ease-in hover:bg-primary hover:text-white rounded-md'><a href='/gallery'>Galeri</a></li>
                                <li className='text-primary px-3 py-2 duration-200 ease-in hover:bg-primary hover:text-white rounded-md'><a href='/logbook'>logbook</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Hamburger */}
                    <div className='mr-[2px] flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-primary text-xl hover:text-tertiary  focus:outline-none ring-2 focus-within:ring-offset-1 focus:ring-offset-primary ease-in-out duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <ul className='flex flex-col justify-center items-center gap-4'>
                                <li className='text-primary block px-3 py-2 rounded-md text-base duration-500 ease-in-out hover:bg-primary hover:text-white hover:font-medium w-full text-center'><a href=' /'>Beranda</a></li>
                                <li className='text-primary block px-3 py-2 rounded-md text-base duration-500 ease-in-out hover:bg-primary hover:text-white hover:font-medium w-full text-center'><a href='/gallery'>Galeri</a></li>
                                <li className='text-primary block px-3 py-2 rounded-md text-base duration-500 ease-in-out hover:bg-primary hover:text-white hover:font-medium w-full text-center'><a href='/logbook'>logbook</a></li>
                            </ul>
                        </div>
                    </div >
                )
            }
        </nav >
    )
}

export default Navbar