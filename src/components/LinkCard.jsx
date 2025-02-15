export default function LinkCard({ imagePath, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div style={{
        cursor: 'pointer',
        backgroundColor: 'white',
        width: '160px',
        height: '260px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <img
          src={imagePath}
          alt={description}
          style={{
            width: 'calc(100% - 10px)',
            height: '200px',
            objectFit: 'cover',
            margin: '5px 5px 0 5px'
          }}
        />
        <p style={{
          margin: 0,
          padding: '10px',
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {description}
        </p>
      </div>
    </a>
  );
}