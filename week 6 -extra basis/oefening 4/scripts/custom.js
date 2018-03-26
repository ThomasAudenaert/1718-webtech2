let result = parseInt(window.prompt('Geef je resultaat(op 50) in.'));
if(result < 25){
    document.write('Jammer, volgende keer beter.' + '<br>' + result + '/50');
} else if((result > 25) && (result < 38)){
    document.write('Proficiat, je bent geslaagd' + '<br>' + result + '/50');
} else if (result > 38){
    document.write('Je slaagde met onderscheiding!' + '<br>' + result + '/50');
} else {
    document.write('Je moet natuurlijk wel een getal ingeven!');
}