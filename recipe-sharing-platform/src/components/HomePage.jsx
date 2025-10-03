import dataJSON from '../data.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataJSON);
    }, []);

    return (
        <ul className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <h2 className="col-span-full font-bold text-3xl text-center mb-9 text-green-950">
                Recipe Sharing Platform
            </h2>

            {data.map((item) => (
                <li
                    key={item.id}
                    className="flex flex-col items-center gap-4 bg-green-400 shadow-lg p-4 rounded-3xl transform transition duration-300 hover:scale-105"
                >
                    <Link
                        to={`/recipe/${item.id}`}
                        className='flex flex-col items-center text-center w-full'
                    >
                        <img
                            className="w-24 h-24 rounded-2xl object-cover transform transition duration-300 hover:scale-110 cursor-pointer"
                            src={item.image}
                            alt={item.title}
                        />
                        <div className="flex flex-col text-center">
                            <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.summary}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>

    )
}

export default HomePage;