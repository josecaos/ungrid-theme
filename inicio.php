<?php
/*
Template Name: Yaya's Map
*/

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
isadjfoasidjfoasidfjo
  <?php
  $args = array(
    'post_type'=>'product',
    'posts_per_page'=> 28,
    'orderby'=> "default",
    'product_cat' => 'yaya-spots'
  );
  $q = new WP_Query($args);
  if ($q->have_posts()):
    ?>
    <ul class="products">
      <?php

      while ($q->have_posts()):$q->the_post();

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
