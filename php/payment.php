<?php
    // EXPIRY DATE VE ADRESS DE SORUN VAR
    include("config.php");
    error_reporting(0);
    if (isset($_POST['submitPaymentForm'])) {
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $country = $_POST['country'];
        $state = $_POST['state'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $zipCode = $_POST['zipCode'];
        $creditCard = $_POST['creditCard'];
        $months = $_POST['months'];
        $years = $_POST['years'];
        $CV = $_POST['CV'];
        $expiryDate = "$months/$years";

        $query = "Insert into Payments(name, surname, country, state, phone, address, zipCode, creditCard, 
        expiryDate, CV) values('$name', '$surname', '$country', '$state', '$phone', '$address', '$zipCode', 
        '$creditCard', '$expiryDate', '$CV')";
        $result = mysqli_query($con, $query);
        echo "<script>alert('Your payment has successfully done');</script>";
    }

    
?>