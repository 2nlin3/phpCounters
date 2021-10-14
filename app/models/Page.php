<?php

namespace app\models;

use app\core\Model;

class Page extends Model {

	public function getNews() {
		//$result = $this->db->row('SELECT title, description FROM news');
      $result = array(
         'id' => '1',
         'title' => 'title',
         'description' => 'description',
      );
		return $result;
	}

}