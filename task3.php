<?php
header("Content-type: application/json; charset=utf-8");
session_start();
require_once("mysql_func.php");
$mysqli = mysql_con_sel();

if ($_REQUEST['action'] == 'search') {

    $query = mysqli_query($mysqli, "select * from `list` limit 1000");
    

    $post = array("search");

    while ($row = mysqli_fetch_assoc($query)) {
        array_push($post, $row['id'], $row['title'], $row['date'], $row['author'], $row['status'], $row['description']);
   }

    $_SESSION['parts_id'] = $row['id'];
    echo json_encode($post);
    exit();
}

?>