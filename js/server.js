// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Ruta para obtener archivos y carpetas de una ruta específica
app.get("/list-directory", (req, res) => {
  const directoryPath = path.join(__dirname, "Bibloteca"); // Cambia "tu_carpeta" por el nombre de la carpeta que deseas listar

  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      return res.status(500).send("Error al leer la carpeta.");
    }

    const fileList = files.map((file) => ({
      name: file.name,
      isDirectory: file.isDirectory(),
    }));

    res.json(fileList);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en https://escuelarural2ev.com/:${PORT}`);
});
