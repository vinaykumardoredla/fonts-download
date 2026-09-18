import React, { useState } from 'react';
import { X, Download } from 'lucide-react';

const FontDetails = ({ font, onClose }) => {
  const [testText, setTestText] = useState(font.previewText || 'The quick brown fox jumps over the lazy dog. 0123456789');

  if (!font) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>{font.name}</h2>
        <p className="card-author" style={{ marginBottom: '1rem' }}>By {font.author} • {font.style}</p>
        
        <div style={{ marginBottom: '2rem' }}>
          <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => alert(`Downloading ${font.file} (Mock)`)}>
            <Download size={18} /> Download Font File
          </button>
        </div>

        <h3>Live Tester</h3>
        <textarea 
          className="tester-textarea"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          style={{ fontFamily: font.cssString || 'sans-serif' }}
          placeholder="Type here to test the font in a larger size..."
        />

        <h3>Character Map</h3>
        <div style={{ wordBreak: 'break-all', fontSize: '1.5rem', fontFamily: font.cssString || 'sans-serif', marginTop: '1rem', border: '1px solid var(--border-color)', padding: '1rem' }}>
          {font.characterMap ? (
            font.characterMap.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br/>
              </React.Fragment>
            ))
          ) : (
            <>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789<br/>
              !@#$%^&*()_+~`-=[]{}|;':",./&lt;&gt;?
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FontDetails;
