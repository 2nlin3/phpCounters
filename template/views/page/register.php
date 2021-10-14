<div class="d-flex justify-content-center h-100">
	<div class="card" style="height:410px;">
		<div class="card-header">
			<h3><?=$this->lang['RUN_REGISTER']?></h3>
			<div class="d-flex justify-content-end social_icon">
				<span><i class="fab fa-facebook-square"></i></span>
				<span><i class="fab fa-google-plus-square"></i></span>
				<span><i class="fab fa-twitter-square"></i></span>
			</div>
		</div>
		<div class="card-body">
			<form id="register_form" name="registerForm" action="<?=$fn?>?ajax=register&action=new" method="post">
				<input form="register_form" type="hidden" name="checkUserLogin">

				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user"></i></span>
					</div>
					<input form="register_form" type="text" id="formLogin" name="login"  value="" class="form-control" placeholder="<?=$this->lang['LOGIN_ENTER']?>" autocomplete="username" onchange="validateForm(this.id, this.value, 'login');" data-placement="right">
					
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-key"></i></span>
					</div>
					<input form="register_form" id="userPass" type="password" name="password" class="form-control" placeholder="<?=$this->lang['PASSWORD']?>" autocomplete="current-password" onchange="validateForm(this.id, this.value, 'password');" data-placement="right">
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-key"></i></span>
					</div>
					<input form="register_form" type="password" id="formConfirm" name="confirm_password" class="form-control" placeholder="<?=$this->lang['PASSWORD2']?>" autocomplete="current-password" onchange="validateForm(this.id, this.value, 'confirm_password', 'confirm');" data-placement="right">
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-envelope"></i></span>
					</div>
					<input form="register_form" type="email" id="formMail" name="email" class="form-control" placeholder="info@example.com" onchange="validateForm(this.id, this.value, 'mail');" data-placement="right">
				</div>
				<div class="input-group form-group">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user"></i></span>
					</div>
					<input form="register_form" type="text" id="formName" name="name" class="form-control" placeholder="<?=$this->lang['YOU_NAME']?>" onchange="validateForm(this.id, this.value, 'name');" data-placement="right">
				</div>
				<div class="form-group">
					<div class="float-left align-items-center remember pt-2 pl-2">
						<?=$this->lang['NOT_EXIST']?> <a href="<?=$fn?>?page=login">
							<?=$this->lang['SIGNIN']?>
						</a>
					</div>
					<input form="register_form" id="formSender" type="submit" value="<?=$this->lang['LOGIN']?>" class="btn float-right login_btn" data-placement="right">
				</div>
			</form>
		</div>
	</div>
</div>

<script>
	$(function(){
		form_submit_ajax("register_form");
	});

	function validateForm(id, name, type, confirm){
		console.log(id);

		if(confirm === "confirm"){
			confirm = $("#userPass").val();
		}

		$.ajax({
			type: "POST",
			url: path + "?ajax=validator",
			data: {
				action: type,
				account: name,
				confirm: confirm
			},
			cache: false,
			success: function(response){
				try
				{
					var r = JSON.parse(response);
				}
				catch(e)
				{
					console.log(e);

					var r = new Array();

					r['type'] = 'error';
					r['msg'] = e.name + "<br>" + e.message;
					r['error'] = "<hr>" + response;
				}

				text = r['error'] == "" ? r['msg'] : r['error'];

				new Noty({
					type: r['type'],
					layout: "bottomRight",
					theme: "sunset",
					text: text,
					timeout: 60000,
					progressBar: true
				}).show();

				if(r['type'] != "success"){
					$("#" + id).attr('data-original-title', text)
						.tooltip({
							html: true,
							content: text,
							show: "slideDown"
						})
						.mouseover();
				} else {
					$("#" + id).attr('data-original-title', '')
						.tooltip({
							html: true,
							content: '',
							show: "slideDown"
						})
						.mouseover();
				}

				document.registerForm.checkUserLogin.value = r['type'] == "success" ? "on" : "off";
			}
		});
	};
</script>
