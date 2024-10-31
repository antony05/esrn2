<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Archivos y Carpetas</title>
    <style>
        body { font-family: Arial, sans-serif; }
        ul { list-style-type: none; padding: 0; }
        li { padding: 5px 0; }
    </style>
</head>
<body>
    <h1>Contenido de la Carpeta</h1>
    <ul>
        <?php
        // Cambia "nombre_de_carpeta" a la ruta relativa de la carpeta que quieres listar
        $directory = __DIR__ . '/Bibloteca/';

        // Verifica que la carpeta existe
        if (is_dir($directory)) {
            // Abre el directorio
            if ($dir = opendir($directory)) {
                // Lee el contenido de la carpeta
                while (($file = readdir($dir)) !== false) {
                    if ($file !== '.' && $file !== '..') { // Ignora las carpetas especiales . y ..
                        $path = $directory . '/' . $file;
                        // Verifica si es archivo o carpeta
                        $type = is_dir($path) ? '[Carpeta]' : '[Archivo]';
                        echo "<li>$type $file</li>";
                    }
                }
                closedir($dir);
            } else {
                echo "<li>No se pudo abrir el directorio.</li>";
            }
        } else {
            echo "<li>El directorio no existe.</li>";
        }
        ?>
    </ul>
</body>
</html>
