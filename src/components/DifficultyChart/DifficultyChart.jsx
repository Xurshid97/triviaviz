import './DifficultyChart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const DifficultyChart = ({ data, category }) => {
  const hasData = data.some(d => d.count > 0);

  return (
    <div className="difficulty-chart-container">
      <h2 className="difficulty-chart-title">
        Distribution of Questions by Difficulty{' '}
        {category !== 'All' ? `in ${category}` : ''}
      </h2>
      <div className="difficulty-chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill={hasData ? "#82ca9d" : "#ccc"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DifficultyChart;
