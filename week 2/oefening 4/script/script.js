let result = prompt("Geef je percentage in");
if ((result < 68) && (result > 50)) {
    titel = "Je slaagde op voldoende wijze.";
} else if (result >= 68) {
    titel = "Je slaagde met onderscheiding.";
} else if (result >= 77) {
    titel = "Je slaagde met grote onderscheiding!"
} else if (result >= 85) {
    titel = "Je slaagde met grootste onderscheiding!"
} else if (result >= 90) {
    titel = "Je slaagde met grootste onderscheiding en krijgt gelukswensen van de examencommissie!"
}
document.write(titel);
