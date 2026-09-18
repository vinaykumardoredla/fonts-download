import React from 'react';
import { Download, Terminal, ExternalLink, Cpu, FileCode, ArrowLeft, CheckCircle2, AlertCircle, HelpCircle, Monitor } from 'lucide-react';

const EditorPage = ({ app, onBack }) => {
  const downloadUrl = app?.file ? `./apps/${app.file}` : '#';

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '5rem' }}>
      
      {/* Navigation Top Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          className="btn" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}
        >
          <ArrowLeft size={18} /> Back to Fonts Downloader
        </button>
      </div>

      {/* Main Hero Header */}
      <div style={{
        border: '3px solid var(--border-color)',
        padding: '2.5rem',
        marginBottom: '3rem',
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
        boxShadow: '12px 12px 0px var(--border-color)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span style={{ 
            background: '#3b82f6', 
            color: '#ffffff', 
            padding: '0.25rem 0.75rem', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            borderRadius: '4px' 
          }}>
            OFFLINE DESKTOP SOFTWARE
          </span>
          <span style={{ 
            background: 'var(--text-color)', 
            color: 'var(--bg-color)', 
            padding: '0.25rem 0.75rem', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            borderRadius: '4px' 
          }}>
            v{app?.version || '1.0'}
          </span>
          <span style={{ 
            border: '1px solid var(--border-color)', 
            padding: '0.25rem 0.75rem', 
            fontSize: '0.85rem', 
            color: 'var(--muted-text)' 
          }}>
            Windows • macOS • Linux
          </span>
        </div>

        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Typeface Web Editor
        </h1>
        
        <p style={{ fontSize: '1.15rem', color: 'var(--muted-text)', lineHeight: '1.6', maxWidth: '800px', marginBottom: '2rem' }}>
          సొంతంగా తెలుగు ఫాంట్స్ తయారుచేయడానికి ఉపయోగించే పూర్తి ఉచిత లోకల్ వెబ్ ఎడిటర్. 
          వాణి ఫాంట్ ఆధారిత <strong>547 తెలుగు గ్లిఫ్స్ లేఅవుట్</strong> తో ముందే కాన్ఫిగర్ చేయబడింది. 
          మీ కంప్యూటర్‌లో ఆఫ్‌లైన్ లోనే రన్ అవుతుంది.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a 
            href={downloadUrl} 
            download 
            className="btn" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              background: '#3b82f6', 
              color: '#ffffff', 
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 800,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'
            }}
          >
            <Download size={22} /> Download Typeface Editor ZIP ({app?.file || 'ZIP'})
          </a>
          <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>
            📦 24.4 MB • Standalone with packages included
          </span>
        </div>
      </div>

      {/* Section 1: Prerequisites & System Requirements */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.5rem', fontWeight: 800 }}>
            <Cpu size={26} color="#3b82f6" /> 1. Essential Programs & System Requirements (అవసరమైన సాఫ్ట్‌వేర్స్)
          </h2>
          <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
            ఎడిటర్ సరిగ్గా రన్ అవ్వడానికి మీ కంప్యూటర్‌లో ఈ క్రింది ప్రోగ్రామ్స్ ఉండాలి. లేకపోతే ఇచ్చిన అఫీషియల్ లింక్స్ నుండి ఇన్స్టాల్ చేసుకోండి:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Node.js Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <strong style={{ fontSize: '1.2rem', fontWeight: 800 }}>Node.js & NPM</strong>
                <span style={{ background: '#22c55e', color: '#000', padding: '0.15rem 0.6rem', fontSize: '0.75rem', fontWeight: 900 }}>
                  తప్పనిసరి (REQUIRED)
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                ఎడిటర్ సర్వర్‌ని లోకల్ గా రన్ చేయడానికి, భారీ ఫాంట్ ఫైల్స్ ని ప్రాసెస్ చేయడానికి <strong>Node.js 18+ లేదా 20+</strong> అవసరం. Node.js ఇన్స్టాల్ చేస్తే NPM ఆటోమేటిక్ గా వచ్చేస్తుంది.
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
                gap: '0.5rem', 
                fontSize: '0.95rem',
                padding: '0.6rem 1rem',
                textAlign: 'center'
              }}
            >
              Download Node.js (LTS) <ExternalLink size={16} />
            </a>
          </div>

          {/* Python Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <strong style={{ fontSize: '1.2rem', fontWeight: 800 }}>Python 3.10+</strong>
                <span style={{ border: '1px solid var(--border-color)', padding: '0.15rem 0.6rem', fontSize: '0.75rem', color: 'var(--muted-text)' }}>
                  సిఫార్సు చేయబడింది (OPTIONAL)
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                ఫాంట్ కంపైలేషన్ స్క్రిప్ట్స్ మరియు భవిష్యత్తు ఆటోమేషన్ టూల్స్ సపోర్ట్ కోసం Python 3 ఉండటం మంచిది. ఇన్స్టాల్ చేసేటప్పుడు <em>"Add Python to PATH"</em> టిక్ మార్క్ పెట్టడం మర్చిపోవద్దు.
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
                gap: '0.5rem', 
                fontSize: '0.95rem',
                padding: '0.6rem 1rem',
                textAlign: 'center'
              }}
            >
              Download Python 3 <ExternalLink size={16} />
            </a>
          </div>

          {/* Desktop Browser Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <strong style={{ fontSize: '1.2rem', fontWeight: 800 }}>Desktop OS & Browser</strong>
                <span style={{ background: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.15rem 0.6rem', fontSize: '0.75rem', fontWeight: 900 }}>
                  డెస్క్‌టాప్ మాత్రమే
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Windows 10/11, macOS, లేదా Linux కంప్యూటర్స్. Google Chrome, Microsoft Edge, Firefox లేదా Brave బ్రౌజర్ సపోర్ట్ చేస్తుంది (మొబైల్ ఫోన్లలో సపోర్ట్ చేయదు).
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '0.6rem', color: 'var(--muted-text)', fontSize: '0.85rem', border: '1px dashed var(--border-color)' }}>
              Chrome / Edge / Firefox Ready
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Step-by-Step Installation & Run Guide */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.5rem', fontWeight: 800 }}>
            <Terminal size={26} color="#3b82f6" /> 2. Step-by-Step Run Guide (కేవలం 3 సింపుల్ స్టెప్స్‌లో ఎలా స్టార్ట్ చేయాలి?)
          </h2>
          <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
            ఎలాంటి కోడింగ్ తెలియకపోయినా సరే... క్రింది 3 స్టెప్స్ ఫాలో అయి మీ కంప్యూటర్‌లో ఎడిటర్‌ని స్టార్ట్ చేయవచ్చు:
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Step 1 Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            gap: '1.25rem', 
            alignItems: 'flex-start' 
          }}>
            <div style={{ 
              background: 'var(--text-color)', 
              color: 'var(--bg-color)', 
              fontWeight: 900, 
              width: '36px', 
              height: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '50%',
              flexShrink: 0,
              fontSize: '1.1rem'
            }}>
              1
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                ZIP ఫైల్ డౌన్‌లోడ్ చేసి Extract (Unzip) చేయండి
              </h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                పైనున్న బ్లూ బటన్ క్లిక్ చేసి <code>font-editor-app.zip</code> డౌన్‌లోడ్ చేసుకోండి. 
                డౌన్‌లోడ్ అయిన ఫైల్ పై రైట్-క్లిక్ (Right Click) చేసి <strong>"Extract All"</strong> నొక్కండి. 
                ఒక ఫోల్డర్ క్రియేట్ అవుతుంది.
              </p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            gap: '1.25rem', 
            alignItems: 'flex-start' 
          }}>
            <div style={{ 
              background: 'var(--text-color)', 
              color: 'var(--bg-color)', 
              fontWeight: 900, 
              width: '36px', 
              height: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '50%',
              flexShrink: 0,
              fontSize: '1.1rem'
            }}>
              2
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                Node.js ఇన్స్టాల్ చేయండి (ఇంతకుముందే ఉంటే స్కిప్ చేయవచ్చు)
              </h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                మీ కంప్యూటర్‌లో ఇంతకు ముందు Node.js లేకపోతే, <a href="https://nodejs.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#3b82f6' }}>nodejs.org</a> నుండి LTS వెర్షన్ డౌన్‌లోడ్ చేసి ఇన్స్టాల్ చేయండి. 
                (కేవలం <em>Next ➔ Next ➔ Install</em> క్లిక్ చేయడమే).
              </p>
            </div>
          </div>

          {/* Step 3 Card */}
          <div style={{ 
            border: '2px solid var(--border-color)', 
            padding: '1.5rem', 
            display: 'flex', 
            gap: '1.25rem', 
            alignItems: 'flex-start',
            backgroundColor: 'rgba(34, 197, 94, 0.05)'
          }}>
            <div style={{ 
              background: '#22c55e', 
              color: '#000000', 
              fontWeight: 900, 
              width: '36px', 
              height: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '50%',
              flexShrink: 0,
              fontSize: '1.1rem'
            }}>
              3
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                డబుల్ క్లిక్ చేసి రన్ చేయండి (Double Click to Launch!)
              </h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                అన్‌జిప్ చేసిన ఫోల్డర్ లోపలికి వెళ్లి మీ ఆపరేటింగ్ సిస్టమ్‌కు సంబంధించిన ఫైల్‌పై క్లిక్ చేయండి:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ border: '1px solid var(--border-color)', padding: '0.75rem' }}>
                  <strong>🪟 Windows:</strong><br />
                  <code>Start_Editor.bat</code> పై డబుల్ క్లిక్ చేయండి.
                </div>
                <div style={{ border: '1px solid var(--border-color)', padding: '0.75rem' }}>
                  <strong>🍎 macOS:</strong><br />
                  <code>Start_Editor_Mac.command</code> పై క్లిక్ చేయండి.
                </div>
                <div style={{ border: '1px solid var(--border-color)', padding: '0.75rem' }}>
                  <strong>🐧 Linux:</strong><br />
                  టెర్మినల్ లో <code>./Start_Editor_Linux.sh</code> రన్ చేయండి.
                </div>
              </div>

              <p style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.95rem' }}>
                ✨ అంతే! ఆటోమేటిక్ గా మీ వెబ్ బ్రౌజర్‌లో ఎడిటర్ (http://localhost:5173) ఓపెన్ అయిపోతుంది!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Features Included */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.5rem', fontWeight: 800 }}>
            <FileCode size={26} color="#3b82f6" /> 3. Built-in Features (ఈ ఎడిటర్‌లో మీకు ఏమేమి లభిస్తాయి?)
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid var(--border-color)', padding: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>547 Telugu Glyphs Layout</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
              వాణి ఫాంట్ ఆధారిత ప్రాజెక్ట్ (<code>Vani.sfd</code>) ముందే లోడ్ అయి ఉంటుంది. అచ్చులు, హల్లులు, గుణింతాలు, ఒత్తులు స్పష్టమైన గ్రిడ్ రూపంలో కనిపిస్తాయి.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border-color)', padding: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Drag & Drop SVG Artwork</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
              Adobe Illustrator, Figma లేదా Inkscape లో గీసిన <code>.svg</code> వెక్టార్ అక్షరాలను నేరుగా ఆయా గ్లిఫ్ బాక్సుల పై డ్రాప్ చేసి రీప్లేస్ చేయవచ్చు.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border-color)', padding: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Real-time Spatial Metrics</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
              అక్షరం యొక్క X, Y స్థానాలు, సైజ్ స్కేలింగ్ మరియు Advance Width (స్పేసింగ్) ని లైవ్ స్లైడర్ల ద్వారా సరిచేసుకోవచ్చు.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border-color)', padding: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Live Telugu Text Tester</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
              మీరు మార్చిన అక్షరాలు స్క్రీన్ మీద టైప్ చేసినప్పుడు ఎలా కనిపిస్తున్నాయో అక్కడికక్కడే లైవ్ బాక్సులో టెస్ట్ చేసుకోవచ్చు.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Troubleshooting & FAQs */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.5rem', fontWeight: 800 }}>
            <HelpCircle size={26} color="#3b82f6" /> 4. Common FAQs & Troubleshooting (సందేహాలు & పరిష్కారాలు)
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ border: '1px solid var(--border-color)', padding: '1rem 1.25rem' }}>
            <strong style={{ fontSize: '1rem' }}>ప్ర: <code>Start_Editor.bat</code> ఓపెన్ చేయగానే వెంటనే మూసుకుపోతోంది (Close అవుతోంది)?</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', marginTop: '0.35rem', lineHeight: '1.5' }}>
              జ: మీ సిస్టమ్‌లో Node.js ఇన్స్టాల్ అయి ఉండకపోవచ్చు. ఒకసారి <a href="https://nodejs.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>nodejs.org</a> నుండి LTS వెర్షన్ ఇన్స్టాల్ చేసి, ఆ తర్వాత రన్ చేయండి.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border-color)', padding: '1rem 1.25rem' }}>
            <strong style={{ fontSize: '1rem' }}>ప్ర: కమాండ్ ప్రాంప్ట్ నడుస్తోంది కానీ బ్రౌజర్‌లో ఎడిటర్ ఆటోమేటిక్ గా ఓపెన్ కాలేదా?</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', marginTop: '0.35rem', lineHeight: '1.5' }}>
              జ: మీ బ్రౌజర్ (Chrome/Edge) ఓపెన్ చేసి అడ్రస్ బార్ లో <code>http://localhost:5173</code> అని టైప్ చేసి ఎంటర్ కొట్టండి.
            </p>
          </div>

          <div style={{ border: '1px solid var(--border-color)', padding: '1rem 1.25rem' }}>
            <strong style={{ fontSize: '1rem' }}>ప్ర: పని పూర్తయ్యాక ఎడిటర్‌ని ఎలా ఆపేయాలి?</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', marginTop: '0.35rem', lineHeight: '1.5' }}>
              జ: నడుస్తున్న ఆ బ్లాక్ కమాండ్ ప్రాంప్ట్ (Terminal Window) ని క్లోజ్ చేస్తే సర్వర్ ఆగిపోతుంది. మీరు చేసిన మార్పులన్నీ మీ బ్రౌజర్ స్టోరేజ్‌లోనే భద్రంగా ఉంటాయి.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <div style={{
        border: '3px solid var(--border-color)',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>సిద్ధంగా ఉన్నారా? మీ తెలుగు ఫాంట్ డిజైనింగ్ మొదలుపెట్టండి!</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a 
            href={downloadUrl} 
            download 
            className="btn" 
            style={{ 
              background: '#3b82f6', 
              color: '#ffffff', 
              border: 'none', 
              padding: '0.8rem 2rem', 
              fontSize: '1rem', 
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Download size={20} /> Download Software ZIP
          </a>
          <button onClick={onBack} className="btn" style={{ padding: '0.8rem 1.5rem' }}>
            Back to Font Downloader
          </button>
        </div>
      </div>

    </div>
  );
};

export default EditorPage;
