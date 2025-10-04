import './App.css';

import { useState, useEffect } from 'react';

import { fetchCategories, fetchQuestions } from './api/triviaApi';

import Skeleton from './components/Skeleton/Skeleton';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CategoryList from './components/CategoryList/CategoryList';
import ChartsCarousel from './components/ChartsCarousel/ChartsCarousel';
import CategoryChart from './components/CategoryChart/CategoryChart';

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
        const cats = await fetchCategories();
        setCategories(cats);
        const qs = await fetchQuestions(50);
        setQuestions(qs);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

  useEffect(() => {
    loadData();
  }, []);


  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter((q) => q.category === selectedCategory);

  const categoryCounts = categories
    .map((cat) => ({
      name: cat.name,
      count: questions.filter((q) => q.category === cat.name).length,
    }))
    .filter((d) => d.count > 0);

  const difficultyCounts = [
    { name: 'Easy', count: filteredQuestions.filter((q) => q.difficulty === 'easy').length },
    { name: 'Medium', count: filteredQuestions.filter((q) => q.difficulty === 'medium').length },
    { name: 'Hard', count: filteredQuestions.filter((q) => q.difficulty === 'hard').length },
  ];

  const showCategoryChart = selectedCategory === 'All';

  if (loading) return <Skeleton />;
  if (error) return <ErrorPage errorMessage={error} onRetry={loadData} />;

  return (
    <div className="app-container">
      <div className="app-content">

        <div className="sidebar" >

            <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

        </div>

        <div className="main-content">
            <ChartsCarousel>
                <CategoryChart data={categoryCounts} show={showCategoryChart} questions={filteredQuestions} />
                <div>Chart 2</div>
            </ChartsCarousel>
        </div>

      </div>
    </div>
  );
}

export default App;
