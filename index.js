const container = document.querySelector('.container');
const input = document.querySelector('#search-bar');

input.addEventListener('focus', function() {
    container.classList.add('upword');
});


const btn = document.querySelector('#sumbit-btn');
btn.addEventListener('click', function() {
    if(input.value == '') {
        e.preventDefault();
    }
    else {
        window.location.href = 'result.html';
    }
})

