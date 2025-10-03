import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dataJSON from "../data.json";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const found = dataJSON.find((item) => item.id === parseInt(id));
        setRecipe(found || null);
    }, [id]);

    if (!recipe) {
        return (
            <p className="text-red-600 text-center font-bold text-2xl">
                Recipe not found!
            </p>
        );
    }

    return (
        <>
            <div className="max-w-xl mx-auto p-6 bg-green-200 rounded-xl shadow-lg">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h1 className="text-2xl font-bold mb-2 text-green-900">{recipe.title}</h1>
                <p className="text-gray-700">{recipe.summary}</p>

                <h2 className="mt-5 font-bold text-green-900">Ingredients</h2>
                <ul className="list-disc ml-6 text-sm text-gray-700">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h2 className="mt-5 font-bold text-green-900">Instructions</h2>
                <ol className="list-decimal ml-6 text-sm text-gray-700">
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>
                            <span className="font-semibold"></span> {instruction}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="max-w-xl mx-auto text-center text-sm mt-4 text-gray-400">
                <p>Recipe sharing at its best.</p>
            </div>
        </>
    );
}

export default RecipeDetail;
