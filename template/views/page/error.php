<div class="d-flex justify-content-center h-100">
	<div class="card">
		<div class="card-header">
			<h3><?=$this->lang['ERROR']?></h3>
			<div class="d-flex justify-content-end social_icon">
				<span><i class="fab fa-facebook-square"></i></span>
				<span><i class="fab fa-google-plus-square"></i></span>
				<span><i class="fab fa-twitter-square"></i></span>
			</div>
		</div>
		<div class="card-body">
			<p class="text-white">
				<?=$this->lang['ERROR']?>
			</p>
			<p class="text-white">
				<?=isset($_SESSION['login'])
					? sprintf($this->lang['RUN_UCP'], $fn)
					: ''
				?> 
            </p>
			<p class="text-white">
				<a href="<?=$fn?>?page=login">
					<?=$this->lang['RUN_LOGIN']?>
				</a>
			</p>
			<p class="text-white">
				<a href="<?=$fn?>?page=register">
					<?=$this->lang['RUN_REGISTER']?>
				</a>
			</p>
		</div>
		<div class="card-footer">
			<div class="d-flex justify-content-center links">
				©копирайт
			</div>
		</div>
	</div>
</div>
