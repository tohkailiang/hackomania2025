 import React from 'react';
import PropTypes from 'prop-types';
import Result from '../data/Result';
import { useNavigate } from 'react-router-dom';
import Logo from './results/Logo';
import './ResultsPanel.css';
import Affinities from './results/Affinities';
import { Personalities } from '../systems/personalities.js';
import User from '../data/User';
import { standardButtonStyle } from '../styles/buttonStyles';

class ResultsPanel extends React.Component {
  constructor(props) {
    super(props);
    const { result, user } = props;
    const personalities = new Personalities();
    personalities.giveResult(user, result);
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
          <h1 className="results-title">You're a... {title}!</h1>

          <Logo imagePath={logo} />

          <section className="quotes-section">
            <div className="quotes-grid">
              {quotes.map((quote, index) => (
                <blockquote key={`quote-${index}`} className="quote-item">
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </section>

          <section className="traits-section">
            <h2>Traits</h2>
            <ul className="traits-list">
              {traits.map((trait, index) => (
                <li key={`trait-${index}`} className="trait-item">{trait}</li>
              ))}
            </ul>
          </section>

          <div className="side-by-side-container">
            <section className="affinities-section">
              <h2>Best Friends</h2>
              <Affinities imagePaths={affinities} />
            </section>

            <section className="reviews-section">
              <h2>Peer Reviews</h2>
              <div className="reviews-grid">
                {reviews.map((review, index) => (
                  <div key={`review-${index}`} className="review-item">
                    "{review}"
                  </div>
                ))}
              </div>
            </section>
          </div>

          <button
            onClick={() => this.props.navigate('/interactions')}
            style={standardButtonStyle}
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
  user: PropTypes.instanceOf(User).isRequired,
  navigate: PropTypes.func
};

export default ResultsPanelWithRouter;