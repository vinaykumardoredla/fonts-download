import React, { useState } from 'react';
import { Search, Download, Type } from 'lucide-react';

const FontCard = ({ font, onClick }) => {
  const [testText, setTestText] = useState(font.previewText || 'The quick brown fox jumps over the lazy dog');

  const handleTestChange = (e) => {
    setTestText(e.target.value);
    // Prevent the click event from bubbling up to the card if they are just typing
  };

  return (
    <div className="card">
      <div className="card-header" onClick={() => onClick(font)} style={{ cursor: 'pointer' }}>
        <div>
          <div className="card-title">{font.name}</div>
          <div className="card-author">{font.author} • {font.style}</div>
        </div>
      </div>
      
      <div 
        className="card-preview" 
        onClick={() => onClick(font)}
        style={{ cursor: 'pointer', fontFamily: font.cssString || 'sans-serif' }}
      >
        {testText || 'Type something'}
      </div>

      <div className="card-actions">
        <input 
          type="text" 
          value={testText} 
          onChange={handleTestChange} 
          placeholder="Test this font..." 
        />
        <button className="btn" onClick={(e) => { e.stopPropagation(); onClick(font); }}>
          Details
        </button>
      </div>
    </div>
  );
};

export default FontCard;
