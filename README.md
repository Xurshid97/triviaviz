# Link to Live Demo
[Live Demo on GitHub Pages](https://xurshid97.github.io/triviaviz/)

# Trivia Questions Visualization

This is a React-based visualization tool that displays trivia question distributions from the [Open Trivia DB API](https://opentdb.com). It features a scrollable category list on the left and a carousel of charts (category and difficulty distributions) on the right.

## Features
- **Category List**: Scrollable, clickable, for filtering questions.
- **Charts**:
  - Category distribution bar chart (shown when "All Categories" is selected).
  - Difficulty distribution bar chart (filtered by selected category).
- **Carousel**: One chart at a time with arrows and dots.
- **Caching**: LocalStorage to avoid rate limits.
- **Consistent UI**: Fixed chart board (850x450px).

## Tech Stack
- React with hooks
- Vite
- Recharts
- Open Trivia DB API
- GitHub Pages

## Prerequisites
- Node.js (v16+)
- npm (v7+)
- Git

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Xurshid97/triviaviz.git
   cd triviaviz

2. **Install Dependencies**
   ```bash
   npm install
    ```
3. **Run the Application**
   ```bash
   npm run dev
   ```
