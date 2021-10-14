<?php

namespace app\models;

use app\core\Model;

class Counters extends Model
{
	public function getCounters()
	{
		$result = [
			'id' => '1',
			'title' => 'title',
			'description' => 'description',
		];

		return $result;
	}

	public function checkAclCounter($user, $array)
	{
		$result = in_array($user, $array);

		return $result;
	}

}