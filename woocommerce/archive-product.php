<?php
/**
* The Template for displaying product archives, including the main shop page which is a post type archive
*
* This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
*
* HOWEVER, on occasion WooCommerce will need to update template files and you
* (the theme developer) will need to copy the new files to your theme to
* maintain compatibility. We try to do this as little as possible, but it does
* happen. When this occurs the version of the template file will be bumped and
* the readme will list any important changes.
*
* @see https://docs.woocommerce.com/document/template-structure/
* @package WooCommerce/Templates
* @version 3.4.0
*/

defined( 'ABSPATH' ) || exit;

//
get_header('shop');

?>
<section class="container">
  <br>
  <h3 class="col-12 text-center">Welcome to Yaya Beach</h3>
  <p class="subtitle col-12 text-center">Below you can see a map of our club facilities, choose your spot, combos and get ready to have a good time with us.</p>
</section>
<section id="mapa_playa" class="ungrid container-fluid">

  <div class="fondo-playa col-12 imgLiquid imgLiquidFill">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_arena.png" alt="YayaBeach Club Mahahual">
  </div>

  <?php
  $booked;
  $args = array(
    'post_type'=>'product',
    'posts_per_page'=> 28,
    'orderby'=> "default",
    // 'woocommerce_booking_is_booked_on_day' => $booked,
  );
  $q = new WP_Query($args);
  if ($q->have_posts()):
    ?>
    <ul class="products">
      <?php

      while ($q->have_posts()):$q->the_post();

      // el lugar esta ocupado?
      // recibe id de los lugares
      $lugar_id = $product->get_id();
      $lugar = wc_get_product( $lugar_id );
      $ocupado = $lugar->woocommerce_booking_single_check_availability_text();

        var_dump($lugar_id,$ocupado);

      wc_get_template_part('content','product');

    endwhile;
    ?>
  </ul>

  <div class="header-mar col-12 imgLiquid imgLiquidFill">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_mar.chico.png" alt="YayaBeach Club Mahahual">
  </div>
</section>
<?php
endif;
//
get_footer('shop');
