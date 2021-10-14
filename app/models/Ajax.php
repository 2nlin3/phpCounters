<?php

namespace app\models;

use app\core\Model;

class Ajax extends Model
{
	public function ValidLogin($name)
	{
		if(empty($name) || !is_string($name))
		{
			$msg[] = $this->lang['LOGIN_INVALID'];
		}

		if(mb_strlen($name) < 6 || mb_strlen($name) > 12)
		{
			$msg[] = $this->lang['LOGIN_INVAL_2'];
		}

		if(preg_match('/[^a-z0-9]+/i', $name))
		{
			$msg[] = $this->lang['LOGIN_INVAL_3'];
		}

		$check = $this->checkJsonDB('users', 'user', $name);

		if($check)
		{
			$msg[] = $this->lang['LOGIN_INVAL_4'];
		}

		return isset($msg) ? $msg : false;
	}

	public function ValidPassword($name)
	{
		if(empty($name) || !is_string($name))
		{
			$msg[] = $this->lang['PASS_INVAL_1'];
		}

		if(mb_strlen($name) < 6 || mb_strlen($name) > 20)
		{
			$msg[] = $this->lang['PASS_INVAL_2'];
		}

		if(preg_match('/[A-Za-z]/', $name) && preg_match('/[0-9]/', $name));
		else
		{
			$msg[] = $this->lang['PASS_INVAL_3'];
		}

		return isset($msg) ? $msg : false;
	}

	public function ValidPasswordConfirm($pass, $confirm)
	{
		if(strcmp($pass, $confirm) !== 0)
		{
			$msg[] = $this->lang['PASS_INVAL_4'];
		}

			return isset($msg) ? $msg : false;
		}

	public function ValidMail($email)
	{
		if(mb_strlen($email) < 5 || mb_strlen($email) > 254)
		{
			$msg[] = $this->lang['MAIL_INVAL_1'];
		}

		if(!filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			$msg[] = $this->lang['MAIL_INVAL_2'];
		}

		$check = $this->checkJsonDB('users', 'email', $email);

		if($check)
		{
			$msg[] = $this->lang['MAIL_INVAL_3'];
		}

		return isset($msg) ? $msg : false;
	}

	public function ValidName($name)
	{
		if(empty($name) || !is_string($name))
		{
			$msg[] = $this->lang['NAME_INVAL_1'];
		}

		if(mb_strlen($name) < 2 || mb_strlen($name) > 15)
		{
			$msg[] = $this->lang['NAME_INVAL_2'];
		}

		if(preg_match('/[^a-zа-я]+$/i', $name))
		{
			$msg[] = $this->lang['NAME_INVAL_3'];
		}

		return isset($msg) ? $msg : false;
	}

	public function ValidAllData($login, $password, $confirm, $email, $name)
	{
		$error[] = $this->ValidLogin($login);
		$error[] = $this->ValidPassword($password);
		$error[] = $this->ValidPasswordConfirm($password, $confirm);
		$error[] = $this->ValidMail($email);
		$error[] = $this->ValidName($name);
		$out = '';

		foreach($error as $v)
		{
			if(empty($v))
			{

			}
			elseif(is_array($v))
			{
				foreach($v as $line)
				{
					$out .= is_array($line) ? implode('<br>', $line) : $line;
				}
			}
			else
			{
				$out .= $v;
			}
		}

		return !empty($out) ? $out : false;
	}
	
}