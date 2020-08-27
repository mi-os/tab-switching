document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.getElementsByClassName('tab__item');
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch);
    }

    function tabSwitch() {
        //Tab
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');

        //Panel
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel__item')[index].classList.add('is-show');
    };
});