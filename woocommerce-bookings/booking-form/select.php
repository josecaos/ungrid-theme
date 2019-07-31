<?php
/**
 * The template used for select fields in the booking form, such as resources
 *
 * This template can be overridden by copying it to yourtheme/woocommerce-bookings/booking-form/select.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/bookings-templates/
 * @author  Automattic
 * @version 1.8.0
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$class   = $field['class'];
$label   = $field['label'];
$name    = $field['name'];
$options = $field['options'];
?>
<p class="form-field form-field-wide <?php echo implode( ' ', $class ); ?>">
	<label for="<?php echo $name; ?>"><?php echo $label; ?>:</label>
	<select name="<?php echo $name; ?>[]" id="<?php echo $name; ?>" multiple="multiple">
		<?php foreach ( $options as $key => $value ) : ?>
		<?php if ( $key == 5368 ) { ?>    
		    <option value="<?php echo $key; ?>" selected="selected"><?php echo $value; ?></option>
		<?php } else { ?>    
			<option value="<?php echo $key; ?>" ><?php echo $value; ?></option>
		<?php } ?>
		<?php endforeach; ?>
	</select>
</p>

<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="../../bootstrap-multiselect.css" type="text/css">
<script type="text/javascript" src="../../bootstrap-multiselect.js"></script>

<script type="text/javascript">
jQuery(document).ready(function() {
    jQuery('#<?php echo $name; ?>').multiselect({
      numberDisplayed: 2
    });
    jQuery('#<?php echo $name; ?>').on('change', function() {
		var selectedOptions = jQuery('#<?php echo $name; ?>').val();
		//console.log(selectedOptions.length);
		if( selectedOptions != null && selectedOptions.length > 1 ) {
			jQuery("#<?php echo $name; ?> option[value='5368']").prop("selected", false);
			jQuery("input[type=checkbox][value=5368]").prop("checked",false);
			jQuery(".dropdown-menu li").first().removeClass("active");
		} else if( selectedOptions == null ) {
			jQuery("#<?php echo $name; ?> option[value='5368']").prop("selected", true);
			jQuery("input[type=checkbox][value=5368]").prop("checked",true);
			jQuery(".dropdown-menu li").first().addClass("active");
		}
	});
});
</script>