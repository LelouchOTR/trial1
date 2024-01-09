const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// specify the location for the uploaded data (Spezialisiere den Speicherort für hochgeladene Dateien)
const storage = multer.diskStorage({
  destination: './uploads/',  // folder has to exist (Der Ordner muss existieren)
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// terminal for the picture-upload (Endpunkt für den Bild-Upload)
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'Bild erfolgreich hochgeladen' });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});