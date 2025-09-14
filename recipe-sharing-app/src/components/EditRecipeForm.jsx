import { useState, useCallback } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({
    recipe = { id: null, title: '', description: '' },
    onCompleteEdit,
    heading = "Edit Recipe"
}) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        updateRecipe({
            ...recipe,
            title: title.trim(),
            description: description.trim(),
        });

        onCompleteEdit?.();
    }, [recipe, title, description, updateRecipe, onCompleteEdit]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>{heading}</h2>

            <div>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Save</button>
        </form>
    );
};

export default EditRecipeForm;
