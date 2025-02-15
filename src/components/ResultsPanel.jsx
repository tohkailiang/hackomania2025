import React from 'react';
import PropTypes from 'prop-types';
import Result from '../data/Result';
import { useNavigate } from 'react-router-dom';
import './ResultsPanel.css';

class ResultsPanel extends React.Component {
  constructor(props) {
    super(props);
    const { result } = props;
    
    this.state = {
      affinities: result.affinities,
      logo: result.logo,
      quotes: result.quotes,
      reviews: result.reviews,
      title: result.title,
      traits: result.traits,
    };
  }

  render() {
    const { affinities, logo, quotes, reviews, title, traits } = this.state;
    return (
      <div className="results-panel">
        <div className="results-header">
          <img src={logo} alt={title} className="results-logo" />
          <h1 className="results-title">{title}</h1>
        </div>

        <section className="traits-section">
          <h2>Traits</h2>
          <ul className="traits-list">
            {traits.map((trait, index) => (
              <li key={`trait-${index}`}>{trait}</li>
            ))}
          </ul>
        </section>

        <section className="quotes-section">
          <h2>Quotes</h2>
          <div className="quotes-list">
            {quotes.map((quote, index) => (
              <blockquote key={`quote-${index}`}>{quote}</blockquote>
            ))}
          </div>
        </section>

        <section className="affinities-section">
          <h2>Affinities</h2>
          <div className="affinities-list">
            {affinities.map((affinity, index) => (
              <div key={`affinity-${index}`} className="affinity-item">
                {affinity}
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section">
          <h2>Reviews</h2>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div key={`review-${index}`} className="review-item">
                {review}
              </div>
            ))}
          </div>
        </section>

        <button
          onClick={() => this.props.navigate('/')}
          style={{
            width: '350px',
            height: '66px',
            backgroundColor: '#FF0000',
            border: '2px solid #00FF00',
            marginTop: '20px',
            alignSelf: 'center'
          }}
        >
          Return to Home
        </button>
      </div>
    );
  }
}

// Wrap ResultsPanel with navigation
const ResultsPanelWithRouter = (props) => {
  const navigate = useNavigate();
  return <ResultsPanel {...props} navigate={navigate} />;
};

ResultsPanel.propTypes = {
  result: PropTypes.instanceOf(Result).isRequired,
  navigate: PropTypes.func
};

export default ResultsPanelWithRouter;
