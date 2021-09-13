<?php

namespace App\Scripts;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Exception\HttpException;

/**
 * public string $firstname;
 * public string $lastname;
 * public string $email;
 * public string $phone;
 * public string $message;
 */
class Contacts
{
  public function run(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
  {

    $data = $request->getParsedBody();

    $mailer = new Mailer();
    $recaptcha = new \ReCaptcha\ReCaptcha(GOOGLE_RECAPTCHA_SERVER_KEY);

    $resp = $recaptcha
      ->setExpectedAction('contacts')
      ->verify($data['token']);

    if (!$resp->isSuccess()) {
      throw new HttpException($request, 'recaptcha token not valid', 403);
    }

    $mailer->send($data);
    $mailer->courtesy($data);

    return $response->withStatus(204)->withHeader('Content-Type', 'application/json');
  }
}
