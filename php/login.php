<?php
    include("config.php");

    if (isset($_POST['loginSubmit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "Select * from Users where username = '$username' and password = '$password'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        if (mysqli_num_rows($result) > 0) {
            echo "<script>alert('Access granted'); 
            window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/sign.html';
            </script>";
        }
        else {
            echo "<script>alert('Access denied');
            window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/sign.html';        
            </script>"; 
        }
        
    }
?>