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
  }
  
  export default Result;