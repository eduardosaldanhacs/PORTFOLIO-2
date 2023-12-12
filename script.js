const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const isHeaderContainer = entry.target.classList.contains('header-container');
        
        if (entry.isIntersecting === true && !isHeaderContainer) {
            entry.target.classList.add('show');
        } else if(entry.isIntersecting === false && !isHeaderContainer) {
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));
