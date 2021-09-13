<?php

namespace App\Scripts;

use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;

class Mailer
{
  private $mailer;

  public function __construct()
  {
    $transport = (new Swift_SmtpTransport(MAIL_SMTP, MAIL_PORT, MAIL_FLAG))
      ->setUsername(MAIL_USERNAME)
      ->setPassword(MAIL_PASSWORD);

    $this->mailer = new Swift_Mailer($transport);
  }

  public function newsletter(string $email): int
  {
    $subject = '[Richiesta newsletter] ' . $email;
    $text = "Aggiungimi alla tua newsletter \n\r $email";

    $message = (new Swift_Message($subject))
      ->setFrom([$email])
      ->setTo(MAIL_RECEIVER)
      ->setBody($text);

    return $this->mailer->send($message);
  }

  public function send(array $data): int
  {
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];

    $name = $firstname . ' ' . $lastname;
    $realSubject = '[Richiesta di contatto] ' . $name;
    $text = <<<EOD
Nome: $firstname
Cognome: $lastname
Email: $email
Telefono: $phone
Messaggio:
$message
EOD;

    $message = (new Swift_Message($realSubject))
      ->setFrom([$email => $name])
      ->setTo(MAIL_RECEIVER)
      ->setBody($text);

    return $this->mailer->send($message);
  }

  public function courtesy(array $data): int
  {
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $email = $data['email'];

    $name = $firstname . ' ' . $lastname;
    $realSubject = '[Richiesta di contatto] ' . $name;
    $text = MAIL_RESPONSE;

    $message = (new Swift_Message($realSubject))
      ->setFrom(MAIL_RECEIVER)
      ->setTo([$email => $name])
      ->setBody($text);

    return $this->mailer->send($message);
  }
}
