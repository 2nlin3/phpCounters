<?php

namespace app\controllers;

use app\core\Controller;

class PageController extends Controller {

	public function indexAction() {
		extract($this->cfg);
		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
			'onlyIndex' => true,
		];

		$this->view->render($this->lang['INDEX'], $vars);
	}

	public function errorAction() {
		extract($this->cfg);
		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
		];

		$this->view->render($this->view->lang['ERROR'], $vars);
	}

	public function registerSuccessAction() {
		extract($this->cfg);
		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
		];

		$this->view->render($this->lang['GOOD_REG'], $vars);
	}

	public function ucpAction()
	{
		extract($this->cfg);

		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
		];

		$this->view->render($this->lang['UCP'], $vars);
	}

	public function loginAction() {
		extract($this->cfg);
		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
		];

		$this->view->render($this->lang['RUN_LOGIN'], $vars);
	}

	public function registerAction() {
		extract($this->cfg);
		$result = $this->cfg;
		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
		];

		$this->view->render($this->lang['RUN_REGISTER'], $vars);
	}

	public function indexRender($title, $vars = [])
	{
		extract($vars);
		$path = 'app/views/'.$this->view->path.'.php';

		if(isset($_SESSION['authorize']['id']))
		{
			$home = 'ucp';
		}

		if (file_exists($path)) {
			ob_start();
			require $path;
			$content = ob_get_clean();
			require 'app/views/layouts/'.$this->view->layout.'.php';
		}
	}

}