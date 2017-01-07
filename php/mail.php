<?php
    $meuPost = file_get_contents("php://input");
    require 'PHPMailer-master/PHPMailerAutoload.php';

    //para acessar os dados: $json.nome ou $Json.email e etc.
    $json = json_decode( $meuPost );

    ini_set('display_errors',1);
    ini_set('display_startup_erros',1);
    error_reporting(E_ALL);
    $mail = new PHPMailer;
    //echo "$mail";
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host = 'smtp.mailgun.org';    // Specify main and backup SMTP servers
    $mail->Port = '587'; // A porta ṕadrão é 25 mas a King Host utiliza a porta 587
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username =  'postmaster@sandbox823fe8c1c86244208c44f838e1304159.mailgun.org';   // SMTP username
    $mail->Password = 'd4be3fe5839b4abaa6321e60d0baf269'; // SMTP password
    $mail->SMTPSecure = 'tls';    // Enable encryption, only 'tls' is accepted
    $mail->From = 'postmaster@sandbox823fe8c1c86244208c44f838e1304159.mailgun.org';
    $mail->FromName = $json->nome;
    $mail->addAddress('contato@retratosdointerior.com.br'); // Add a recipient

    $mail->WordWrap = 50;                                 // Set word wrap to 50 characters

    $mail->Subject = "Novo contato para Retratos do Interior.";
    $mail->Body    = $json->mensagem . "- Fone: " . $json->fone . " - Email: " . $json->email ;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
         $output = "<script>console.log('Mensagem enviada com sucesso');</script>";
        echo $output;
    }


/*
//pega os dados do $http do Angular
$meuPost = "Teste"; //file_get_contents("php://input");

//para acessar os dados: $json.nome ou $Json.email e etc.
$json = json_decode( $meuPost );
// Aqui vc pode implementar o codigo para enviar o email via php.

//retorna os dados para o success do Angular
echo json_encode(array(

                        "nome"=>$json->nome,
                        "email"=>$json->email,
                        "mensagem"=>$json->mensagem

                    ));*/
?>