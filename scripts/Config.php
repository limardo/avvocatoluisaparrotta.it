<?php
$mail_response = <<<EOD
Grazie per averci scritto, verrà ricontattato non appena possibile, se preferisce può inviarci un numero telefonico dove poterla ricontattare.

Avv. Luisa Parrotta
EOD;

define('GOOGLE_RECAPTCHA_SERVER_KEY', '6LeUHWMcAAAAADX9Xf6QQ06KQzPLS3ECb1fq7TvL');

define('MAIL_SMTP', 'smtps.aruba.it');
define('MAIL_PORT', 465);
define('MAIL_FLAG', 'ssl');
define('MAIL_USERNAME', 'info@avvocatoluisaparrotta.it');
define('MAIL_PASSWORD', 'Alessandro1985');
define('MAIL_RECEIVER', ['info@avvocatoluisaparrotta.it' => 'Avv. Luisa Parrotta']);
define('MAIL_RESPONSE', $mail_response);
