<?php
session_start();  // Старт сессии
if($_REQUEST['action']=='start'){

$num_starts = 2; // 120Количество запусков скрипта за промежуток времени
$hours = 1; // Количество часов, в течение которых нужно запускать скрипт $num_starts раз.
$time_sec = $hours * 3600; // Количество секунд в цикле запусков
$time_to_start = array(); // Собственно, массив с временами запусков
ignore_user_abort(1);   // Игнорировать обрыв связи с браузером 



//require_once("task.php");
function add_time2start()
{
    global $time_sec, $time_to_start;
    $new_time = time() + rand(0, $time_sec);
    if (!in_array($new_time, $time_to_start)) {   // Если такого времени в массиве нет - добавим
        $time_to_start[] = $new_time;
    } else {
        add_time2start(); // Если такое время уже есть - генерируем заново.
    }
}
$k = 1;
if ($_SESSION["num_st"] == "" || $_SESSION["num_st"][$num_starts-1] < time()) {   // проверка, что в сессию не записаны данные и что эти данные не устарели.
    do {
        add_time2start($k);                                        
        $k++;
    } while ($k <= $num_starts);
    sort($time_to_start, SORT_NUMERIC);       
    $_SESSION["num_st"] = $time_to_start;
}

//$_SESSION["num_st"] = [time()+30]; // приблизительно раз в 30 секунд

$start_time = microtime(); // Узнаем время запуска скрипта   
$start_array = explode(" ", $start_time); // Разделяем секунды и миллисекунды
$start_time = $start_array[1]; // получаем стартовое время скрипта
$max_exec = ini_get("max_execution_time"); //Получаем максимально возможное время работы скрипта


do {
    $nowtime = time();  // Текущее время
    echo $nowtime . "<br>";
    //// Если текущее время есть в массиве с временами выполнения скрипта......
    if (in_array($nowtime, $_SESSION["num_st"])) {
        // Сокетом цепляемся к файлу с основным содержанием действий
        $http = fsockopen('zadachi.axacode.ru', 80);
        /// заодно передаем ему данные сессии и время когда он должен сработать
        fputs($http, "GET http://zadachi.axacode.ru/filling.php?action=fill&" . session_name() . "=" . session_id() . "&nowtime=$nowtime HTTP/1.0\r\n");
        fputs($http, "Host: zadachi.axacode.ru\r\n");
        fputs($http, "\r\n");
        fclose($http);
    } //// выполнили заданное действие
    // Узнаем текущее время чтобы проверить, дальше ли вести цикл или перезапустить
    $now_time = microtime();
    $now_array = explode(" ", $now_time);
    $now_time = $now_array[1];
    // вычитаем из текущего времени начальное начальное
    $exec_time = $now_time - $start_time + $exec_time;
    /// тормозимся на секунду
    usleep(1000000);
    //Остановка скрипта, работающего в фоновом режиме. Я другого способа не придумал.
    if (file_exists("stop.txt")) exit;
    //Проверяем время работы, если до конца работы скрипта
    //осталось менее 5 секунд, завершаем работу цикла. 
    echo $exec_time."<br>";
    echo $max_exec . "<br>";
} while ($exec_time < ($max_exec - 5));
echo $exec_time . "<br>" . "<br>";

// Запускаем этот же скрипт новым процессом и завершаем работу текущего
$http = fsockopen('zadachi.axacode.ru', 80);
fputs($http, "GET http://zadachi.axacode.ru/start?" . session_name() . "=" . session_id() . "&bu=$max_exec HTTP/1.0\r\n");
fputs($http, "Host: zadachi.axacode.ru\r\n");
fputs($http, "\r\n");
fclose($http); 


}

?>
