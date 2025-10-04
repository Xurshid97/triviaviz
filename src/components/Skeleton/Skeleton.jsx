import './Skeleton.css';

export default function Skeleton() {
    return (
        <div className="skeleton-container">
            <div className="skeleton-content">

                {/* Skeleton for CategoryList */}
                <div className="skeleton-sidebar">
                    <div className="skeleton-sidebar">
                    {/* Search bar skeleton */}
                    <div className="skeleton-search-bar" />
                    {/* Category list items skeleton */}
                    <div className='skeleton-category-list'>
                        {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className="skeleton-category-item"
                        />
                        ))}
                    </div>
                    </div>
                </div>

                {/* Skeleton for ChartsCarousel */}
                <div className='skeleton-main-content'>
                    <div className="skeleton-chart-card">
                    {/* Chart title skeleton */}
                    <div className="skeleton-chart-title" />
                    {/* Chart area skeleton */}
                    <div className="skeleton-chart-area" />
                    </div>
                </div>

            </div>
      </div>
    );
}
