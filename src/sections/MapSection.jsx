import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const MapSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col gap-8 mt-0 md:mt-16">
            <h1 className="font-bold md:text-5xl text-3xl text-center" data-aos="fade-right" data-aos-duration='1500' data-aos-delay="500"><span className="text-primary">Lokasi</span> Kami</h1>

            <div className="flex mx-0 md:mx-auto md:mt-5" data-aos="fade-right" data-aos-duration='1500' data-aos-delay="700">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.204177530532!2d107.68800480130105!3d-6.733079031956614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6920469e78d4ad%3A0x7298cab135beed80!2sCibitung%2C%20Ciater%2C%20Subang%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1726297562563!5m2!1sen!2sid" allowfullscreen loading="lazy" className="w-[400px] md:w-[700px] h-[400px] md:h-[700px] shadow-xl rounded-lg"></iframe>
            </div>
        </div>
    )
}

export default MapSection