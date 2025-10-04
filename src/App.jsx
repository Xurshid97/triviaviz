function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '100vw', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 30%'}}>
            {/* The side for category list */}
        </div>
        <div style={{ flex: '1 1 70%'}}>
            {/* The page for charts and display data */}
        </div>
      </div>
    </div>
  );
}

export default App;
