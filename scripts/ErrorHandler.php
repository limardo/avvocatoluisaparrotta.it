<?php

namespace App\Scripts;

use Psr\Http\Message\ResponseInterface as Response;
use Slim\Exception\HttpException;
use Slim\Handlers\ErrorHandler as SlimErrorHandler;
use Throwable;

class ErrorHandler extends SlimErrorHandler
{
  protected function respond(): Response
  {
    $exception = $this->exception;
    $statusCode = 500;
    $description = 'Generic Error';

    if ($exception instanceof HttpException) {
      $statusCode = $exception->getCode();
      $description = $exception->getMessage();
    }

    if (
      !($exception instanceof HttpException)
      && $exception instanceof Throwable
      && $this->displayErrorDetails
    ) {
      $description = $exception->getMessage();
    }

    $payload = ['code' => $statusCode, 'description' => $description];
    $encodedPayload = json_encode($payload, JSON_PRETTY_PRINT);

    $response = $this->responseFactory->createResponse($statusCode);
    $response->getBody()->write($encodedPayload);

    return $response->withHeader('Content-Type', 'application/json');
  }
}
