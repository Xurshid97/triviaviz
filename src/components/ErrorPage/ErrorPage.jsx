import './ErrorPage.css';

function ErrorPage({errorMessage, onRetry}) {
  return (
      <div className='error-page-container'>
        <div className='error-page-content'>
          <svg
            className='error-page-icon'
            fill="none"
            stroke="#ff4d4f"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className='error-page-message'>
            {errorMessage}
          </p>
          <button
            onClick={onRetry}
            className='error-page-retry-button'

            onMouseOver={(e) => (e.target.style.background = '#6b66a6')}
            onMouseOut={(e) => (e.target.style.background = '#8884d8')}
          >
            Try Again
          </button>
        </div>
      </div>
    );
}


export default ErrorPage;
