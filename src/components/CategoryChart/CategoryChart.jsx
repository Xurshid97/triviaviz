import './CategoryChart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const CategoryChart = ({ data, show, questions }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const chartContent = !show ? (
    <div className="table-container">
      <h3>Questions in Category</h3>
      <br />
      {questions && questions.length > 0 ? (
        <div className="question-table">
          <table>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Question</th>
                <th style={thStyle}>Difficulty</th>
                <th style={thStyle}>Type</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}>{q.question}</td>
                  <td style={tdStyle}>{q.difficulty}</td>
                  <td style={tdStyle}>{q.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-questions">
          No questions found for this category.
        </p>
      )}
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 10, bottom: isMobile ? 40 : 100 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          angle={isMobile ? -90 : -45}  // vertical on small screens
          textAnchor={isMobile ? "end" : "end"}
          height={isMobile ? 100 : 100}
          tick={{ fontSize: isMobile ? 10 : 12 }}
        />
        <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="category-chart-container">
      <div className="chart-content">
        {chartContent}
      </div>
    </div>
  );
};

const thStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#333',
};

const tdStyle = {
  padding: '10px',
  fontSize: '14px',
  color: '#555',
};

export default CategoryChart;
