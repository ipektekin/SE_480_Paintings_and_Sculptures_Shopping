<?php
// This is the configuration script
ob_start();
session_start(); // -> MAKES THE REGISTER.PHP MAIN SCREEN
$timezone = date_default_timezone_set("Europe/Istanbul");
$con = mysqli_connect("localhost","root","","test"); // En sondakini parametreyi
$config['default']['port'] = 3308;
if(mysqli_connect_errno()) {
echo "Failed to connect" . mysqli_connect_errno();
}
?>