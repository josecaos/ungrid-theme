<?php if ( 'on' == et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">

<div class="container">
	<div class="row">
		<p class="copyright col-12 col-md-8 text-left alert">Copyright <?php echo date('Y'); ?> | Mahahual Q.Roo México</p>
		<div class="col-12 col-md-4 align-right">
			<ul class="footer-social row">
				<li class="col-2 text-right et-social-icon et-social-facebook">
					<a href="https://www.facebook.com/YayaBeach/" class="icon" target="_blank">
					</a>
				</li>
				<li class="col-2 text-right et-social-icon et-social-instagram">
					<a href="https://www.instagram.com/yayabeach/" class="icon" target="_blank">
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>

			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>


<script>

jQuery('document').ready(function(){
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity-yaya input');
    jQuery('.quantity-yaya').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});

</script>

</body>
</html>
