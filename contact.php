<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n
Phone Number: $phone \n
email: $email \n
Message: $message";
$recipient = "shehzincs@yahoo.com";
$subject = "Customer Enquiry";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader)
?>