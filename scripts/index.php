<?php

use Slim\Factory\AppFactory;
use App\Scripts\Contacts;
use App\Scripts\Newsletter;
use App\Scripts\JsonMiddleware;
use App\Scripts\ErrorHandler;
use Slim\Routing\RouteCollectorProxy;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/./Config.php';

$app = AppFactory::create();

$errorHandler = new ErrorHandler($app->getCallableResolver(), $app->getResponseFactory());
$errorMiddleware = $app->addErrorMiddleware(true, true, true);
$errorMiddleware->setDefaultErrorHandler($errorHandler);

$app->add(new JsonMiddleware());

$app->group('/scripts', function (RouteCollectorProxy $group) {
  $group->post('/contacts', [Contacts::class, 'run'])->setName('contacts');

  $group->post('/newsletter', [Newsletter::class, 'run'])->setName('newsletter');
});

$app->run();
