import React from 'react'

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%', 
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      padding: '14px 20px',
      fontSize: '16px',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}>

        <i className="fa fa-search" style={{ color: '#999', fontSize: '18px' }}></i>
        <input 
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '16px',
            outline: 'none',
            width: '100%',
            color: '#333',
            fontFamily: 'inherit'
          }}
          type="text" 
          placeholder="Search for cars..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default SearchInput