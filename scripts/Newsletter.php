<?php

namespace App\Scripts;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Exception\HttpException;

class Newsletter
{
  public function run(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
  {
    $data = $request->getParsedBody();

    $mailer = new Mailer();
    $recaptcha = new \ReCaptcha\ReCaptcha(GOOGLE_RECAPTCHA_SERVER_KEY);

    $resp = $recaptcha
      ->setExpectedAction('newsletter')
      ->verify($data['token']);

    if (!$resp->isSuccess()) {
      throw new HttpException($request, 'recaptcha token not valid', 403);
    }

    $mailer->newsletter($data['email']);

    return $response->withStatus(204)->withHeader('Content-Type', 'application/json');
  }
}
