let btn = document.getElementById('button');
btn.addEventListener('click', function(){

    // geselecteerde radio button
    let color = document.querySelector('input[name="color"]:checked');
/*
    if(color){
        btn.className = 'btn ' + color.value;
    } else {
        btn.className = 'btn ' + 'btn-warning';
    }*/
btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;
});