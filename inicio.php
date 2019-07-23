<?php
/*
Template Name: Mapa YAYABeach
*/

get_header();

?>
<section id="mapa_playa" class="ungrid">
  <div class="header-mar imgLiquid imgLiquidFill">
    <img src="<?php echo get_stylesheet_directory_uri(); ?> /img/YAYA_mar.png" alt="YayaBeach Club Mahahual">
  </div>

  <?php
  $args = array(
    'post_type'=>'product',
    'posts_per_page'=> 28,
    'orderby'=> "default"
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

</section>
<?php
endif;
//
get_footer();
