<?php

namespace app\controllers;

use app\core\Controller;

class CountersController extends Controller
{
	public function indexAction()
	{
		extract($this->cfg);

        $id = empty($_REQUEST['counterid']) ? 0 : strval($_REQUEST['counterid']);
        $data = $this->model->GetDataJsonDB('counters', $id);
        $error = '';

        if(empty($data['find']))
        {
            $error = 'counter not found';
        }
        elseif(!isset($_SESSION['login']))
        {
            $error = 'user not found';
        }
        elseif($this->model->checkAclCounter($_SESSION['login'], $data['find']))
        {
            $data['counts'] = empty($data['counts']) ? 1 : intval($data['counts']) + 1;
            $data['lastTime'] = time();

            $result = $this->model->AddArrayJsonDB(
                'counters',
                array($id => $data)
            );
        }
        else
        {
            $error = 'User permission not found';
        }

		$vars = [
			//'info' => $data,
            'error' => $error,
            'type' => !empty($error) ? 'error' : 'success',
			'msg' => !empty($result) ? $this->lang['ADD_USER_COUNT'] : '',
            'page_update' => !empty($_SERVER['HTTP_REFERER']) ? "$fn?page=admin" : ''
		];

		$this->view->renderJson($vars);
	}

}