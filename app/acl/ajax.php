<?php

return [
	'all' => [
		'index',
		'validator',
		'ucp',
		'logout',
	],
	'authorize' => [
		'ucp',
		'logout',
	],
	'guest' => [
		'register',
		'loginChecked',
		'ucp',
	],
	'admin' => [
		'ucp',
	],
];