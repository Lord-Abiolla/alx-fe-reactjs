import dataJSON from '../data.json';
import { useParams } from 'react-router-dom';


function RecipeDetail() {
    const { id } = useParams();
    const singleItem = dataJSON.find((item) => item.id === parseInt(id));

    if (!singleItem) return <p className='text-red-600 text-center font-bold text-2xl'>Recipe not found!</p>

    return (
        <>
            <div className="max-w-xl mx-auto p-6 bg-green-200 rounded-xl shadow-lg">
                <img
                    src={singleItem.image}
                    alt={singleItem.title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h1 className="text-2xl font-bold mb-2 text-green-900">{singleItem.title}</h1>
                <p className="text-gray-700">{singleItem.summary}</p>
                <h2 className='mt-5 font-bold text-green-900'>Recipe</h2>
                <ul className='p-2 justify-start text-sm text-gray-700'>
                    {singleItem.steps.map((step, index) => (
                        <li key={index}>{index + 1}. {step}</li>
                    ))}
                </ul>
            </div>
            <div className='max-w-xl mx-auto text-center text-sm mt-4 text-gray-400'>
                <p>
                    Recipe sharing at it's best.
                </p>
            </div>
        </>

    )
}

export default RecipeDetail;