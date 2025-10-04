const CACHE_KEYS = {
  CATEGORIES: 'trivia_categories',
  QUESTIONS: 'trivia_questions',
};

const CACHE_EXPIRY = {
  CATEGORIES: Infinity,
  QUESTIONS: 60 * 60 * 1000,
};

const getCachedData = (key) => {
  const cached = localStorage.getItem(key);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY[key.split('_')[1].toUpperCase()]) {
      return data;
    }
    localStorage.removeItem(key); // Expired, remove
  }
  return null;
};

const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

export const fetchCategories = async () => {
  const cached = getCachedData(CACHE_KEYS.CATEGORIES);
  if (cached) return cached;

  const res = await fetch('https://opentdb.com/api_category.php');
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch categories');
  }
  const data = await res.json();
  const categories = data.trivia_categories;
  setCachedData(CACHE_KEYS.CATEGORIES, categories);
  return categories;
};

export const fetchQuestions = async (amount = 50) => {
  const cached = getCachedData(CACHE_KEYS.QUESTIONS);
  if (cached) return cached;

  const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch questions');
  }
  const data = await res.json();
  if (data.response_code !== 0) {
    throw new Error('API error: ' + data.response_code);
  }
  const questions = data.results;
  setCachedData(CACHE_KEYS.QUESTIONS, questions);
  return questions;
};
