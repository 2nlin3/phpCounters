
<div class="d-flex justify-content-center h-100">
	<div class="card" style="height:325px;">
		<div class="card-header">
			<h3><?=$this->lang['RUN_LOGIN']?></h3>
			<div class="d-flex justify-content-end social_icon">
				<span><i class="fab fa-facebook-square"></i></span>
				<span><i class="fab fa-google-plus-square"></i></span>
				<span><i class="fab fa-twitter-square"></i></span>
			</div>
		</div>
		<div class="card-body">
			<form id="login_form" action="<?=$fn?>?ajax=login&checked">
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user"></i></span>
					</div>
					<input type="text" name="login" class="form-control" placeholder="<?=$this->lang['LOGIN']?>" autocomplete="username">
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-key"></i></span>
					</div>
					<input type="password" name="password" class="form-control" placeholder="<?=$this->lang['PASSWORD']?>" autocomplete="current-password">
				</div>
				<div class="row align-items-center remember">
					<input type="checkbox"><?=$this->lang['RAM_USER']?>
				</div>
				<div class="form-group">
					<input type="submit" value="<?=$this->lang['SIGNIN']?>" class="btn float-right login_btn">
				</div>
			</form>
		</div>
		<div class="card-footer">
			<div class="d-flex justify-content-center links">
				<?=$this->lang['NOT_USER']?>
				<a href="<?=$fn?>?page=register"><?=$this->lang['RUN_REGISTER']?></a>
			</div>
		</div>
	</div>
</div>

<script>
$(function(){
	form_submit_ajax("login_form");
});
</script>
