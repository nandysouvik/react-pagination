import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div style={{ width: "100vw" }}>
      {pages.map(num => (
        <button
          style={{ margin: "0.2rem", padding: "10px", backgroundColor: "lightgray", borderRadius: '0.5rem', textDecoration: 'none', boxShadow: '4px 3px #888888', border: "0", cursor: "pointer", justifyContent: 'stretch', alignItems: 'center' }}
          key={num}
          onClick={() => handleClick(num)}
        >{num}</button>
      ))}
    </div>
  )
}

export default Pagination
