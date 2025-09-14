import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],
    searchTerm: '',

    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, recipe]
        })),

    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id)
        })),

    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),

    setRecipes: (newRecipes) =>
        set(() => ({
            recipes: newRecipes
        })),

    setSearchTerm: (term) =>
        set(() => ({
            searchTerm: term
        })),

    addFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id]
        })),

    removeFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter((favId) => favId !== id)
        })),

    setRecommendations: (recomms) =>
        set(() => ({
            recommendations: recomms
        })),
}));
