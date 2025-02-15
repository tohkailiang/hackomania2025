import LinkCardViewer from './LinkCardViewer';
import { useLocation } from 'react-router-dom';

export default function RecommendationPage({ topic, title }) {
  const location = useLocation();
  const username = location.state?.username || 'Guest';
  const formattedTitle = title.replace('{name}', username).replace('{topic}', topic);

  const recommendationSets = [
    {
      description: "Popular picks",
      linkCards: [
        {
          imagePath: './sprites/results/honeybee.png',
          description: 'Recommendation 1',
          link: 'https://example.com/1'
        },
        {
          imagePath: './sprites/results/elephant.png',
          description: 'Recommendation 2',
          link: 'https://example.com/2'
        },
        {
          imagePath: './sprites/results/axolotl.png',
          description: 'Recommendation 3',
          link: 'https://example.com/3'
        }
      ]
    },
    {
      description: "New releases",
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
    },
    {
      description: "You might also like",
      linkCards: [
        {
          imagePath: './sprites/results/axolotl.png',
          description: 'Similar 1',
          link: 'https://example.com/similar1'
        },
        {
          imagePath: './sprites/results/raccoon.png',
          description: 'Similar 2',
          link: 'https://example.com/similar2'
        },
        {
          imagePath: './sprites/results/honeybee.png',
          description: 'Similar 3',
          link: 'https://example.com/similar3'
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
      overflow: 'hidden'
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
        gap: '40px',
        overflowY: 'auto',
        padding: '0 20px'
      }}>
        {recommendationSets.map((set, index) => (
          <LinkCardViewer
            key={index}
            description={set.description}
            linkCards={set.linkCards}
          />
        ))}
      </div>
    </div>
  );
}