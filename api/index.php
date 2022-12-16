<?php
include __DIR__ . '/../db/index.php';


// var_dump($database);
header('Content-type: application/json');

echo json_encode($database);

?>