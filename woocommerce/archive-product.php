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
get_header('shop');s
?>
<section class="container">
  <br>
  <h3 class="col-12 text-center">Welcome to Yaya Beach</h3>
  <p class="subtitle col-12 text-center">Below you can see a map of our club facilities, choose your spot, combos and get ready to have a good time with us.</p>

</section>
<section id="calendario-booking" class="container-fluid">
  <div class="col-12">
  <div class="row">
    <div class="col-xs-12 col-md-8 col-lg-6">

      <?php

      echo do_shortcode('[wbc-calendar]');

      ?>

    </div>

    <div class="col-xs-12 col-md-4 col-lg-6">
      <h3>Texto de Prueba</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>

  </div>
  </div>

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
    'type' => 'booking'
  );
  $q = new WP_Query($args);
  // $q = wc_get_products($args);
  if ($q->have_posts()):
    ?>
    <ul class="products">
      <?php

      while ($q->have_posts()):$q->the_post();

      // el lugar esta ocupado?
      // $start_date = strtotime(date("Y-m-d",current_time( 'timestamp' )));
      // $end_date = strtotime("+90 days" . date("Y-m-d",current_time( 'timestamp' )));
      // recibe id de los lugares
      $lugar_id = $product->get_id();
      // $lugar_obj = wc_get_product( $lugar_id );
      $lugar_obj = new WC_Product_Booking( $lugar_id );
      $disponible = $lugar_obj->is_purchasable();

      // var_dump($disponible);
      // var_dump($lugar_obj);
      // var_dump($product);
      // var_dump($lugar_id);
      //
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
