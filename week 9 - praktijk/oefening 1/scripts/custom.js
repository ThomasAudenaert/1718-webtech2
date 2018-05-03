let button = document.getElementById('btn');
let name = document.getElementById('mol');
button.addEventListener('click', function(){
    let name = document.getElementById('mol').value;
    localStorage.setItem('demol', name);
})
let localMol = localStorage.getItem('demol')
if(localMol != null){
    button.style.display = 'none';
    name.style.display = 'none';
    document.body.textContent = `Je denkt dat ${localMol} de mol is.`;
} else {
    alert('Raad wie de mol is!');
}