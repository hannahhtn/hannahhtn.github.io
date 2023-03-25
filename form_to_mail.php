<?php
    $name = $_POST['Name'];
    $visitor_email = $_POST['FromEmail'];
    $message = $_POST['Message'];
    $email_from = 'HH_portfolio';
	$email_subject = "New Contact submission";
	$email_body = "You have received a new message from $name.\n Here is the message:\n $message";

    $to = "hannahhtn97@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
?>