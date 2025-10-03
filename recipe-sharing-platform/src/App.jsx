import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  return (
    <div className='items-center justify-center p-10 bg-green-100 min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="addrecipe" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
