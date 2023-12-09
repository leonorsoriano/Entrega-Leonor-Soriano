<!DOCTYPE html>
<html>
<head>
    <title>Respuesta del formulario</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["user_name"];
        echo "Bienvenido, $nombre!";
    }
    ?>
</body>
</html>