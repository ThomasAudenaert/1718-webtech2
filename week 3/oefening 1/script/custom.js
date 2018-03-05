for(let i = 7; i <=100; i++){
    if (i%3 != 0 && i%5 != 0) {
        document.write(i)
    }
    if(i%3 == 0) {
        document.write('bitter');
    }
    if (i%5 == 0) {
        document.write('bal')
    }
    document.write('<br>');
}
