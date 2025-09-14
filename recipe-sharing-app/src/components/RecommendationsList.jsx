import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations);
    const genRecommendations = useRecipeStore(state => state.genRecommendations);

    return (
        <div>
            <h1>Recommendations</h1>
            <button onClick={genRecommendations}>Generate Recommendations</button>
            {
                recommendations.length === 0 ? (<p>No recommendations</p>) : (
                    recommendations.map(recipe => (
                        <div key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
};

export default RecommendationsList;