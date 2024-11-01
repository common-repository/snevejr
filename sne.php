<?php
/*
* Plugin Name: Snevejr
* Description: Lad det sne på hjemmesiden og skab jule- og vinterhygge hos dine besøgende.
* Author: Det Bedre Selskab
* Author URI: https://detbedreselskab.dk
* Version: 1.0
* text domain: sne
*/

function sne_enqueue_script() {

  wp_register_style( 'sne_style', plugin_dir_url( __FILE__ ) . 'style.css');
  wp_enqueue_style( 'sne_style' );

  wp_register_script( 'sne_script', plugin_dir_url( __FILE__ ) . 'sne.js');
  wp_enqueue_script('sne_script');

}
add_action('wp_enqueue_scripts', 'sne_enqueue_script');



function sne_div() {
    echo "<div id='sne'></div>";
}
add_action( 'wp_footer', 'sne_div' );
