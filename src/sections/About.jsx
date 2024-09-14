import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const slides = [
        {
            url: '/slide-1.jpg'
        },
        {
            url: '/slide-2.jpg'
        },
        {
            url: '/slide-3.jpg'
        },
        {
            url: '/slide-4.jpg'
        },
        {
            url: '/slide-5.jpg'
        },
        {
            url: '/slide-6.jpg'
        },
        {
            url: '/slide-7.jpg'
        },
        {
            url: '/slide-8.jpg'
        },
        {
            url: '/slide-9.jpg'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-14 md:gap-40">
            <div className="flex flex-col gap-3 max-w-[800px] ">
                <h1 className="font-bold md:text-5xl text-3xl text-center md:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-primary">Tentang</span> Kami</h1>
                <p className="font-light lg:text-lg mt-2" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                    KKN Sisdamas 410 Cibitung, sebuah program dari UIN Sunan Gunung Djati Bandung, menghadirkan 14 mahasiswa penuh semangat dari beragam disiplin ilmu. Selama 35 hari, kami berkomitmen untuk berkolaborasi dengan masyarakat Cibitung terkhusus Dusun Sukanagara dalam mewujudkan desa yang lebih sejahtera. Dengan beragam latar belakang keilmuan, kami siap menyumbangkan pengetahuan dan keterampilan untuk memecahkan berbagai tantangan yang dihadapi desa. Lebih dari itu kami memiliki slogan &quot;Sekecil apapun kontribusinya, kehadiran kami harus dirasakan masyarakat&quot;. Kalimat itulah yang memotivasi kami untuk mengabdi sepenuh hati.
                </p>
            </div>
            <div className="max-w-[900px] h-[220px] md:h-[500px] w-full mx-auto relative group shadow-2xl" data-aos='fade-down' data-aos-duration='1500'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-xl bg-cover bg-center object-contain duration-700">
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-lg md:text-xl cursor-pointer">
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About