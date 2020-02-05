<?php
/*
Template Name: Yaya's Best Spot Available
*/

get_header('shop');
?>

<section id="" class="combos-list container-fluid">

  <div class="fondo-playa col-12 imgLiquid imgLiquidFill">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_arena.png" alt="YayaBeach Club Mahahual">
  </div>

<section class="combos-copy">
  <h1>Choose your Combos</h1>
  <p>And we will give you the best seat available at your arrival, please leave your arrival date at checkout</p>
</section>
  <?php
  $booked;
  $args = array(
    'post_type'=>'product',
    'orderby'=> 'default',
    'product_cat'=> 'combos'
    );
      $q = new WP_Query($args);
      // $q = wc_get_products($args);
      if ($q->have_posts()):
        ?>
        <ul class="products row">
          <?php

          while ($q->have_posts()):$q->the_post();
          // var_dump($post->post_title);
          // var_dump($post->$post_content);
          // var_dump($post->$regular_price);
          wc_get_template_part('content','bestoption');

        endwhile;
        ?>
      </ul>

      <div class="header-mar col-12 imgLiquid imgLiquidFill">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/YAYA_mar.chico.png" alt="YayaBeach Club Mahahual">
      </div>

    </section>
    <?php
  endif;

get_footer('shop');
