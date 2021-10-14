<?php

namespace app\libs;

if(!defined('MY_APP')) exit;

class jsonDataBase
{
	public $_instance = null;
	public $data = array();
	public $fileName = '';
	public $startData = 2;
	public $salt = '';
	public $fileHeader = "<?php if(!defined('MY_APP')) exit('denied'); /*";

	public static function getInstance($dbName)
	{
		if(is_null(self::$_instance))
		{
			self::$_instance = new jsonDataBase($dbName);  
		}

		return self::$_instance;
	}

	public function __construct($dbName = 'users')
	{
		$this->fileName = "data/db.$dbName.php";
		$this->handle = fopen($this->fileName, "r+");
		$line = 0;
		$file = '';

		if($this->handle)
		{
			while(($buffer = fgets($this->handle, 4096)) !== false)
			{
				$line++;

				if($line < $this->startData)
				{
					continue;
				}
				else
				{
					$file .= $buffer . "\r\n";
				}
			}
		}

		$check = json_decode($file, true);
		$error = json_last_error();

		if(!empty($error))
		{
			//throw new \Exception('Error: ' . var_export($error, 1));
		}

		$this->data = isset($check) ? $check : array();
	}

	public function CheckLogin($user)
	{
		foreach($this->data as $k => $v)
		{
			if($user == $k)
			{
				$error = 'Ошибка! Логин занят.';
				throw new \Exception('Error: ' . var_export($error, 1));
			}
		}
	}

	public function checkBase($type, $str)
	{
		foreach($this->data as $k => $a)
		{
			if(strcasecmp($type == 'user' ? $k : $a[$type], $str) == 0)
			{
				return true;
			}
		}

		return false;
	}

	public function Create($user)
	{
		$this->data = array_merge((array) $this->data, array(
			$user['login'] => array(
				'password'	=> $user['password'],
				'salt' => $this->generateSalt(),
				'email'	=> $user['email'],
				'name'	=> $user['name'],
			)
		));

		$this->Save();

		return true;
	}

	public function AddArray($array)
	{
		$this->data = array_merge((array) $this->data, $array);

		$this->Save();

		return true;
	}

	public function Read($user)
	{
		if(isset($this->data[$user]))
		{
			return $this->data[$user];
		}

		return false;
	}

	public function Update($user)
	{
	   
	}

	public function Delete($user)
	{
		
	}

	private function Save()
	{
		fclose($this->handle);

		$this->handle = fopen($this->fileName, "r+");

		$file = $this->fileHeader . "\r\n" . json_encode($this->data, JSON_PRETTY_PRINT);
		$error = json_last_error();

		if(!empty($error))
		{
			throw new \Exception('Error: ' . var_export($error, 1));
		}

		fwrite($this->handle, $file);
	}

	private function generateSalt()
	{
		if(!empty($this->salt))
		{
			return $this->salt;
		}

		return $this->salt = uniqid();
	}

	public function generateHash($password, $salt = '')
	{
		if(empty($salt))
		{
			$salt = $this->generateSalt();
		}

		return md5($salt . $password);
	}
}
