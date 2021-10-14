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

        if(empty($data['find']))
        {
            $result = 'counter not found';
        }
        elseif(!isset($_SESSION['login']))
        {
            $result = 'user not found';
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
            $result = 'User permission not found';
        }

		$vars = [
			//'info' => $data,
			'result' => isset($result) ? $result : false,
		];

		$this->view->renderJson($vars);
	}

}