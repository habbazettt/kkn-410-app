import Card from "../components/Card"
import Navbar from "../components/Navbar"

const mahasiswa = [
    {
        id: 1,
        img: '/profile/fasya.jpg',
        name: 'Muhammad Alif Fasya',
        status: 'Ketua',
        jurusan: 'Bahasa dan Sastra Arab',
        nim: '1215020119',
        blogspot: 'https://logbook1215020119.blogspot.com'
    },
    {
        id: 2,
        img: '/profile/habbaza.JPG',
        name: 'Hubbal Kholiq Habbaza',
        status: 'Sekretaris',
        jurusan: 'Teknik Informatika',
        nim: '1217050066',
        blogspot: 'https://logbook1217050066.blogspot.com/'
    },
    {
        id: 3,
        img: '/profile/cindy.jpg',
        name: 'Cindy Mutiara Sari',
        status: 'Bendahara',
        jurusan: 'Pendidikan Matematika',
        nim: '1212050040',
        blogspot: 'https://logbook1212050040.blogspot.com/'
    },
    {
        id: 4,
        img: '/profile/ridwan.jpg',
        name: 'Sidik Saipul Ridwan',
        status: 'Divisi Acara',
        jurusan: "Ilmu Al-Qur'an dan Tafsir",
        nim: '1211030202',
        blogspot: 'https://logbook1211030202.blogspot.com/'
    },
    {
        id: 5,
        img: '/profile/abel.jpg',
        name: 'Abelinda Zachra Finarsha',
        status: 'Divisi Acara',
        jurusan: 'Pendidikan Matematika',
        nim: '1212050040',
        blogspot: 'https://logbook1219240002.blogspot.com/'
    },
    {
        id: 6,
        img: '/profile/tanti.jpg',
        name: 'Nurpauziah Ramadanti',
        status: 'Divisi Acara',
        jurusan: 'Pendidikan Guru Madrasah Ibtidaiyah',
        nim: '1212090125',
        blogspot: 'https://logbook1212090125.blogspot.com/'
    },
    {
        id: 7,
        img: '/profile/ipey.JPG',
        name: "Muhammad Rifa'I Misbah",
        status: 'Divisi Logistik',
        jurusan: 'Manajemen Pendidikan Islam',
        nim: '1212010107',
        blogspot: 'https://logbook1212010107.blogspot.com/'
    },
    {
        id: 8,
        img: '/profile/komar.jpg',
        name: 'Muhamad Komarudin',
        status: 'Divisi Logistik',
        jurusan: 'Perbandingan Madzab dan Hukum',
        nim: '1213040076',
        blogspot: 'https://logbook1213040076.blogspot.com/'
    },
    {
        id: 9,
        img: '/profile/rifki.JPG',
        name: 'Rifki Fauzi',
        status: 'Divisi Humas',
        jurusan: 'Aqidah dan Filsafat Islam',
        nim: '1211010110',
        blogspot: 'https://logbook1211010110.blogspot.com/'
    },
    {
        id: 10,
        img: '/profile/maul.jpg',
        name: 'Maulida Suroya',
        status: 'Divisi Humas',
        jurusan: 'Bimbingan Konseling Islam',
        nim: '1214010092',
        blogspot: 'https://logbook1214010092.blogspot.com/'
    },
    {
        id: 11,
        img: '/profile/satria.jpg',
        name: 'Muhamad Satria',
        status: 'Divisi PDD',
        jurusan: 'Pendidikan Fisika',
        nim: '1212070057',
        blogspot: 'https://logbook1212070057.blogspot.com/'
    },
    {
        id: 12,
        img: '/profile/zahra.JPG',
        name: 'Zahra Amelia',
        status: 'Divisi PDD',
        jurusan: 'Sastra Inggris',
        nim: '1215030260',
        blogspot: 'https://logbook1215030260.blogspot.com/'
    },
    {
        id: 13,
        img: '/profile/ara.jpg',
        name: 'Siti Azahra Maghfira',
        status: 'Divisi Konsumsi',
        jurusan: 'Pendidikan Fisika',
        nim: '1212070101',
        blogspot: 'https://logbook1212070101.blogspot.com/'
    },
    {
        id: 14,
        img: '/profile/ghina.jpg',
        name: 'Ghina Cantika',
        status: 'Divisi Konsumsi',
        jurusan: 'Hukum Pidana Islam',
        nim: '1213060045',
        blogspot: 'https://logbook1213060045.blogspot.com/'
    },
]

const Logbook = () => {
    return (
        <main className="relative w-full">
            <Navbar />

            <section className="xl:padding-1 wide:padding-r padding-b my-20 flex gap-16 px-10 flex-wrap justify-center">
                {
                    mahasiswa.map((mhs) => {
                        return <Card key={mhs.id} img={mhs.img} name={mhs.name} status={mhs.status} jurusan={mhs.jurusan} nim={mhs.nim} blogspot={mhs.blogspot} />
                    })
                }
            </section>
        </main>
    )
}

export default Logbook