import dataJSON from '../data.json';
import { useState, useEffect } from 'react';

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataJSON);
    }, []);

    return (
        <ul className='mx-auto mx-w-md'>
            <h2 className='font-bold text-3xl text-center mb-9 text-green-950'>Recipe Sharing Platform</h2>
            {data.map((item) => (
                <li
                    className='flex items-center gap-7 bg-green-400 shadow-lg m-7 p-4 max-w-xl mx-auto rounded-3xl transform transition duration-300 hover:scale-110'
                    key={item.id}
                >
                    <img
                        className="w-24 h-34 rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer"
                        src={item.image}
                        alt={item.title}
                    />
                    <div className='flex flex-col'>
                        <h4
                            className='font-bold text-gray-800 mb-4'
                        >
                            {item.title}
                        </h4>
                        <p className='max-w-70 text-gray-600'>
                            {item.summary}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default HomePage;