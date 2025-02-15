import React from 'react';

class AnswersGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchAnswers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jsonUrl !== this.props.jsonUrl) {
      this.fetchAnswers();
    }
  }

  fetchAnswers = async () => {
    try {
      const response = await fetch(this.props.jsonUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch answers');
      }
      const data = await response.json();
      this.setState({ 
        answers: data,
        isLoading: false 
      });
    } catch (error) {
      this.setState({ 
        error: error.message,
        isLoading: false 
      });
    }
  }

  render() {
    const { answers, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    
    return (
      <div>
        {answers.map((answer, index) => (
          <div key={index}>
            {answer.text}
          </div>
        ))}
      </div>
    );
  }
}

// Example usage:
// <AnswersGroup jsonUrl="https://example.com/answers.json" />

export default AnswersGroup;