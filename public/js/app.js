let tabs = document.querySelector('.tab-head')
let tabItems = document.querySelectorAll('.tab-item')
let tabIndicator = document.querySelector('.tab-indicator')
let tabProps = tabs.getBoundingClientRect();
let indicatorRight = tabIndicator.getBoundingClientRect().left;

let tabContents = document.querySelectorAll('.tab-content');
let components = document.querySelectorAll('.component')
let componentContainers = document.querySelectorAll('.component-container')

let arrowTop = document.querySelector('#i1').classList
let arrowBottom = document.querySelector('#i2').classList

let tabItemsProps = tabItems[0].getBoundingClientRect();
tabIndicator.style.height = tabItemsProps.height + "px";
tabIndicator.style.width = tabItemsProps.width + "px";

tabItems.forEach(tabItem => {
    tabItem.addEventListener('click', ()=>{
        let tabsize = tabItem.getBoundingClientRect();
        let tabTarget = tabItem.getAttribute('data-target')

        tabIndicator.style.width = tabsize.width +"px";
        tabIndicator.style.height = tabsize.height + "px";
        tabIndicator.style.left = (tabsize.left - tabProps.left) + "px";

        tabContents.forEach(tabContent =>{
            let tabName = tabContent.getAttribute('data-name')
            if(tabTarget == tabName){
                if (tabContent.classList.contains('invisible')){
                    tabContent.classList.replace('opacity-0', 'opacity-100');
                    tabContent.classList.replace('invisible', 'visible');
                    tabContent.classList.replace('-translate-y-10', 'translate-y-0');
                }
                componentContainers.forEach(componentContainer =>{
                    componentContainer.style.height = tabContent.getBoundingClientRect().height + "px"
                })
            }else{
                tabContent.classList.replace('opacity-100', 'opacity-0');
                tabContent.classList.replace('visible', 'invisible');
                tabContent.classList.replace('translate-y-0', '-translate-y-10');
            }
        })
    })
});

modernUis.forEach(modernUi =>{
    tailus(atoms, molecules, organims)
})