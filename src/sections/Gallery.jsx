import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col w-full mt-10 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl text-center mt-4 md:mt-10" data-aos='fade-right' data-aos-duration='1500'><span className="text-primary">Galeri</span> KKN</h1>

            <div className="p-5 md:p-10">
                <div className="gap-5 lg:gap-8 columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8" data-aos='fade-up' data-aos-duration='1300'>
                    <img src="/slide-1.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-2.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-3.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-4.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-5.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-6.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-7.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-8.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-10.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-11.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-12.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-13.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-14.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-15.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-16.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-17.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-18.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-19.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-20.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-21.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-22.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-23.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-24.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-25.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-26.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-27.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-28.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-29.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-30.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-31.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-32.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-33.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-34.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-35.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-36.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-37.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-38.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-39.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-40.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-41.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-42.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-43.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-44.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-45.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-46.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-47.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-48.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-49.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/slide-50.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Gallery