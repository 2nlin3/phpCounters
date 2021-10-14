<div class="d-flex justify-content-center h-100">
	<div class="card">
		<div class="card-header">
			<h3><?=$this->lang['LINKS']?></h3>
			<div class="d-flex justify-content-end social_icon">
				<span><i class="fab fa-facebook-square"></i></span>
				<span><i class="fab fa-google-plus-square"></i></span>
				<span><i class="fab fa-twitter-square"></i></span>
			</div>
		</div>
		<div class="card-body">
			<a href="<?=$fn?>?page=register">
				<?=$this->lang['RUN_REGISTER']?>
			</a><br>
			<a href="<?=$fn?>?page=login">
				<?=$this->lang['RUN_LOGIN']?>
			</a><br>
			<a href="<?=$fn?>?page=ucp">
				<?=$this->lang['UCP']?>
			</a><br>
			<a href="<?=$fn?>?page=error">
				<?=$this->lang['ERROR_PAGE']?>
			</a><br>
		</div>
		<div class="card-footer">
			<div class="d-flex justify-content-center links">
				© <?=$this->lang['COPY']?>
			</div>
		</div>
	</div>
</div>
