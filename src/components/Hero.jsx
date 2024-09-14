const Hero = () => {
    return (
        <div className="w-full max-h-screen">
            <div className="relative">
                <img
                    src="/Hero.png"
                    alt="hero image"
                    className="top-0 left-0 w-screen h-screen object-cover"
                />

                <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />

                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white mt-0 md:mt-12'>
                    <div className='md:left-[5%] max-w-screen mx-auto absolute p-4 z-40 flex items-center flex-col-reverse md:flex-row gap-12 md:gap-0 mt-10 sm:mt-0'>
                        <div className="flex flex-col justify-center items-start">
                            <h1 className='font-bold text-2xl md:text-4xl lg:text-6xl drop-shadow-2xl text-center md:text-left'>
                                Selamat Datang di <br /> Website KKN 410 Cibitung <br /> UIN Sunan Gunung Djati Bandung
                            </h1>
                        </div>
                        <div className="flex justify-center items-center ml-0 md:ml-72 lg:ml-52">
                            <img
                                src="/Logo.png"
                                className="w-[190px] sm:w-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero