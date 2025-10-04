import './App.css';

import { useState, useEffect } from 'react';

import { fetchCategories, fetchQuestions } from './api/triviaApi';

import Skeleton from './components/Skeleton/Skeleton';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

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

  if (loading) return <Skeleton />;
  if (error) return <ErrorPage errorMessage={error} onRetry={loadData} />;

  return (
    <div className="app-container">
      <div className="app-content">
        
        <div className="sidebar" >
            {/* The side for category list */}
        </div>

        <div className="main-content">
            {/* The page for charts and display data */}
        </div>

      </div>
    </div>
  );
}

export default App;
