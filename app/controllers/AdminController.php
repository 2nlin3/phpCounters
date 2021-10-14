<?php

namespace app\controllers;

use app\core\Controller;

class AdminController extends Controller
{
	public function indexAction()
	{
		extract($this->cfg);

		$counters = $this->model->getJsonDB('counters');
		$out = '';
		$fn = $this->cfg['fn'];

		foreach($counters->data as $k => $v)
		{
			$v['lastTime'] = empty($v['lastTime']) ? '' : date('d-m-Y H:i:s', $v['lastTime']);
			$title = print_r($v, 1);
			$out .= "
			<a href='$fn?counterid=$k' title='data: $title' target='_blank'>
				$k ($v[counts]) <small><small>$v[lastTime]</small></small>
			</a><br>
			";
		}

		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
			'onlyIndex' => true,
			'data' => $out,
		];

		$this->view->render($this->lang['INDEX'], $vars);
	}

}