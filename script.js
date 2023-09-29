const btn = document.getElementById('button');
window.onscroll = function() {scrollTop()};
function scrollTop(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20) {
        btn.classList.add('show');
    } else {btn.classList.remove('show');}
    btn.addEventListener('click', (event)=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}