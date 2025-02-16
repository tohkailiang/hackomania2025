import LinkCardViewer from './LinkCardViewer';
import { useLocation } from 'react-router-dom';
import { standardButtonStyle } from '../styles/buttonStyles';

export default function RecommendationPage({ topic, title }) {
  const location = useLocation();
  const username = location.state?.username || 'Guest';
  const formattedTitle = title.replace('{name}', username).replace('{topic}', topic);

  const recommendationSets = [
    {
      description: "Upcoming events that you might be interested in:",
      linkCards: [
        {
          imagePath: './sprites/logos/afa.png',
          description: 'Recommendation 1',
          link: 'https://example.com/1'
        },
        {
          imagePath: './sprites/logos/comex.png',
          description: 'Recommendation 2',
          link: 'https://example.com/2'
        },
        {
          imagePath: './sprites/logos/mangacon.png',
          description: 'Recommendation 3',
          link: 'https://example.com/3'
        }
      ]
    },
    {
      description: "Communities that you might be interested in:",
      linkCards: [
        {
          imagePath: './sprites/results/raccoon.png',
          description: 'New Release 1',
          link: 'https://example.com/new1'
        },
        {
          imagePath: './sprites/results/honeybee.png',
          description: 'New Release 2',
          link: 'https://example.com/new2'
        },
        {
          imagePath: './sprites/results/elephant.png',
          description: 'New Release 3',
          link: 'https://example.com/new3'
        }
      ]
    }
  ];

  return (
    <div style={{
      padding: '20px',
      height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
      }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '2rem'
      }}>
        {formattedTitle}
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        overflowY: 'auto',
        padding: '0 20px'
      }}>
        {recommendationSets.map((set, index) => (
          <div key={index}>
            <LinkCardViewer
            description={set.description}
            linkCards={set.linkCards}
          />
            {index === recommendationSets.length - 1 && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px',
                gap: '20px'
              }}>
                <span style={{ fontSize: '16px' }}>Want to save the recommendations? Sign up for a GeeksHacking account to connect with like-minded people!</span>
                <button style={{
                  ...standardButtonStyle,
                  background: '#007bff',
                  color: 'white',
                  width: 'auto'
                }}>
                  <span style={{ fontSize: '20px' }}>Sign up</span>
                </button>
      </div>
            )}
    </div>
        ))}
      </div>
    </div>
  );
}