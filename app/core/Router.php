<?php

namespace app\core;

use app\core\View;

if(!defined('MY_APP')) exit;

class Router
{
	public $_instance = null;
	protected $routes = [];
	protected $params = [];

	public function __construct()
	{
		$arr = require 'data/routes.php';

		foreach ($arr as $key => $val)
		{
			$this->add($key, $val);
		}
	}

	public function add($route, $params)
	{
		$route = '#^'.$route.'$#';
		$this->routes[$route] = $params;
	}

	public function match()
	{
		$url = trim($_SERVER['REQUEST_URI'], '/');

		foreach ($this->routes as $route => $params)
		{
			if (preg_match($route, $url, $matches))
			{
					$this->params = $params;
					return true;
			}
		}

		return false;
	}

	public function run()
	{
		if ($this->match())
		{			
			$class = ucfirst($this->params['controller']).'Controller';
			$path = 'app\controllers\\'.$class;

			if (class_exists($path, true))
			{
				$action = $this->params['action'].'Action';

				if (method_exists($path, $action))
				{
					$controller = new $path($this->params);
					$controller->$action();

				}
				else
				{
					View::errorCode(404, "method $action not found");
				}
			}
			else
			{
				View::errorCode(404, "class $path not exists");
			}
		}
		else
		{
			View::errorCode(404, 'not found');
		}
	}
}