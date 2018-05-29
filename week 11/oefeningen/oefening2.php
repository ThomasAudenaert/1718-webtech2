<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Week 11 - Oefening 2
    </title>
    <style>
    * {
        font-family: sans-serif;
    }

    body {
        background: white;
        font-size: 15px;
    }

    input, textarea {
        font-size: 14px;
        padding: 10px 20px;
    }

    sup {
        color: red;
        font-size: 10px;
    }


    .errors li {
        color: red;
        background: pink;
    }
    
    </style>
</head>
<body>
    <h1>Contacteer mij</h1>
    <h1>Want ik ben het waard</h1>

    <div id="contact">
        <form method="POST">

        <div>
            <label for="firstname">Voornaam <sup>*</sup></label>
            <input id="firstname" type="text" placeholder="Geef je naam in" name="firstname">
        
            <label for="name">Naam <sup>*</sup></label>
            <input id="name" type="text" placeholder="Geef je naam in" name="name">
        
            <label for="email">E-mail </label>
            <input id="email" type="email" placeholder="Geef je e-mail in" name="email">
        
            <label for="password">Wachtwoord <sup>*</sup></label>
            <input id="password" type="password" placeholder="Geef je wachtwoord in" name="password">
        </div>
        <div>
        <label for="message">Bericht</label>
        <input id="message" type="text" placeholder="Geef je voornaam in" name="message">
        </div>
        <div>
            <button type="submit">Contacteer!</button>
        </div>
        </form>
        <div id="messages">
            <ul class="errors">
            <?php
            if(empty($_POST['firstname'])) {
                echo '<li>Vul de voornaam in aub</li>';
            }
            if(empty($_POST['name'])){
                echo '<li>Vul de naam in aub</li>';
            }
            if(empty($_POST['email'])){
                echo '<li>Vul het e-mailadres in aub</li>';
            }
            if(empty($_POST['password'])){
                echo '<li>Vul het wachtwoord in aub</li>';
            }
            if(empty($_POST['message'])){
                echo '<li>Vul het bericht in aub</li>';
            }
            ?>
            </ul>
            <ul class="confirmation">
                <?php
                //elk vel doorlopen
                foreach($_POST as $inputValue) {
                    //controleer of het veld leeg is
                    if(empty($inputValue)) {
                        $errors = true;
                    }
                }

                //als er geen errors zijn, si alles ingevuld
                if(!$errors && isset($_POST['message'])) {
                    $subject = 'Formulier van' . $_POST['firstname'] . ' ' . $_POST['name'];
                    
                    mail($_POST['email'],$subject, $_POST['message']);
                    
                    mail('frederick.roegiers@arteveldehs.be', $subject, $_POST['message']); 
                    
                    echo '<li>Het formulier werd correct verzonden</li>';
                }
                ?>

            </ul>
            <?php
            echo '<pre>';
            var_dump($_POST);
            echo '</pre>';
            ?>


        </div>
    </div>
</body>
</html>