<?php
/*
Template Name: Yaya's Best Spot Available
*/

get_header('shop');
?>

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
      </ul>

      <div class="header-mar col-12 imgLiquid imgLiquidFill">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_mar.chico.png" alt="YayaBeach Club Mahahual">
      </div>

    </section>
    <?php
  endif;
  
<?php
get_footer('shop');
