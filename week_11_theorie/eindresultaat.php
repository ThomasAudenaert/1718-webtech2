<?php

$action = htmlspecialchars($_SERVER['REQUEST_URI']);

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'onbekend';
$formSubmitted = isset($_REQUEST['form-submitted']);

if ($formSubmitted) {
    $username = isset($_GET['username']) && !empty($_GET['username'])
        ? $_GET['username']
        : 'Anoniempje';
}

?>
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Hallo</title>
<?php if ($formSubmitted): ?>
<h1>Hallo, <?=$username ?>!</h1>
<?php else: ?>
<form action="<?=$action ?>" method="get">
    <div>
        <label for="input-username">Wat is je naam?</label>
        <input id="input-username" name="username" type="text">
    </div>
    <input name="form-submitted" type="submit" value="Verzenden">
</form>
<?php endif ?>
<script>
// Zie browserconsole.
console.info('Request Method:', `<?=$_SERVER['REQUEST_METHOD'] ?>`);
console.info('$_GET:'         , `<?php var_export($_GET) ?>`);
console.info('$_POST:'        , `<?php var_export($_POST) ?>`);
console.info('$_REQUEST:'     , `<?php var_export($_REQUEST) ?>`);
</script>