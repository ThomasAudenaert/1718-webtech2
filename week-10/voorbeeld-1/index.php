<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Voorbeeld 1</title>
</head>
<body>
    <h1>Voorbeeld 1</h1>
    <h2>De dag van vandaag</h2>
    <?php
        //dit is een single line comment
        # single line comment in unix-stijl
        /* hoera 
        het is bijna weekend
        */
        /**
         * 
         * 
         */
        echo '<strong>';
        echo date('Y:i:s');
        echo '<strong>';
        $i=2;
        $j=4.56;
        $k=$i + $j;

        $a = 4;
        $b = 5.45;
        $c = 'Hallo';
        $d = true;
        $groenten = array('aardappel', 'tomaat');
        $fruit = ['banaan', 'aardbei'];
        var_dump($a); echo '<br>';
        var_dump($b); echo '<br>';
        var_dump($c); echo '<br>';
        var_dump($d); echo '<br>';
        var_dump($groenten); echo '<br>'
    ?>
    <script>
    //deze commentaar kan iedereen lezen
    /* deze ook
    */
    </script>
    <!-- dit is html commentaar -->
</body>
</html>
