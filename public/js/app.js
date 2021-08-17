let tabs = document.querySelector('.tab-head')
let tabItems = document.querySelectorAll('.tab-item')
let tabIndicator = document.querySelector('.tab-indicator')
let tabProps = tabs.getBoundingClientRect();
let indicatorRight = tabIndicator.getBoundingClientRect().left;

let tabContents = document.querySelectorAll('.tab-content');
let componentContainer = document.querySelector('.component-container')

document.addEventListener('DOMContentLoaded', ()=>{
    let tabItemsProps = tabItems[0].getBoundingClientRect();
    tabItems[0].classList.add('text-white');
    tabIndicator.style.height = tabItemsProps.height + "px";
    tabIndicator.style.width = tabItemsProps.width + "px";
})

/*
function tabBody(target, tName){
    let tabTarget = target;
    let tabName = tName;
    tabContents.forEach(tabContent =>{
        if(tabTarget == tabName){
            if (tabContent.classList.contains('invisible')){
                tabContent.classList.replace('opacity-0', 'opacity-100');
                tabContent.classList.replace('invisible', 'visible');
                tabContent.classList.replace('-translate-y-10', 'translate-y-0');

                componentContainer.style.height = tabContent.getBoundingClientRect().height + "px";
            }
        }
    })
}
*/
tabItems.forEach(tabItem => {

    tabItem.addEventListener('click', ()=>{
        let tabsize = tabItem.getBoundingClientRect();
        let tabTarget = tabItem.getAttribute('data-target')

        tabItem.classList.add('text-white');
        tabIndicator.style.width = tabsize.width +"px";
        tabIndicator.style.height = tabsize.height + "px";
        tabIndicator.style.left = (tabsize.left - tabProps.left) + "px";

        if (tabItem.getAttribute('data-target') == "code"){
            componentContainer.classList.replace('bg-white', 'bg-gray-800');
        }else {
            componentContainer.classList.replace('bg-gray-800', 'bg-white')
        }

        tabContents.forEach(tabContent =>{

            let tabName = tabContent.getAttribute('data-name')

            if(tabTarget == tabName){
                if (tabContent.classList.contains('invisible')){
                    tabContent.classList.replace('opacity-0', 'opacity-100');
                    tabContent.classList.replace('invisible', 'visible');
                    tabContent.classList.replace('-translate-y-10', 'translate-y-0');
                }
                componentContainer.style.height = tabContent.getBoundingClientRect().height + "px";
            }else{
                tabContent.classList.replace('opacity-100', 'opacity-0');
                tabContent.classList.replace('visible', 'invisible');
                tabContent.classList.replace('translate-y-0', '-translate-y-10');
            }
        })
    })
});