const navToggleBtn = document.querySelector('.nav-mobile-toggle');
const nav = document.querySelector('.nav');

navToggleBtn.addEventListener('click', () =>{
    const visible = nav.getAttribute('data-visibility');

    if(visible === 'false'){
        nav.setAttribute('data-visibility', true);
    } else{
        nav.setAttribute('data-visibility', false);
    }
});
