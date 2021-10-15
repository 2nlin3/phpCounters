<!DOCTYPE html>
<html>
<head>
	<title><?=$title?></title>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="/template/css/style.css">

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
	<style>#wrap_preloader{width:100%;height:100%;position:fixed;top:0;margin:0px auto;background:#0f0e0a;z-index:9999;text-align:center;letter-spacing:5px;font-family:arial;font-size:50px;padding-top:240px;}.lds-block{display:inline-block;position:relative;width:64px;height:64px;}.lds-block div{display:inline-block;position:absolute;left:6px;width:13px;background:#fc0;animation:lds-block 1.2s cubic-bezier(0,0.5,0.5,1) infinite;}.lds-block div:nth-child(1){left:6px;animation-delay:-0.24s;}.lds-block div:nth-child(2){background:#a00;left:26px;animation-delay:-0.12s;}.lds-block div:nth-child(3){background:#37b;left:45px;animation-delay:0;}@keyframes lds-block{0%{top:6px;height:51px;}50%,100%{top:19px;height:26px;}}</style>
	<script>
		var seo = "<?=$seo?>";
		var home = "<?=$home?>";
		var mod = "<?=$mod?>";
		var path = "<?=$fn?>";
		var stopAjax = "<?=$stopAjax?>";

		$(window).on("load", function (e) {
			$('#lds').fadeOut("slow");
			$('#wrap_preloader').fadeOut("slow");

			<?=isset($stopAjax) ? '' : '
			$(function($){
				setTimeout(function(){
					let url = path + "?page=" + home;
					getAjaxContent(url, "history");
				}, 1050);
			});
			'?>
		})
	</script>
</head>
<body>
	<div id="wrap_preloader">
		<div id="lds" class="lds-block"><div></div><div></div><div></div></div>
		<noscript>
			<style>@media screen and (max-height:600px){body #wrap_preloader{padding-top:120px;}}@media screen and (max-height:300px){body #wrap_preloader{padding-top:30px;}}@media screen and (max-height:550px){body #wrap_preloader{font-size:17px;}}@media screen and (max-width:700px){body #wrap_preloader{padding-top:50px;}body #wrap_preloader{font-size:17px;}}</style>
			<br clear="all">
			<span class="text-white">Pleace enable JavaScript</span>
		</noscript>
	</div>

	<div id="tempRemover" style="position:fixed;z-index:3;top:50%;left:50%;transform:translate(-50%, -50%);"></div>
	<div class="container" id="content" style="position:relative;z-index:4;">
		<?=$content?>
   </div>
   <div id="popupModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"></div>

	<script src="/template/js/nprogress.js"></script>
	<script src="/template/js/script.js?0"></script>
</body>
</html>