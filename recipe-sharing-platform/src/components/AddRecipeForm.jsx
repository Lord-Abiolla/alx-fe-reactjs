import { useState } from "react";

function AddRecipeForm() {

    const [formData, setFormData] = useState({
        title: "",
        ingredients: "",
        steps: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="bg-green-500 max-w-lg mx-auto p-3  rounded-lg">
            <form
                className="flex flex-col p-3"
            >
                <h2
                    className="text-center text-green-950 font-bold text-2xl mb-4">Add Recipe</h2>
                <input
                    className="mb-4 rounded-lg p-3 outline-none"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    className="rounded-lg mb-4 p-3 outline-none"
                    name="ingredients"
                    onChange={handleChange}
                    placeholder="List ingredients here..."
                    required
                ></textarea>
                <textarea
                    className="rounded-lg p-3 outline-none"
                    name="ingredients"
                    onChange={handleChange}
                    placeholder="Preparation steps here..."
                    required
                ></textarea>
                <button
                    className="bg-green-900 p-3 rounded-xl mt-4 text-white font-bold"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default AddRecipeForm;