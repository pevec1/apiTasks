<?php
// Запускаем этот же скрипт новым процессом и завершаем работу текущего
session_start();  // Старт сессии

function show_tpl($vars, $tpl_name = 'index.tpl', $admin = false)
{
    $vars["LINKS"] = 'http://' . getenv("SERVER_NAME");
    $arrContextOptions = array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
        ),
    );
    $tpl = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/' . $tpl_name, false, stream_context_create($arrContextOptions));
    foreach ($vars as $key => $val) {
        $tpl = str_replace('{{' . $key . '}}', $val, $tpl);
    }
    $tpl = preg_replace('|{{.*?}}|si', '', $tpl);
    echo $tpl;
}


$vars["CONTENT"] = '<!--<div style="font-size: 1em;"></div>-->';

show_tpl($vars, 'index.tpl');

?>