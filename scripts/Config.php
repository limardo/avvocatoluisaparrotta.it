<?php
use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__.'/.env');

$mail_response = <<<EOD
Grazie per averci scritto, verrà ricontattato non appena possibile, se preferisce può inviarci un numero telefonico dove poterla ricontattare.

Avv. Luisa Parrotta
EOD;

define('GOOGLE_RECAPTCHA_SERVER_KEY', $_ENV['GOOGLE_RECAPTCHA_SERVER_KEY']);

define('MAIL_SMTP', $_ENV['MAIL_SMTP']);
define('MAIL_PORT', $_ENV['MAIL_PORT']);
define('MAIL_FLAG', 'ssl');
define('MAIL_USERNAME', $_ENV['MAIL_USERNAME']);
define('MAIL_PASSWORD', $_ENV['MAIL_PASSWORD']);
define('MAIL_RECEIVER', ['info@avvocatoluisaparrotta.it' => 'Avv. Luisa Parrotta']);
define('MAIL_RESPONSE', $mail_response);
