<?php
    include("config.php");
    require_once('PHPMailer/PHPMailerAutoload.php');

    if (isset($_POST['loginSubmit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "Select * from Users where username = '$username' and password = '$password'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        if (mysqli_num_rows($result) > 0) {
            echo "<script>alert('Access granted'); 
            window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/login.html';
            </script>";
        }
        else {
            echo "<script>alert('Access denied');
            window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/login.html';        
            </script>"; 
        }
        
    }

    // Forgot Password Transactions
    if (isset($_POST['forgotPasswordEmailSubmit'])) {
        $email = $_POST['emailForForgotPassword'];
        $username = $_POST['usernameForForgotPassword'];
        $newPassword = $_POST['passwordForForgotPassword'];

        // Check whether this username is registered to system or not
        $query = "Select * from Users where username = '$username'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        if (mysqli_num_rows($result) > 0) {
            // Before sending email update user's password
            $query = "Update Users set password='$newPassword', confirmPassword='$newPassword' where
            username='$username'";
            $result = mysqli_query($con, $query);

            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'tls';
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = '587';
            $mail->isHtml();
            $mail->Username = 'deneme1231231234@gmail.com';
            $mail->Password = 'eewweeww'; 
            $mail->SetFrom('Art Gallery');
            $mail->Subject = 'Your New Password';
            $mail->Body = "Your new password is: ". $newPassword;
            $mail->AddAddress($email);

            $mail->Send();

            if (!$mail->send()) {
                echo "Mailer Error: " . $mail->ErrorInfo;
                // set time out koy
            } else {
                echo "<script>alert('Your new password has sent to your email address!');
                window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/login.html';
                </script>";
            }
        }

        else {
            echo "<script>alert('This username is not registered to system!');
            window.location = 'http://localhost/SE_480_Paintings_and_Sculptures_Shopping/login.html';
            </script>";
        }
    }
?>