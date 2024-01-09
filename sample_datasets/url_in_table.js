// Annahme: Die Tabelle hat eine ID mit dem Namen "imageTable"
const imageTable = document.getElementById('imageTable');

function uploadImage() {
  const fileInput = document.getElementById('imageInput');
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://localhost:9200/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Erhaltenes Bild-URL zur Tabelle hinzufügen
      const imageUrl = data.imageUrl;
      const newRow = imageTable.insertRow();
      const cell = newRow.insertCell(0);
      cell.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" width="100" height="100">`;
    })
    .catch(error => {
      console.error('Fehler beim Upload:', error);
    });
  } else {
    console.error('Bitte wähle ein Bild aus.');
  }
}