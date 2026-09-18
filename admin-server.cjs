const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'admin-public')));

const fontsJsonPath = path.join(__dirname, 'public', 'fonts.json');
const fontsDirPath = path.join(__dirname, 'public', 'fonts');

const appsJsonPath = path.join(__dirname, 'public', 'apps.json');
const appsDirPath = path.join(__dirname, 'public', 'apps');

// Ensure directories exist
if (!fs.existsSync(fontsDirPath)) fs.mkdirSync(fontsDirPath, { recursive: true });
if (!fs.existsSync(appsDirPath)) fs.mkdirSync(appsDirPath, { recursive: true });

// Multer storage configs
const fontStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, fontsDirPath),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const fontUpload = multer({ storage: fontStorage });

const appStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, appsDirPath),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const appUpload = multer({ storage: appStorage });

// --- FONTS API ---
app.get('/api/fonts', (req, res) => {
  try {
    const data = fs.readFileSync(fontsJsonPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    if (err.code === 'ENOENT') res.json([]);
    else res.status(500).json({ error: 'Failed to read fonts.json' });
  }
});

app.post('/api/fonts', fontUpload.single('fontFile'), (req, res) => {
  try {
    let fonts = [];
    if (fs.existsSync(fontsJsonPath)) fonts = JSON.parse(fs.readFileSync(fontsJsonPath, 'utf8'));

    const { id, name, author, style, isFeatured, previewText, characterMap, cssString, existingFile } = req.body;
    const fileName = req.file ? req.file.originalname : existingFile;

    const newFont = {
      id: id || Date.now().toString(),
      name, author, style, file: fileName,
      cssString: cssString || 'sans-serif',
      isFeatured: isFeatured === 'true' || isFeatured === true,
      dateAdded: new Date().toISOString().split('T')[0],
      previewText: previewText || '',
      characterMap: characterMap || ''
    };

    const existingIndex = fonts.findIndex(f => f.id === newFont.id);
    if (existingIndex >= 0) {
      newFont.dateAdded = fonts[existingIndex].dateAdded;
      fonts[existingIndex] = newFont;
    } else fonts.push(newFont);

    fs.writeFileSync(fontsJsonPath, JSON.stringify(fonts, null, 2));
    res.json({ success: true, font: newFont });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save font' });
  }
});

app.delete('/api/fonts/:id', (req, res) => {
  try {
    let fonts = JSON.parse(fs.readFileSync(fontsJsonPath, 'utf8'));
    fonts = fonts.filter(f => f.id !== req.params.id);
    fs.writeFileSync(fontsJsonPath, JSON.stringify(fonts, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete font' });
  }
});

// --- APPS API ---
app.get('/api/apps', (req, res) => {
  try {
    const data = fs.readFileSync(appsJsonPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    if (err.code === 'ENOENT') res.json([]);
    else res.status(500).json({ error: 'Failed to read apps.json' });
  }
});

app.post('/api/apps', appUpload.single('appFile'), (req, res) => {
  try {
    let apps = [];
    if (fs.existsSync(appsJsonPath)) apps = JSON.parse(fs.readFileSync(appsJsonPath, 'utf8'));

    const { id, name, version, existingFile } = req.body;
    const fileName = req.file ? req.file.originalname : existingFile;

    const newApp = {
      id: id || Date.now().toString(),
      name, version, file: fileName,
      dateAdded: new Date().toISOString().split('T')[0]
    };

    const existingIndex = apps.findIndex(a => a.id === newApp.id);
    if (existingIndex >= 0) {
      newApp.dateAdded = apps[existingIndex].dateAdded;
      apps[existingIndex] = newApp;
    } else apps.push(newApp);

    fs.writeFileSync(appsJsonPath, JSON.stringify(apps, null, 2));
    res.json({ success: true, app: newApp });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save app' });
  }
});

app.delete('/api/apps/:id', (req, res) => {
  try {
    let apps = JSON.parse(fs.readFileSync(appsJsonPath, 'utf8'));
    apps = apps.filter(a => a.id !== req.params.id);
    fs.writeFileSync(appsJsonPath, JSON.stringify(apps, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete app' });
  }
});

app.listen(PORT, () => {
  console.log(`Admin dashboard running on http://localhost:${PORT}`);
});
