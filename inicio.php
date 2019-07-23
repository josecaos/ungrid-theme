<?php
/*
Template Name: Mapa YAYABeach
*/

get_header();

?>
<section id="mapa_playa" class="ungrid">

  <?php
  $args = array(
    'post_type'=>'product',
    'post_per_page'=> -1
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
