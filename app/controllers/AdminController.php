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
		$edit = isset($_SESSION['admin']) ? true : false;

		foreach($counters->data as $k => $v)
		{
			$v['lastTime'] = empty($v['lastTime']) ? '' : date('d-m-Y H:i:s', $v['lastTime']);

			$title = print_r($v, 1);
			$out .= "
			<a class='btn btn-primary btn-sm my-2 small' href='javascript:void(0)' title='$title' onclick='javascript:form_submit_ajax(\"$fn?counterid=$k\", \"send\")'>
				<i class='fas fa-external-link-alt'></i>
				$k
			</a>

			" . (empty($edit) ? '' : "
			<a class='out' href='javascript:void(0)' onclick='javascript:showModal(\"$fn?page=admin&edit=$k\");' data-id='edit-$k'>
				{$this->lang['EDIT']}
			</a>
			") . "
			($v[counts]) <small><small>$v[lastTime]</small></small>
			<br>
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

	public function editAction()
	{
		extract($this->cfg);

		$id = empty($_REQUEST['edit']) ? 0 : strval($_REQUEST['edit']);
		$data = $this->model->getJsonDB('counters');

		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
			'onlyIndex' => true,
			'id' => $id,
			'data' => $data->data[$id],
		];

		$this->view->render('EDIT', $vars);
	}

	public function saveAction()
	{
		extract($this->cfg);

		$oldCountID = empty($_REQUEST['oldCountID']) ? 0 : strval($_REQUEST['oldCountID']);
		$id = empty($_REQUEST['name']) ? 0 : strval($_REQUEST['name']);
		$type = 'success';
		$msg = 'success';
		$page_update = "$fn?page=admin";
		$error = '';

		$newData[$id] = [
			'find' => !empty($_POST['find']) ? explode("\r\n", trim($_POST['find'])) : array(),
			'lastTime' => !empty($_POST['time']) ? strtotime($_POST['time']) : time(),
			'counts' => !empty($_POST['counts']) ? intval($_POST['counts']) : 0,
		];

		$this->model->Delete('counters', $oldCountID);

		$result = $this->model->AddArrayJsonDB(
			'counters',
			$newData
		);

		$vars = [
			'seo' => $seo,
			'home' => $home,
			'mod' => $this->route['action'],
			'fn' => $fn,
			'onlyIndex' => true,
			'id' => $id,
			'type' => $type,
			'msg' => !empty($result) ? 'Ok' : 'Error',
			'error' => $error,
			'page_update' => $page_update,
			'data' => isset($data->data[$id]) ? $data->data[$id] : '',
		];

		$this->view->renderAjax($vars);
	}
}