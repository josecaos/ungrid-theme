<?php
// Dependencias
add_action( 'wp_enqueue_scripts', 'dependencias' );
function dependencias() {
  wp_enqueue_style( 'parent-css', get_template_directory_uri() . '/style-min.css');
  wp_enqueue_style( 'child-styles', get_stylesheet_directory_uri() . '/style.css');
  wp_enqueue_style( 'custom-css', get_stylesheet_directory_uri() . '/css/custom.css');
  wp_enqueue_script( 'img-js', get_stylesheet_directory_uri() . '/js/imgLiquid.js');
  wp_enqueue_script( 'ungrid-js', get_stylesheet_directory_uri() . '/js/ungrid.js');
  wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'));

}
//
//
// add_filter( 'loop_shop_per_page', 'loop_per_page', 9999 );
// function loop_per_page( $cols ) {
//   $cols = 30;
//   return $cols;
// }
//Esconde cuenta
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
//Esconde orden
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
//




/*
// Funciones especificas de yayabeach  -  CUSTOMIZATION.old
*/
add_filter ('woocommerce_add_to_cart_redirect', 'woo_redirect_to_checkout');
function woo_redirect_to_checkout() {
  //$checkout_url = wc_get_checkout_url();
  //return $checkout_url;
  $cart_url = wc_get_cart_url();
  return $cart_url;
}

add_filter( 'woocommerce_billing_fields', 'custom_billing_fields' );
function custom_billing_fields( $fields ) {
  $fields['billing_country']['required'] = true;
  $fields['billing_phone']['required'] = false;
  $fields['billing_state']['required'] = false;
  $fields['billing_city']['required'] = false;
  $fields['billing_address_1']['required'] = false;
  $fields['billing_address_2']['required'] = false;
  $fields['billing_postcode']['required'] = false;
  return $fields;
}

add_action('woocommerce_after_order_notes', 'customise_checkout_field');
function customise_checkout_field($checkout) {
  echo '<div id="customise_checkout_field">';
  woocommerce_form_field('arrival_time', array(
    'type' => 'text',
    'class' => array(
      'my-field-class form-row-wide'
    ) ,
    'label' => __('Arrival Time') ,
    'required' => true,
  ) , $checkout->get_value('arrival_time'));

  woocommerce_form_field('cruise_line', array(
    'type' => 'text',
    'class' => array(
      'my-field-class form-row-wide'
    ) ,
    'label' => __('Cruise Line') ,
    'required' => true,
  ) , $checkout->get_value('cruise_line'));
  echo '</div>';
}

add_action('woocommerce_checkout_process', 'customised_checkout_field_process');
function customised_checkout_field_process() {
  // Show an error message if the field is not set.
  if (!$_POST['arrival_time']) wc_add_notice(__('Arrival Time is a required field.') , 'error');
  if (!$_POST['cruise_line']) wc_add_notice(__('Cruise Line is a required field.') , 'error');
}

add_action( 'woocommerce_checkout_update_order_meta', 'my_custom_checkout_field_update_order_meta' );
function my_custom_checkout_field_update_order_meta( $order_id ) {
  if ( ! empty( $_POST['cruise_line'] ) ) {
    update_post_meta( $order_id, 'cruise_line', sanitize_text_field( $_POST['cruise_line'] ) );
  }
  if ( ! empty( $_POST['arrival_time'] ) ) {
    update_post_meta( $order_id, 'arrival_time', sanitize_text_field( $_POST['arrival_time'] ) );
  }
}

add_action( 'woocommerce_admin_order_data_after_billing_address', 'my_custom_checkout_field_display_admin_order_meta', 10, 1 );
function my_custom_checkout_field_display_admin_order_meta($order){
  echo '<p><strong>'.__('Cruise Line').':</strong> ' . get_post_meta( $order->id, 'cruise_line', true ) . '</p>';
  echo '<p><strong>'.__('Arrival Time').':</strong> ' . get_post_meta( $order->id, 'arrival_time', true ) . '</p>';
}

add_action('woocommerce_checkout_order_processed', 'auto_asign_bed');
function auto_asign_bed($order_id) {
  $order = wc_get_order( $order_id );
  $bookings = WC_Booking_Data_Store::get_booking_ids_from_order_id( $order_id );

  foreach ( $bookings as $booking_id ) {
    $booking = get_wc_booking( $booking_id );
    //error_log($booking);

    $resources = $booking->get_resource_id();
    //error_log(implode($resources));

    $start = $booking->get_start();
    $end = $booking->get_end();
    $count = $booking->get_person_counts();
    //error_log("end: ".$end);
    //error_log("start: ".$start);
    //error_log(implode($count));
    //error_log($booking);

    if(count($resources) == 1 && $resources[0] == 5368) {

      $available_bookings = $booking->get_product()->get_all_resources_availability( $start, $end, 1);
      //error_log("available_bookings:". print_r($available_bookings));

      if ( is_array( $available_bookings ) ) {
        unset($available_bookings[5368]); //eliminamos el 5368 que tiene que ser el primero
        //update_post_meta( $booking->get_id(), 'available_bookings', $available_bookings );
        $booking->set_resource_id(reset(array_keys($available_bookings)));
        $booking->save();
        update_post_meta( $booking->get_id(), 'auto_assigned', 1 );
      }
    }
  }
}

add_filter( 'woocommerce_email_attachments', 'attach_terms_conditions_pdf_to_email', 10, 3);
function attach_terms_conditions_pdf_to_email ( $attachments , $id, $object ) {
  $your_pdf_path = get_template_directory() . '/Yaya-Beach-Info-Sheet.pdf';
  $attachments[] = $your_pdf_path;
  return $attachments;
}
