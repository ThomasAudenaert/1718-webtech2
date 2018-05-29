<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Week 11 - Oefening 1</title>
    <style>
    body {
        background: black;
        color: white;
        font-size: 20px;
        text-align: center;
        padding-top: 200px;
    }
    </style>
</head>
<body>

    <?php
    /**
     * Formulier kan twee methodes heben om het te versturen
     * naar de server
     * - GET (via de adresbalk
     * - POST (via een request header)
     * 
     * Ophalen van die data doe je met $_GET of $_POST
     * -> dat zijn arrays met data in
     * 
     * Het formylier worddt verzonden naar de url in het 
     * action-attribuut van de form-tag
     */
    ?>

<form method="POST" action="results.php">
<input name="zoekveld" type="search" placeholder="Search the interwebz">
<button type"submit">Go wild</button>
</form>


</body>
</html>