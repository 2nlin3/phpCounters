<?php

use app\core\Router;

define('MY_APP', true);
date_default_timezone_set('Europe/Moscow');
error_reporting(E_ALL &~ E_DEPRECATED);
ini_set('display_errors', 1);
setlocale(LC_ALL, 'en_US.utf8');

spl_autoload_register(function($class)
{
	$path = str_replace('\\', '/', "$class.php");

	if(file_exists($path))
	{
		require_once $path;
	}
	else
	{
		throw new Exception("No such file for autoload: $path");
		exit;
	}
});

$router = new router;
$router->run();
