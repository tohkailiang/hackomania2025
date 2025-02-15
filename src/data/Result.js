/**
 * @typedef {Object} ResultProps
 * @property {Array} affinities
 * @property {string} logo
 * @property {Array<string>} quotes
 * @property {Array} reviews
 * @property {string} title
 * @property {Array} traits
 */

class Result {
  constructor() {
      this.affinities = [];
      this.logo = '';
      this.quotes = [];
      this.reviews = [];
      this.title = '';
      this.traits = [];
    }
  
    setAffinities(affinities) {
      this.affinities = affinities;
      return this;
    }
  
    setLogo(logo) {
      this.logo = logo;
      return this;
    }
  
    setQuotes(quotes) {
      this.quotes = quotes;
      return this;
    }
  
    setReviews(reviews) {
      this.reviews = reviews;
      return this;
    }
  
    setTitle(title) {
      this.title = title;
      return this;
    }
  
    setTraits(traits) {
      this.traits = traits;
      return this;
    }

  /**
   * Returns an object with all properties
   * @returns {ResultProps}
   */
  toJSON() {
    return {
      affinities: this.affinities,
      logo: this.logo,
      quotes: this.quotes,
      reviews: this.reviews,
      title: this.title,
      traits: this.traits,
    };
  }
}

export default Result;