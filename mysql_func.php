<?php
 
// Отключить все сообщения об ошибках
error_reporting(0);
// данный модуль содержит функции являющиеся оболочками стандартным php функциям работы с
// mysql, использование данных функций позволяет упростить код, и использование БД, все
// описанные здесь функции содержат обработку ошибок.

function mysql_con_sel() {
    // подключаем конфигурационный файл
    require("config.php");

    $mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
//    $mysqli = new mysqli($DB_HOSTNAME, $USERNAME, $PASSWORD, $DB_NAME);
        if($mysqli) {
            //echo "Connection succesful";
        }else 
            die ("Problem with connection" . mysqli_connect_error());
/*	$mysqli = new mysqli("localhost","andrei","tO8JXaGxWFsyk0IL","andrei");
if (mysqli_connect_errno()) {
   printf("Подключение к серверу MySQL невозможно. Код ошибки: %s\n", mysqli_connect_error());
   exit;
}
	//mysqli_select_db("client84642_and");
	//$conn=mysql_connect("localhost","luks","a6deb276b56b");
	//mysql_select_db("luks");*/
	mysqli_query($mysqli, "SET NAMES utf8");
    return($mysqli);
}



?>