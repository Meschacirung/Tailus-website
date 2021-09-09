let tabs = document.querySelector('.tab-head')
let tabItems = document.querySelectorAll('.tab-item')
let tabIndicator = document.querySelector('.tab-indicator')
let tabProps = tabs.getBoundingClientRect();
let indicatorRight = tabIndicator.getBoundingClientRect().left;

let tabContents = document.querySelectorAll('.tab-content');
let componentContainers = document.querySelectorAll('.component-container')

let sideBtn = document.querySelector('#docs')
let sideBar = document.querySelector('#sidebar')

sideBtn.addEventListener('click', ()=>{
    if (sideBar.classList.contains('-translate-x-96')){
        sideBar.classList.replace('-translate-x-96', 'translate-x-0')
    }else{
        sideBar.classList.replace('translate-x-0', '-translate-x-96')
    }
})


document.addEventListener('DOMContentLoaded', ()=>{
    let tabItemsProps = tabItems[0].getBoundingClientRect();
    tabIndicator.style.height = tabItemsProps.height + "px";
    tabIndicator.style.width = tabItemsProps.width + "px";
})  

tabItems.forEach(tabItem => {
    tabItem.addEventListener('click', ()=>{
        let tabsize = tabItem.getBoundingClientRect();
        let tabTarget = tabItem.getAttribute('data-target')

        tabIndicator.style.width = tabsize.width +"px";
        tabIndicator.style.height = tabsize.height + "px";
        tabIndicator.style.left = (tabsize.left - tabProps.left) + "px";

        tabContents.forEach(tabContent =>{
            let tabName = tabContent.getAttribute('data-name')
            componentContainers.forEach(componentContainer =>{
                componentContainer.style.height = tabContent.getBoundingClientRect().height + "px"
            })
            if(tabTarget == tabName){
                if (tabContent.classList.contains('invisible')){
                    tabContent.classList.replace('opacity-0', 'opacity-100');
                    tabContent.classList.replace('invisible', 'visible');
                    tabContent.classList.replace('-translate-y-10', 'translate-y-0');
                }
            }else{
                tabContent.classList.replace('opacity-100', 'opacity-0');
                tabContent.classList.replace('visible', 'invisible');
                tabContent.classList.replace('translate-y-0', '-translate-y-10');
            }
        })
    })
});