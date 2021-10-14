<?php

namespace app\core;

use app\core\View;

if(!defined('MY_APP')) exit;

abstract class Controller
{
	public $route;
	public $view;
	public $acl;
	public $cfg;
	public $lang;

	public function __construct($route)
	{
		$this->route = $route;

		if(session_status() == PHP_SESSION_NONE)
		{
			session_start();
		}

		if(!$this->checkAcl())
		{
			View::errorCode(403);
		}

		$this->cfg = require 'data/config.php';

		if(file_exists('data/language/' . $this->cfg['language'] . '/' . $route['controller'] . '.php'))
		{
			$this->lang = require 'data/language/' . $this->cfg['language'] . '/' . $route['controller'] . '.php';
		}

		$this->model = $this->loadModel($route['controller']);
		$this->view = new View($route, $this->cfg, $this->lang);
	}

	public function loadModel($name)
	{
		$path = 'app\models\\'.ucfirst($name);

		if(class_exists($path))
		{
			return new $path($this->cfg, $this->route, $this->lang);
		}
	}

	public function checkAcl()
	{
		$this->acl = require 'app/acl/'.$this->route['controller'].'.php';

		if ($this->isAcl('all'))
		{
			return true;
		}
		elseif (isset($_SESSION['authorize']['id']) and $this->isAcl('authorize'))
		{
			return true;
		}
		elseif (!isset($_SESSION['authorize']['id']) and $this->isAcl('guest'))
		{
			return true;
		}
		elseif (isset($_SESSION['admin']) and $this->isAcl('admin'))
		{
			return true;
		}

		return false;
	}

	public function isAcl($key)
	{
		return in_array($this->route['action'], $this->acl[$key]);
	}
}