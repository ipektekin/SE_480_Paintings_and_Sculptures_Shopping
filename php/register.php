<?php
    include("config.php");
    error_reporting(0);
    if (isset($_POST['registerSubmit'])) {
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];

        $query = "Insert into Users(name, surname, username, email, password, confirmPassword) values('$name', 
        '$surname', '$username', '$email', '$password', '$confirmPassword')";
        $result = mysqli_query($con, $query);
        echo "<script>alert('You have successfully registered the system');
        window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/login.html';
        </script>";
        die();
    }
?>