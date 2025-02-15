import React from 'react';
import PropTypes from 'prop-types';
import Result from '../data/Result';
import { useNavigate } from 'react-router-dom';
import Logo from './results/Logo';
import './ResultsPanel.css';
import Affinities from './results/Affinities';

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
        <div className="results-content">
          <div className="results-header">
            <Logo imagePath={logo} />
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
            <Affinities imagePaths={affinities} />
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
          onClick={() => this.props.navigate('/redirect')}
          style={{
            width: '350px',
            maxWidth: '100%',
            height: '66px',
            backgroundColor: '#FF0000',
            border: '2px solid #00FF00',
            marginTop: '20px',
            marginBottom: '20px',
            alignSelf: 'center'
          }}
        >
          Continue
        </button>
        </div>
      </div>
    );
  }
}

const ResultsPanelWithRouter = (props) => {
  const navigate = useNavigate();
  return <ResultsPanel {...props} navigate={navigate} />;
};

ResultsPanel.propTypes = {
  result: PropTypes.instanceOf(Result).isRequired,
  navigate: PropTypes.func
};

export default ResultsPanelWithRouter;
