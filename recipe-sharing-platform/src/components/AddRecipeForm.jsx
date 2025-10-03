import { useState } from "react";

function AddRecipeForm() {

    const [formData, setFormData] = useState({
        title: "",
        ingredients: "",
        steps: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title required";
        }
        if (!formData.ingredients.trim()) {
            newErrors.ingredients = "Ingredients field can't be empty";
        }
        if (!formData.steps.trim()) {
            newErrors.steps = "Steps can't be empty";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setFormData({
                title: "",
                ingredients: "",
                steps: ""
            })
            console.log(formData);
        }
    }

    return (
        <div className="bg-green-500 max-w-lg mx-auto p-3  rounded-lg shadow-lg md:max-w-xl">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col p-3"
            >
                <h2
                    className="text-center text-green-950 font-bold text-2xl mb-4">Add Recipe</h2>
                <input
                    className="mb-4 rounded-lg p-3 outline-none"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                    placeholder="Title"
                    required
                />
                <textarea
                    className="rounded-lg mb-4 p-3 outline-none"
                    name="ingredients"
                    onChange={handleChange}
                    value={formData.ingredients}
                    placeholder="List ingredients here..."
                    required
                ></textarea>
                <textarea
                    className="rounded-lg p-3 outline-none"
                    name="steps"
                    onChange={handleChange}
                    value={formData.steps}
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