function initTabNav(){
    


    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo')
    
    function activeTab(index){
        tabContent.forEach((item)=>{
            item.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((itemMenu,index)=>{
        itemMenu.addEventListener('click',()=>{
            activeTab(index)
        })
    })
    }
    }
    
initTabNav();
    
function initAccordion(){
        const accordionList = document.querySelectorAll('.js-accordion dt')
        const ativoClass = 'ativo'

        if(accordionList.length){
            function activeAccordion(){
                this.classList.toggle(ativoClass)
                this.nextElementSibling.classList.toggle(ativoClass)
            }
            
            accordionList[0].classList.add(ativoClass)
            accordionList[0].nextElementSibling.classList.add(ativoClass)
        
            accordionList.forEach((item)=>{
                item.addEventListener('click',activeAccordion)
            })
        }
    
       
}

initAccordion()


function initScrollSuave(){

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(e,index){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        //forma alternativa
        /*
        const top = section.offsetTop
        
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
        */

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click',scrollToSection)
    })
}

initScrollSuave()