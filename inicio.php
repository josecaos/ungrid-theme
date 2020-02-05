<?php
/*
Template Name: Yaya's Map
*/

defined( 'ABSPATH' ) || exit;

//
get_header('shop');
?>

<section id="calendario-booking" class="container-fluid">
  <div class="col-12">
    <div class="row">
      <div class="calendario col-xs-12 col-md-4 col-lg-6">
        <section class="container texto-home">
          <br>
          <h3 class="col-12 text-center">Welcome to Yaya Beach</h3>
          <p class="subtitle col-12 text-center">Below you can see a map of our club facilities, choose your spot and combos  by clicking the desired day in the calendar, then check availability in the map and click your spot.</p>
          <br>
          <p class="subtitle col-12 text-center">Or go straight and choose your combos then we will give you the best spot available at your arrival.</p>

          <div class="best-option-available col-12">
            <a href="https://pitayabeach.com/shop" target="_blank" type="button" name="best-option-available">
              Give Me the best spot available
            </a>
          </div>

        </section>

      </div>

      <div class="calendario col-xs-12 col-md-8 col-lg-6">

        <?php

        $args = array('page_id' => 23065);
        $q = new WP_Query($args);

        if ($q->have_posts()):
          $q->the_post();

          echo the_content();

        endif;

        ?>

    </div>
  </div>

  <div class="calendario-plantas col-12">
    <div class="calendario-planta-fondo col-12 ">
      <img class="plantas-escritorio" src="<?php echo get_stylesheet_directory_uri(); ?>/img/plantas.yaya.png" alt="YayaBeach Club Mahahual">
      <img class="plantas-movil" src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_plantas.png" alt="YayaBeach Club Mahahual">
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
    'orderby'=> 'default',
    'product_cat'=> 'yaya-spots'
  );
  $q = new WP_Query($args);
  // $q = wc_get_products($args);
  if ($q->have_posts()):
    ?>
    <ul class="products">
      <?php

      while ($q->have_posts()):$q->the_post();
      // var_dump($post->post_title);
      // var_dump($post);
      wc_get_template_part('content','product');

    endwhile;
    ?>

    <!-- palmeras -->
    <li class="flotante flotante-1">
      <img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/img/palmera.1.png" alt="YayaBeach Club Mahahual">
    </li>
    <li class="flotante flotante-2">
      <img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/img/palmera.2.png" alt="YayaBeach Club Mahahual">
    </li>
    <li class="flotante flotante-3">
      <img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/img/palmera.grupo.1.png" alt="YayaBeach Club Mahahual">
    </li>
    <!--  -->

  </ul>

  <div class="header-mar col-12 imgLiquid imgLiquidFill">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_mar.chico.png" alt="YayaBeach Club Mahahual">
  </div>

</section>
<?php
endif;
//
get_footer('shop');
