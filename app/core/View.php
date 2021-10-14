<?php

namespace app\core;

if(!defined('MY_APP')) exit;

class View
{
	public $path;
	public $route;
	public $layout = 'default';
	private $cfg = array();

	public function __construct($route, $cfg, $lang)
	{
		$this->cfg = $cfg;
		$this->route = $route;
		$this->path = $route['controller'].'/'.$route['action'];
		$this->lang = $lang;
	}

	public function render($title, $vars = [])
	{
		extract($vars);
		$path = 'template/views/'.$this->path.'.php';

		if(file_exists($path))
		{
			$content = '';

			ob_start();
			require $path;
			$content = ob_get_clean();

			if($this->checkAjax('not_redirect'))
			{
				$stopAjax = 0;
				require 'template/views/layouts/'.$this->layout.'.php';
			}
			else
			{
				echo $content;
			}
		}
		else
		{
			echo 'tpl not found ' . $path;
		}
	}

	public function renderAjax($vars = [])
	{
		echo json_encode(array(
			'type' => $vars['type'],
			'msg' => $vars['msg'],
			'error' => $vars['error'],
			'page_update' => $vars['page_update'],
		));
		exit;
	}

	public function renderJson($vars = [])
	{
		echo json_encode($vars);
		exit;
	}

	public function redirect($url)
	{
		header('location: '.$url);
		exit;
	}

	public static function errorCode($code, $title = '')
	{
		http_response_code($code);
		$path = 'template/views/errors/'.$code.'.php';

		if(file_exists($path))
		{
			$cfg = require 'data/config.php';
			$lang = require 'data/language/' . $cfg['language'] . '/error.php';
			$fn = $cfg['fn'];
			require $path;
		}

		exit;
	}

	public function message($status, $message)
	{
		exit(json_encode(['status' => $status, 'message' => $message]));
	}

	public function location($url)
	{
		exit(json_encode(['url' => $url]));
	}

	public function checkAjax($type = 'redirect')
	{
		if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || !is_string($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest')
		{
			if($type == 'redirect')
			{
				$this->redirect($this->cfg['fn']);
			}

			return true;
		}

		return false;
	}
}