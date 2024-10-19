window.onload = function(){
    var modal = document.getElementById('contatoModal');
    modal.style.dysplay='block';

    document.querySelector('.close-btn').onclick = function(){
        modal.style.display = 'none';
    }
}