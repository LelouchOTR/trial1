
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 9200;

// specify the location for the uploaded data (Spezifiziere den Speicherort für hochgeladene Dateien)
const storage = multer.diskStorage({
  destination: './uploads_pictures/',  // folder has to exist (Der Ordner muss existieren)
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// terminal for the picture-upload (Endpunkt für den Bild-Upload)
app.post('/upload_pictures', upload.single('image'), (req, res) => {
  // the url of the uploaded picture will be here as an output (Hier wird die URL des hochgeladenen Bildes als Antwort gesendet)
  const imageUrl = `http://localhost:9200/uploads_pictures/${req.file.filename}`;
  res.json({ imageUrl });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});