//About Tabs
const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');

    }

})


// Portfolio Pop-up

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0,0)
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
};

//close icon
document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);
//outside click
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('pp-inner')) {
        togglePortfolioPopup()
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src =
    portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.pp-header h3').innerHTML =
    portfolioItem.querySelector('h3').innerText;
    document.querySelector('.pp-body').innerHTML =
    portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

// Menu Pop-up

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu')) {
        toggleMenuPopup();
        document.querySelector('.menu-popup').scrollTo(0,0)
    }
});

function toggleMenuPopup() {
    document.querySelector('.menu-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
};

//close icon
document.querySelector('.close-menu').addEventListener('click', () => {
    toggleMenuPopup()
    document.querySelector('.menu-popup').scrollTo(0,0)
});
//outside click
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-inner')) {
        toggleMenuPopup()
        document.querySelector('.menu-popup').scrollTo(0,0)
    }
})

//Navigation from menu

const btnS = document.querySelectorAll('.link-a');
const sections = document.querySelectorAll('section')

btnS.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        const dataId = clickedBtn.getAttribute('data-id')
        sections.forEach(section => {
            console.log(dataId)
            console.log(section.id)
            if (section.id === dataId) {
                toggleMenuPopup()
                section.classList.remove('hidden');   
                document.querySelector('.menu-popup').scrollTo(0,0)
            } else {
                section.classList.add('hidden')
            }
        })
    })
});
//Navigation from button

const buttonBtnS = document.querySelectorAll('.link');

buttonBtnS.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        const dataId = clickedBtn.getAttribute('data-id')
        sections.forEach(section => {
            console.log(dataId)
            console.log(section.id)
            if (section.id === dataId) {
                //toggleMenuPopup()
                section.classList.remove('hidden');   
                document.querySelector('.menu-popup').scrollTo(0,0)
            } else {
                section.classList.add('hidden')
            }
        })
    })
});