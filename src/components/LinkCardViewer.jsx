import LinkCard from './LinkCard';

export default function LinkCardViewer({ linkCards, description }) {
  return (
    <div>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '20px'
      }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {linkCards.slice(0, 3).map((card, index) => (
          <LinkCard
            key={index}
            imagePath={card.imagePath}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
