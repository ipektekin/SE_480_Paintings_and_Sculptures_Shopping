<?php
    include("php/payment.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Paintings and Sculptures Shopping</title>
</head>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type= "text/javascript" src = "js/address.js"></script>
<script>
    
</script>
    <body>
    <!--Navbar-->
    <div class="navbar">
        <a href="index.html" onClick="window.reload();">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Paintings 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="profiles/leonardo-da-vinci.html">Leonardo da Vinci</a>
                <a href="profiles/vincent-van-gogh.html">Vincent Van Gogh</a>
                <a href="profiles/pablo-picasso.html">Pablo Picasso</a>
                <a href="profiles/salvador-dali.html">Salvador Dali</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Sculptures 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="profiles/michelangelo.html">Michelangelo</a>
                <a href="profiles/donatello.html">Donatello</a>
                <a href="profiles/aguste-rodin.html">Aguste Rodin</a>
                <a href="profiles/henry-moore.html">Henry Moore</a>
            </div>
        </div> 
        <a style="float:right" href="#about">About</a>
        <a style="float:right" href="sign.html">Sign In</a>
    </div>
    <!--Navbar ending-->
    <!--Address-->
    <div id="paymentForm">
      <form class="paymentForm" action="address.php" method="POST">
        <p>Name: <input class="onlyText" type="text" name="name" minlength="3" required></p>
        <p>Surname: <input class="onlyText" type="text" name="surname" minlength="3" required></p>
        <p>Select Country:   <select id="country" name ="country" required></select> </p><br>
        <p>Select State: <select name ="state" id ="state" required></select></p><br>
        <p>Phone Number: <input class="onlyNumber" maxlength="11" minlength="11" type="text" id="phone" name="phone" required></p>
        <p><textarea rows="4" cols="50" placeholder="Address" name="adress" required></textarea></p>
        <p>Zip Code: <input class="onlyNumber" maxlength="5" minlength="5" type="text" name="zipCode" required></p>
        <p>Credit Card Number: <input class="onlyNumber" maxlength="12" minlength="12" id="creditCard" type="text" name="creditCard" required></p>
        <p>Expiry Date: <select name="months" id="months" required></select> <select name="years" id="years" required></select> </p><br>
        <p>CV: <input class="onlyNumber" maxlength="3" minlength="3" type="text" id="CV" name="CV" required></p><br>
        <input type="submit" id="submitPaymentForm" name="submitPaymentForm" value="Send">
      </form>
    </div>

    <script language="javascript">
            populateCountries("country", "state"); 
            // first parameter is id of country drop-down and second 
            //parameter is id of state drop-down
    </script>
        
        </body>
    <!--Address ending-->
    <!--Footer-->
    <div class="footer">
        <p>If you enjoyed our website you can also visit our social media adresses.</p>

        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
    
    </div>
    <!--Footer ending-->
</body>
</html>