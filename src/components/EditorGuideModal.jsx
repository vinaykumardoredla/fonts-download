import React from 'react';
import { X, Download, Terminal, ExternalLink, Cpu, FileCode, CheckCircle2 } from 'lucide-react';

const EditorGuideModal = ({ app, onClose }) => {
  if (!app) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '850px', padding: '2.5rem' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close guide">
          <X size={24} />
        </button>

        {/* Title Header */}
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Typeface Web Editor</h2>
            <span style={{ 
              background: 'var(--text-color)', 
              color: 'var(--bg-color)', 
              padding: '0.2rem 0.6rem', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              borderRadius: '4px' 
            }}>
              v{app.version || '1.0'}
            </span>
            <span style={{ 
              border: '1px solid var(--border-color)', 
              padding: '0.2rem 0.6rem', 
              fontSize: '0.8rem', 
              color: 'var(--muted-text)' 
            }}>
              Windows • macOS • Linux
            </span>
          </div>
          <p style={{ color: 'var(--muted-text)', fontSize: '1rem', marginTop: '0.5rem' }}>
            మీ కంప్యూటర్‌లో 547 తెలుగు గ్లిఫ్స్ లేఅవుట్‌తో సొంతంగా ఫాంట్స్ తయారుచేయడానికి ఉపయోగించే పూర్తి ఉచిత లోకల్ వెబ్ ఎడిటర్.
          </p>
          
          <div style={{ marginTop: '1.25rem' }}>
            <a 
              href={`./apps/${app.file}`} 
              download 
              className="btn" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                background: '#3b82f6', 
                color: '#ffffff', 
                border: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              <Download size={20} /> Download Software ZIP ({app.file})
            </a>
          </div>
        </div>

        {/* Section 1: System Requirements & Essential Programs */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '1rem' }}>
            <Cpu size={22} /> 1. Essential Programs (అవసరమైన సాఫ్ట్‌వేర్స్)
          </h3>
          <p style={{ color: 'var(--muted-text)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            ఎడిటర్ సరిగ్గా పనిచేయడానికి మీ కంప్యూటర్‌లో క్రింది ప్రోగ్రామ్స్ ఉండాలి. లేకపోతే కింద ఇచ్చిన లింక్స్ నుండి ఇన్స్టాల్ చేసుకోండి:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            
            {/* Node.js Card */}
            <div style={{ 
              border: '2px solid var(--border-color)', 
              padding: '1.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>Node.js & NPM</strong>
                  <span style={{ background: '#22c55e', color: '#000', padding: '0.1rem 0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>
                    REQUIRED
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                  ఎడిటర్ సర్వర్‌ని రన్ చేయడానికి, ఫాంట్ ఫైల్స్ ని ప్రాసెస్ చేయడానికి Node.js 18+ లేదా 20+ అవసరం (NPM తో పాటు వస్తుంది).
                </p>
              </div>
              <a 
                href="https://nodejs.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.85rem',
                  padding: '0.4rem'
                }}
              >
                Download Node.js (LTS) <ExternalLink size={14} />
              </a>
            </div>

            {/* Python Card */}
            <div style={{ 
              border: '2px solid var(--border-color)', 
              padding: '1.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>Python 3.10+</strong>
                  <span style={{ border: '1px solid var(--border-color)', padding: '0.1rem 0.5rem', fontSize: '0.7rem', color: 'var(--muted-text)' }}>
                    RECOMMENDED
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                  ఫాంట్ కంపైలేషన్ స్క్రిప్ట్స్ మరియు ఆటోమేషన్ టూల్స్ కోసం Python 3 ఉండటం మంచిది (Install సమయంలో Add to PATH మర్చిపోవద్దు).
                </p>
              </div>
              <a 
                href="https://www.python.org/downloads/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.85rem',
                  padding: '0.4rem'
                }}
              >
                Download Python 3 <ExternalLink size={14} />
              </a>
            </div>

            {/* Desktop OS Card */}
            <div style={{ 
              border: '2px solid var(--border-color)', 
              padding: '1.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>Desktop Browser</strong>
                  <span style={{ background: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.1rem 0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>
                    DESKTOP ONLY
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                  Chrome, Edge, Firefox లేదా Brave బ్రౌజర్. (డెస్క్‌టాప్‌లో మాత్రమే రన్ అవుతుంది, మొబైల్ ఫోన్లలో పనిచేయదు).
                </p>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted-text)', textAlign: 'center', padding: '0.4rem' }}>
                Windows 10/11, macOS, Linux
              </span>
            </div>

          </div>
        </div>

        {/* Section 2: How to Run in 3 Easy Steps */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '1rem' }}>
            <Terminal size={22} /> 2. How to Run (కేవలం 3 సులభమైన స్టెప్స్)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ 
                background: 'var(--text-color)', 
                color: 'var(--bg-color)', 
                fontWeight: 900, 
                width: '30px', 
                height: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%',
                flexShrink: 0 
              }}>1</span>
              <div>
                <strong style={{ fontSize: '1rem' }}>ZIP ఫైల్ ని Extract (Unzip) చేయండి:</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', margin: '0.25rem 0 0 0' }}>
                  డౌన్‌లోడ్ చేసిన <code>{app.file}</code> ఫైల్ పై Right-Click చేసి <strong>Extract All</strong> క్లిక్ చేయండి.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ 
                background: 'var(--text-color)', 
                color: 'var(--bg-color)', 
                fontWeight: 900, 
                width: '30px', 
                height: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%',
                flexShrink: 0 
              }}>2</span>
              <div>
                <strong style={{ fontSize: '1rem' }}>Node.js ఇన్స్టాల్ చేసుకోండి:</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', margin: '0.25rem 0 0 0' }}>
                  మీ సిస్టమ్‌లో ఇంతకు ముందే Node.js ఉంటే సరిపోతుంది. లేకపోతే <a href="https://nodejs.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>nodejs.org</a> నుండి డౌన్‌లోడ్ చేసి ఇన్స్టాల్ చేయండి.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ 
                background: 'var(--text-color)', 
                color: 'var(--bg-color)', 
                fontWeight: 900, 
                width: '30px', 
                height: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%',
                flexShrink: 0 
              }}>3</span>
              <div>
                <strong style={{ fontSize: '1rem' }}>డబుల్ క్లిక్ చేసి రన్ చేయండి (Launch Editor):</strong>
                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                  <div>🪟 <strong>Windows:</strong> ఫోల్డర్‌లోని <code>Start_Editor.bat</code> ఫైల్ మీద డబుల్ క్లిక్ చేయండి!</div>
                  <div>🍎 <strong>macOS:</strong> <code>Start_Editor_Mac.command</code> ఫైల్ మీద డబుల్ క్లిక్ చేయండి.</div>
                  <div>🐧 <strong>Linux:</strong> టెర్మినల్ లో <code>./Start_Editor_Linux.sh</code> రన్ చేయండి.</div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#22c55e', marginTop: '0.5rem', fontWeight: 700 }}>
                  ✨ అంతే! ఆటోమేటిక్ గా మీ బ్రౌజర్‌లో ఎడిటర్ (http://localhost:5173) ఓపెన్ అయిపోతుంది!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Built-in Features */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.04)', 
          border: '1px solid var(--border-color)', 
          padding: '1.25rem', 
          marginBottom: '2rem' 
        }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileCode size={18} /> ఈ ఎడిటర్‌లో ముందే అందుబాటులో ఉన్న ఫీచర్లు:
          </h4>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--muted-text)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li><strong>547 తెలుగు గ్లిఫ్స్ లేఅవుట్:</strong> వాణి ఫాంట్ ఆధారిత ప్రాజెక్ట్ (<code>Vani.sfd</code>) ముందే లోడ్ అయి ఉంటుంది.</li>
            <li><strong>SVG డ్రాగ్ & డ్రాప్:</strong> మీరు ఇలస్ట్రేటర్ లేదా ఫిగ్మాలో గీసిన SVG అక్షరాలను నేరుగా గ్లిఫ్ బాక్స్ పై డ్రాప్ చేయవచ్చు.</li>
            <li><strong>లైవ్ మెట్రిక్స్ & ప్రివ్యూ:</strong> X/Y ఆఫ్సెట్, సైజ్ స్కేలింగ్ మరియు అడ్వాన్స్ విడ్త్ లైవ్ గా అడ్జస్ట్ చేస్తూ అక్కడే టైప్ చేసి టెస్ట్ చేసుకోవచ్చు.</li>
            <li><strong>ఆటోమేటిక్ సేవ్:</strong> మీరు చేసిన మార్పులన్నీ మీ బ్రౌజర్ లోకల్ స్టోరేజ్ లో ఆటో-సేవ్ అవుతాయి.</li>
          </ul>
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button className="btn" onClick={onClose} style={{ padding: '0.6rem 1.5rem' }}>
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditorGuideModal;
