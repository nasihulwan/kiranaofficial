<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info.kiranagroup@gmail.com"; // email tujuan
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // format pesan
    $body = "Nama: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n\n";
    $body .= "Pesan:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan. Coba lagi.";
    }
} else {
    echo "Akses langsung tidak diperbolehkan.";
}
?>
