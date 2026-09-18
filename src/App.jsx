import React, { useState, useEffect } from 'react';
import { Search, Download, Terminal, Layers, ArrowRight, Sparkles } from 'lucide-react';
import FontCard from './components/FontCard';
import FontDetails from './components/FontDetails';
import EditorPage from './components/EditorPage';

function App() {
  const [fonts, setFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFont, setSelectedFont] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('featured');
  const [sortBy, setSortBy] = useState('default');
  const [filterStyle, setFilterStyle] = useState('all');
  const [editorApp, setEditorApp] = useState(null);
  const [activePage, setActivePage] = useState('fonts'); // 'fonts' | 'editor'

  // Sync with URL hash (#editor / #fonts) for direct sharing
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#editor') {
        setActivePage('editor');
      } else {
        setActivePage('fonts');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.location.hash = page === 'editor' ? '#editor' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Fetch mock data from public/fonts.json
    fetch('./fonts.json')
      .then(res => res.json())
      .then(data => setFonts(data))
      .catch(err => console.error("Error loading fonts:", err));
      
    // Fetch apps data
    fetch('./apps.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          // Get latest app
          const latestApp = data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))[0];
          setEditorApp(latestApp);
        }
      })
      .catch(err => console.log("No apps found:", err));
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (!newDarkMode) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

  // 1. Search Filter
  let filteredFonts = fonts.filter(font => 
    font.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    font.style.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Tab Filter
  if (activeTab === 'featured') {
    filteredFonts = filteredFonts.filter(font => font.isFeatured);
  }

  // 3. Style Filter
  if (filterStyle !== 'all') {
    filteredFonts = filteredFonts.filter(font => font.style.toLowerCase() === filterStyle.toLowerCase());
  }

  // 4. Sorting
  filteredFonts = [...filteredFonts].sort((a, b) => {
    if (sortBy === 'default') {
      if (activeTab === 'latest') return new Date(b.dateAdded) - new Date(a.dateAdded);
      return 0;
    }
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'date-desc') return new Date(b.dateAdded) - new Date(a.dateAdded);
    if (sortBy === 'date-asc') return new Date(a.dateAdded) - new Date(b.dateAdded);
    return 0;
  });

  // Get unique styles for the dropdown
  const uniqueStyles = [...new Set(fonts.map(font => font.style))];

  return (
    <div className="container">
      {/* Universal Header */}
      <header className="header" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div 
          className="logo" 
          onClick={() => navigateTo('fonts')} 
          style={{ cursor: 'pointer', flexGrow: 1 }}
        >
          FontDownloader
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn"
            onClick={() => navigateTo('fonts')}
            style={{ 
              backgroundColor: activePage === 'fonts' ? 'var(--text-color)' : 'transparent',
              color: activePage === 'fonts' ? 'var(--bg-color)' : 'var(--text-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Layers size={16} /> Browse Fonts
          </button>

          <button 
            className="btn"
            onClick={() => navigateTo('editor')}
            style={{ 
              backgroundColor: activePage === 'editor' ? '#3b82f6' : 'transparent',
              color: activePage === 'editor' ? '#ffffff' : 'var(--text-color)',
              borderColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Terminal size={16} color={activePage === 'editor' ? '#fff' : '#3b82f6'} /> Typeface Editor App
          </button>

          <button className="btn" onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      {/* VIEW 1: DEDICATED TYPEFACE EDITOR PAGE */}
      {activePage === 'editor' ? (
        <EditorPage 
          app={editorApp} 
          onBack={() => navigateTo('fonts')} 
        />
      ) : (
        /* VIEW 2: FONTS STORE / DOWNLOADER */
        <>
          {/* Top Banner to promote the Editor */}
          {editorApp && (
            <div style={{
              border: '2px solid var(--border-color)',
              padding: '1.75rem',
              marginBottom: '2.5rem',
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              boxShadow: '8px 8px 0px var(--border-color)'
            }}>
              <div style={{ maxWidth: '650px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    background: '#3b82f6', 
                    color: '#ffffff', 
                    padding: '0.15rem 0.5rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 800,
                    borderRadius: '3px'
                  }}>
                    FREE SOFTWARE
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                    Typeface Web Editor v{editorApp.version}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                  మీ సొంత తెలుగు ఫాంట్ డిజైన్ చేయాలనుకుంటున్నారా?
                </h2>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  మా 547 తెలుగు గ్లిఫ్స్ లోకల్ ఎడిటర్‌ని డౌన్‌లోడ్ చేసుకోండి. పూర్తి సిస్టమ్ రిక్వైర్మెంట్స్ మరియు సెటప్ గైడ్ కోసం క్రింది బటన్ నొక్కండి.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn" 
                  onClick={() => navigateTo('editor')}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    background: '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 700
                  }}
                >
                  Download Editor & View Setup Guide <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Search & Filter Section */}
          <div className="search-section">
            <div className="search-bar-container">
              <div style={{ position: 'relative', flexGrow: 1 }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-text)' }} />
                <input 
                  type="text" 
                  placeholder="Search fonts by name or style..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: activeTab === 'featured' ? 'var(--text-color)' : 'transparent',
                    color: activeTab === 'featured' ? 'var(--bg-color)' : 'var(--text-color)'
                  }}
                  onClick={() => setActiveTab('featured')}
                >
                  Featured
                </button>
                <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: activeTab === 'latest' ? 'var(--text-color)' : 'transparent',
                    color: activeTab === 'latest' ? 'var(--bg-color)' : 'var(--text-color)'
                  }}
                  onClick={() => setActiveTab('latest')}
                >
                  Latest
                </button>
                <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: activeTab === 'all' ? 'var(--text-color)' : 'transparent',
                    color: activeTab === 'all' ? 'var(--bg-color)' : 'var(--text-color)'
                  }}
                  onClick={() => setActiveTab('all')}
                >
                  All Fonts
                </button>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <select 
                  className="btn" 
                  style={{ padding: '0.5rem' }}
                  value={filterStyle} 
                  onChange={(e) => setFilterStyle(e.target.value)}
                >
                  <option value="all">All Styles</option>
                  {uniqueStyles.map(style => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>

                <select 
                  className="btn" 
                  style={{ padding: '0.5rem' }}
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default Sort</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Fonts Grid */}
          <div className="grid">
            {filteredFonts.map(font => (
              <FontCard 
                key={font.id} 
                font={font} 
                onClick={setSelectedFont} 
              />
            ))}
          </div>
          
          {filteredFonts.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--muted-text)' }}>
              No fonts found.
            </div>
          )}

          {/* Font Details Modal */}
          {selectedFont && (
            <FontDetails 
              font={selectedFont} 
              onClose={() => setSelectedFont(null)} 
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
