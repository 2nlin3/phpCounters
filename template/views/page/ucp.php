<div class="d-flex justify-content-center h-100">
	<div class="card">
		<div class="card-header">
			<h3><?=$title?></h3>
			<div class="d-flex justify-content-end social_icon">
				<span><i class="fab fa-facebook-square"></i></span>
				<span><i class="fab fa-google-plus-square"></i></span>
				<span><i class="fab fa-twitter-square"></i></span>
			</div>
		</div>
		<div class="card-body">
			<p class="text-white">
				<b><?=$this->lang['LOGIN']?></b>: <?=$_SESSION['login']?><br>
				<b><?=$this->lang['NAME']?></b>: <?=$_SESSION['name']?><br>
				<b><?=$this->lang['ADMIN']?></b>: <a href="<?=$this->cfg['fn']?>?page=admin">link</a>
				<form id="formLogout" action="<?=$fn?>?ajax=logout" method="post">
					<input class="btn btn-sm btn-danger" form="formLogout" type="submit" value="<?=$this->lang['EXIT']?>">
				</form>
			</p>

			<h4 class="text-white"><?=$this->lang['LINKS']?></h4>
			<a href="<?=$fn?>?page=ucp">
				<?=$this->lang['UCP']?>
			</a><br>
			<a href="<?=$fn?>?page=registerSuccess">
				<?=$this->lang['GOOD_REG']?>
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

<script>
$(function(){
	form_submit_ajax("formLogout");
});
</script>
