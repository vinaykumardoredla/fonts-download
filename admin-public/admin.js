let fontsData = [];
let appsData = [];

const API_FONTS = 'http://localhost:3000/api/fonts';
const API_APPS = 'http://localhost:3000/api/apps';

// FONTS LOGIC
const fontForm = document.getElementById('fontForm');
const fontList = document.getElementById('fontList');
const fontCancelBtn = document.getElementById('fontCancelBtn');

async function loadFonts() {
    try {
        const res = await fetch(API_FONTS);
        fontsData = await res.json();
        renderFonts();
    } catch (err) { fontList.innerHTML = '<p style="color:red">Error loading fonts</p>'; }
}

function renderFonts() {
    if (fontsData.length === 0) return fontList.innerHTML = '<p>No fonts yet.</p>';
    fontList.innerHTML = fontsData.map(font => `
        <div class="list-item">
            <div>
                <strong>${font.name}</strong> <span style="color:#71717a">by ${font.author}</span>
                ${font.isFeatured ? '<span class="badge">Featured</span>' : ''}
            </div>
            <div>
                <button class="btn" onclick="editFont('${font.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteFont('${font.id}')">Del</button>
            </div>
        </div>
    `).join('');
}

window.editFont = (id) => {
    const font = fontsData.find(f => f.id === id);
    if (!font) return;
    document.getElementById('fontFormTitle').textContent = 'Edit Font';
    fontCancelBtn.style.display = 'block';
    document.getElementById('currentFileDisplay').textContent = `File: ${font.file}`;
    document.getElementById('fontId').value = font.id;
    document.getElementById('existingFile').value = font.file || '';
    document.getElementById('fontName').value = font.name;
    document.getElementById('fontAuthor').value = font.author;
    document.getElementById('fontStyle').value = font.style;
    document.getElementById('cssString').value = font.cssString || 'sans-serif';
    document.getElementById('isFeatured').checked = font.isFeatured;
    document.getElementById('previewText').value = font.previewText || '';
    document.getElementById('characterMap').value = font.characterMap || '';
    document.getElementById('fontFile').required = false;
};

fontCancelBtn.addEventListener('click', () => {
    fontForm.reset();
    document.getElementById('fontFormTitle').textContent = 'Add New Font';
    fontCancelBtn.style.display = 'none';
    document.getElementById('currentFileDisplay').textContent = '';
    document.getElementById('fontId').value = '';
    document.getElementById('fontFile').required = true;
});

window.deleteFont = async (id) => {
    if (!confirm('Delete font?')) return;
    await fetch(`${API_FONTS}/${id}`, { method: 'DELETE' });
    loadFonts();
};

fontForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const id = document.getElementById('fontId').value;
    if (id) formData.append('id', id);
    formData.append('existingFile', document.getElementById('existingFile').value);
    formData.append('name', document.getElementById('fontName').value);
    formData.append('author', document.getElementById('fontAuthor').value);
    formData.append('style', document.getElementById('fontStyle').value);
    formData.append('cssString', document.getElementById('cssString').value);
    formData.append('isFeatured', document.getElementById('isFeatured').checked);
    formData.append('previewText', document.getElementById('previewText').value);
    formData.append('characterMap', document.getElementById('characterMap').value);

    const fileInput = document.getElementById('fontFile');
    if (fileInput.files.length > 0) formData.append('fontFile', fileInput.files[0]);
    else if (!id) return alert("Select a font file.");

    await fetch(API_FONTS, { method: 'POST', body: formData });
    fontCancelBtn.click();
    loadFonts();
});


// APPS LOGIC
const appForm = document.getElementById('appForm');
const appList = document.getElementById('appList');
const appCancelBtn = document.getElementById('appCancelBtn');

async function loadApps() {
    try {
        const res = await fetch(API_APPS);
        appsData = await res.json();
        renderApps();
    } catch (err) { appList.innerHTML = '<p style="color:red">Error loading apps</p>'; }
}

function renderApps() {
    if (appsData.length === 0) return appList.innerHTML = '<p>No apps yet.</p>';
    appList.innerHTML = appsData.map(app => `
        <div class="list-item">
            <div>
                <strong>${app.name}</strong> <span style="color:#71717a">v${app.version}</span>
            </div>
            <div>
                <button class="btn" onclick="editApp('${app.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteApp('${app.id}')">Del</button>
            </div>
        </div>
    `).join('');
}

window.editApp = (id) => {
    const app = appsData.find(a => a.id === id);
    if (!app) return;
    document.getElementById('appFormTitle').textContent = 'Edit App';
    appCancelBtn.style.display = 'block';
    document.getElementById('currentAppFileDisplay').textContent = `File: ${app.file}`;
    document.getElementById('appId').value = app.id;
    document.getElementById('existingAppFile').value = app.file || '';
    document.getElementById('appName').value = app.name;
    document.getElementById('appVersion').value = app.version;
    document.getElementById('appFile').required = false;
};

appCancelBtn.addEventListener('click', () => {
    appForm.reset();
    document.getElementById('appFormTitle').textContent = 'Upload Editor App';
    appCancelBtn.style.display = 'none';
    document.getElementById('currentAppFileDisplay').textContent = '';
    document.getElementById('appId').value = '';
    document.getElementById('appFile').required = true;
});

window.deleteApp = async (id) => {
    if (!confirm('Delete app?')) return;
    await fetch(`${API_APPS}/${id}`, { method: 'DELETE' });
    loadApps();
};

appForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const id = document.getElementById('appId').value;
    if (id) formData.append('id', id);
    formData.append('existingFile', document.getElementById('existingAppFile').value);
    formData.append('name', document.getElementById('appName').value);
    formData.append('version', document.getElementById('appVersion').value);

    const fileInput = document.getElementById('appFile');
    if (fileInput.files.length > 0) formData.append('appFile', fileInput.files[0]);
    else if (!id) return alert("Select a zip file.");

    await fetch(API_APPS, { method: 'POST', body: formData });
    appCancelBtn.click();
    loadApps();
});

// INIT
document.getElementById('fontFile').required = true;
document.getElementById('appFile').required = true;
loadFonts();
loadApps();
