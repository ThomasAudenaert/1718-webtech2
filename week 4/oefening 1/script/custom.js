let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');

let linkElement = anchorTags[0];

linkElement.addEventListener('mouseover', function(){
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'orange';

    strongTags[1].style.color = 'orange';

    for(let i = 0; i < spanTags.length; i++){
        spanTags[i].style.color = 'purple'
    }
});

linkElement.addEventListener('mouseout', function(){

    for(let i = 0; i < strongTags.length; i++){
        strongTags[i].style.color = 'black';
    }
    for(let i = 0; i < spanTags.length; i++){
        spanTags[i].style.color = 'black';
    }
});
