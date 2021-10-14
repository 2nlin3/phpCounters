<?php

namespace app\models;

use app\core\Model;

class Admin extends Model
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

}