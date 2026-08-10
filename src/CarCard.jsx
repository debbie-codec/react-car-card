const CarCard = ({ title, description, image, onCardClick }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '280px',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  };

  const contentStyle = {
    padding: '28px 24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 12px 0',
    letterSpacing: '-0.5px'
  };

  const descriptionStyle = {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.6',
    margin: 0,
    flex: 1
  };

  const ctaStyle = {
    marginTop: '16px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0066ff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div 
      style={cardStyle} 
      onClick={onCardClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.transform = 'translateY(-8px)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={imageContainerStyle}>
        <img src={image} alt={title} style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        <div style={ctaStyle}>
          View Details
        </div>
      </div>
    </div>
  );
};

export default CarCard;