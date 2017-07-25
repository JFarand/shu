<?php include './inc/head.php'; ?>
<body>
<style>
body {
	width: 100%;
	width: 100vw;

}   

div#innerWrapper, div#introWrapper {
	display: block;
	position: relative;
	width: 100%;
	width: 100vw;
}
</style>
	<?php if($_GET): ?>

	<div id="innerWrapper">

	</div>

	<?php else: ?>

	<div id="introWrapper">
		<?php include './inc/introBody.php'; ?>
	</div>

<?php endif; ?>

	<script src="http://owlasylum.owl/js/script.min.js" charset="utf-8"></script>

	<!-- <script type="text/x-handlebars-template">

	</script> -->

</body>
</html>
