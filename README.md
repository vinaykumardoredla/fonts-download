# Managing Your Font Downloader

This guide explains how to manage the fonts displayed on your static GitHub Pages site, and how to customize the default preview texts and character maps.

## 1. How to Add and Manage Fonts (Tabs & Sorting)

Because GitHub Pages is a static host without a backend database, all of your font data is controlled by a single JSON file located at:
**`public/fonts.json`**

To manage what shows up on your site, open that file. You will see an array of font objects that looks like this:

```json
{
  "id": "1",
  "name": "Inter",
  "author": "Rasmus Andersson",
  "style": "Sans Serif",
  "file": "inter.ttf",
  "cssString": "sans-serif",
  "isFeatured": true,
  "dateAdded": "2026-08-01"
}
```

### Controlling the Tabs
- **All Fonts Tab:** Every font you add to this JSON file will automatically appear here.
- **Featured Tab:** To make a font appear in the "Featured" tab, simply set `"isFeatured": true`. If you don't want it featured, set it to `false`.
- **Latest Tab:** The "Latest" tab automatically sorts your fonts by the `"dateAdded"` property, showing the newest dates first. Make sure your dates are in `YYYY-MM-DD` format (e.g., `"2026-08-15"`).

*Note: Whenever you add new `.ttf` or `.otf` font files, drop them into the `public/fonts/` folder and add a new entry to `fonts.json` linking to that file name.*

---

## 2. Changing the Default Preview Text

The default text that appears when a user first sees a font card is controlled in the React components.

**For the small Font Cards on the main page:**
1. Open `src/components/FontCard.jsx`
2. Look for this line near the top (around line 5):
   ```javascript
   const [testText, setTestText] = useState('The quick brown fox jumps over the lazy dog');
   ```
3. Change the text inside the quotes to whatever you wish.

**For the large Live Tester inside the Details Modal:**
1. Open `src/components/FontDetails.jsx`
2. Look for this line near the top (around line 5):
   ```javascript
   const [testText, setTestText] = useState('The quick brown fox jumps over the lazy dog. 0123456789');
   ```
3. Change the text inside the quotes.

---

## 3. Changing the Character Map

The character map is currently hardcoded in the Details Modal so users can see exactly which glyphs are supported by the font.

To customize which characters are shown:
1. Open `src/components/FontDetails.jsx`
2. Scroll to the very bottom, just above the `</div>` tags.
3. You will see this section:
   ```html
   <h3>Character Map</h3>
   <div style={{ wordBreak: 'break-all', fontSize: '1.5rem', ... }}>
     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
     abcdefghijklmnopqrstuvwxyz<br/>
     0123456789<br/>
     !@#$%^&*()_+~`-=[]{}|;':",./<>?
   </div>
   ```
4. Simply edit, add, or remove any characters inside that `<div>`. The `<br/>` tags are used to force a line break between sets of characters.

---

### Remember to Rebuild!
Whenever you make changes to the `.jsx` files (Preview Text or Character Map), you **must** run `npm run build` in your terminal to generate the new static files for GitHub Pages. 

*(If you only change `public/fonts.json`, you do not need to rebuild, you just need to push the updated JSON file to GitHub).*
