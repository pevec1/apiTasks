<?php
header("Content-type: application/json; charset=utf-8");
session_start();
require_once("mysql_func.php");
$mysqli = mysql_con_sel();

if ($_REQUEST['action'] == 'fill') {

    //$query = mysqli_query($mysqli, "select * from `list` limit 1000");
    
    $query = mysqli_query($mysqli, "truncate table `list`");
    //$result = mysql_que($query);
    for ($i = 1; $i <= 1000; $i++) {
        $title = "Задача " . $i;
        $query = mysqli_query($mysqli, "insert into `list` (`title`, `date`) values ('" . $title . "',  DATE_ADD(NOW(), INTERVAL " . $i . " HOUR))");
    }
    $query = mysqli_query($mysqli, "truncate table `list`");
    for ($i = 1; $i <= 1000; $i++) {
        $title = "Задача " . $i;
        $author = "Автор ".$i;
        $status = "Статус ".$i;
        $description = "Описание ".$i;
        $query = mysqli_query($mysqli, "insert into `list` (`title`, `date`, `author`, `status`, `description`) values ('" . $title . "',  DATE_ADD(NOW(), INTERVAL " . $i . " HOUR), '" . $author . "', '" . $status . "', '" . $description . "')");
    }
}

?>