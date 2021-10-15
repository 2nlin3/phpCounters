<?php

namespace app\models;

use app\core\Model;

class Counters extends Model
{
	public function checkAclCounter($user, $array)
	{
		$result = in_array($user, $array);

		return $result;
	}

}