/* eslint-disable react/prop-types */
const Card = ({ img, name, status, nim, jurusan, blogspot }) => {
    return (
        <div className="flex items-center justify-center flex-wrap flex-col">
            <div className="w-[240px]">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="p-2">
                        <img className="w-32 h-32 rounded-full mx-auto object-cover" src={img} alt={name}></img>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-lg text-gray-900 font-medium">{name}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold mt-0.5">
                            <p>{status}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">NIM</td>
                                    <td className="px-2 py-2">{nim}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Jurusan</td>
                                    <td className="px-2 py-2">{jurusan}</td>
                                </tr>
                            </tbody></table>

                        <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={blogspot} target="_blank">Link Logbook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card