<?php

namespace app\libs;
namespace app\controllers;
namespace app\core;

use app\libs\jsonDataBase;
use app\core\Controller;

if(!defined('MY_APP')) exit;

abstract class Model
{
	public $jsonDB = NULL;
	public $cfg = NULL;
	public $route = NULL;
	public $lang = NULL;

	public function __construct($cfg, $route, $lang)
	{
		$this->cfg = $cfg;
		$this->route = $route;
		$this->lang = $lang;
	}

	public function ConnectJsonDB($dbName)
	{
		if($this->jsonDB === NULL)
		{
			$this->jsonDB = new jsonDataBase($dbName);
		}
	}

	public function getJsonDB($dbName)
	{
		$this->ConnectJsonDB($dbName);

		return $this->jsonDB;
	}

	public function checkJsonDB($dbName, $type, $name)
	{
		$this->ConnectJsonDB($dbName);

		return $this->jsonDB->checkBase($type, $name);
	}

	public function GetDataJsonDB($dbName, $login)
	{
		$this->ConnectJsonDB($dbName);

		return $this->jsonDB->Read($login);;
	}

	public function generateHashJsonDB($pass, $salt = '')
	{
		return $this->jsonDB->generateHash($pass, $salt);
	}

	public function AddDataJsonDB($dbName, $data)
	{
		$this->ConnectJsonDB($dbName);

		$createUser = $this->jsonDB->Create($data);

		return $createUser;
	}

	public function AddArrayJsonDB($dbName, $data)
	{
		$this->ConnectJsonDB($dbName);

		$createUser = $this->jsonDB->AddArray($data);

		return $createUser;
	}

	public function Delete($dbName, $id)
	{
		$this->ConnectJsonDB($dbName);

		$result = $this->jsonDB->Delete($id);

		return $result;
	}
}