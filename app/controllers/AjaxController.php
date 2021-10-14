<?php

namespace app\controllers;

use app\core\Controller;

class AjaxController extends Controller
{
	public function logoutAction()
	{
		$this->view->checkAjax();

		unset($_SESSION);
		session_destroy();
		session_unset();

		$vars = array(
			'type' => 'success',
			'msg' => $this->lang['GOOD_OUT'],
			'error' => '',
			'page_update' => $this->cfg['fn'] . '?page=login',
		);

		$this->view->renderAjax($vars);
	}

	public function loginCheckedAction()
	{
		$this->view->checkAjax();

		$login = isset($_POST['login']) ? strval($_POST['login']) : '';
		$password = isset($_POST['password']) ? strval($_POST['password']) : '';
		$user = $this->model->GetDataJsonDB('users', $login);

		if(!empty($user['salt']) && !empty($user['password']))
		{
			$checkHash = $this->model->generateHashJsonDB($password, $user['salt']) == $user['password'] ? true : false;

			if($checkHash)
			{
				$_SESSION = $user;
				$_SESSION['login'] = $login;
				$_SESSION['authorize']['id'] = $login;

				if(is_array($this->cfg['admins']) && in_array($login, $this->cfg['admins']))
				{
					$_SESSION['admin'] = true;
				}
		
				$msg = $this->lang['GOOD_LOGIN'];
				$page_update = $this->cfg['fn'] . '?page=ucp';
			}
			else
			{
				$error = $this->lang['BED_PASS'];
			}
		}
		else
		{
			$error = $this->lang['BED_LOGIN'];
		}
		
		$vars = array(
			'type' => !empty($error) ? 'error' : 'success',
			'msg' => empty($error) && isset($msg) ? $msg : '',
			'error' => empty($error) ? '' : (is_array($error) ? implode('<br>', $error) : $error),
			'page_update' => isset($page_update) ? $page_update : '',
		);

		$this->view->renderAjax($vars);
	}

	public function registerAction()
	{
		$this->view->checkAjax();

		$type = 'error';
		$msg = $page_update = '';
		$error = array();

		if(isset($_POST['checkUserLogin']) && strcasecmp($_POST['checkUserLogin'], 'on') === 0)
		{
			$login = isset($_POST['login']) ? strval($_POST['login']) : '';
			$password = isset($_POST['password']) ? strval($_POST['password']) : '';
			$confirm = isset($_POST['confirm_password']) ? strval($_POST['confirm_password']) : '';
			$email = isset($_POST['email']) ? strval($_POST['email']) : '';
			$name = isset($_POST['name']) ? strval($_POST['name']) : '';
			$error = $this->model->ValidAllData($login, $password, $confirm, $email, $name);

			if(empty($error))
			{
				$createUser = $this->model->AddDataJsonDB('users', array(
					'login' => $login,
					'password' => $this->model->generateHashJsonDB($password),
					'email' => $email,
					'name' => $name,
				));

				if($createUser)
				{
					$type = 'success';
					$msg = $this->lang['USER_ADD'];
					$page_update = $this->cfg['fn'] . '?page=registerSuccess';
				}
				else
				{
					$msg = $this->lang['ERROR_ADD'];
				}
			}
		}
		else
		{
			$error[] = $this->lang['ERROR_FORM'];
		}

		$errorOut = empty($error) ? '' : (is_array($error) ? implode('<br>', $error) : $error);

		$array = array(
			'type'			=> $type,
			'error'			=> $errorOut,
			'msg'			=> $msg,
			'page_update'	=> $page_update,
		);

		$this->view->renderAjax($array);
	}

	public function validatorAction()
	{
		$this->view->checkAjax();

		$type = 'error';
		$error = array();
		$msg = $page_update = '';

		if(!empty($_POST['action']) && isset($_POST['account']))
		{
			$data = isset($_POST['account']) ? strval($_POST['account']) : '';

			if(strcasecmp($_POST['action'], 'login') === 0)
			{
				$error = $this->model->ValidLogin($data);
			}
			elseif(strcasecmp($_POST['action'], 'password') === 0)
			{
				$error = $this->model->ValidPassword($data);
			}
			elseif(strcasecmp($_POST['action'], 'confirm_password') === 0)
			{
				$error = $this->model->ValidPassword($data);

				if(empty($error))
				{
					$confirm = isset($_POST['confirm']) ? strval($_POST['confirm']) : '';
					$error = $this->model->ValidPasswordConfirm($data, $confirm);
				}
			}
			elseif(strcasecmp($_POST['action'], 'mail') === 0)
			{
				$error = $this->model->ValidMail($data);
			}
			elseif(strcasecmp($_POST['action'], 'name') === 0)
			{
				$error = $this->model->ValidName($data);
			}
		}
		else
		{
			$error[] = $this->lang['ERROR'];
			$msg = $this->lang['ERROR_DATA'];
		}

		if(empty($msg) && empty($error))
		{
			$type = 'success';
			$msg = $this->lang['GOOD'];
		}

		$array = array(
			'type'			=> $type,
			'error'			=> !empty($error) && is_array($error) ? implode('<br>', $error) : $error,
			'msg'			=> $msg,
			'page_update'	=> $page_update,
		);

		$this->view->renderAjax($array);
	}

}