<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php

    $zoekVeld = $_POST['zoekveld'];

    if(isset($_POST['zoekveld'])) {
        $zoekVeld = $_GET ['zoekveld'];
    } else if(isset($_GET['zoekveld'])){
        $zoekVeld = $_GET['zoekveld'];
    }
    else {
        die();
        $zoekVeld = '';
    }

    //controleren of zoekveld leeg is
    if(empty('zoekveld') {
        echo "<h1>U hebt niks ingegeven</h1>";
    }

    // niet leeg, dus zoekresultaten weergeven
    else {
        echo "<h1>U zocht naar ${zoekveld} </h1>";
    }
    ?>

</body>
</html>