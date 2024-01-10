class Draw {
    constructor(data, slider) {
        this.index = 0;
        this.data = data.diapositiva;
        this.container = document.getElementById(slider);
        let template = this.container.children[0];
        this.buildSlides(template);
        this.buildNavButtons();
        this.container.removeChild(template);
    }

    buildSlides(template) {
        for (let item of this.data) {
            let diapositiva = template.cloneNode(true);
            diapositiva.children[0].innerHTML = item.titulo;
            diapositiva.children[1].innerHTML = item.subtitulo;
            diapositiva.children[2].innerHTML = item.contenido;
            this.container.appendChild(diapositiva); 
        }
    }

    buildNavButtons() {
        const nextButton = document.createElement('button');
        const previousButton = document.createElement('button');
        const rewindButton = document.createElement('button');
        nextButton.id = 'right';
        nextButton.classList = 'btn-next';
        nextButton.textContent = '>';
        previousButton.id = 'left';
        previousButton.classList = 'btn-prev';
        previousButton.textContent = '<';
        rewindButton.id = 'rewind';
        rewindButton.classList = 'btn-rewind';
        rewindButton.textContent = 'Rewind';
        nextButton.addEventListener('click', () => this.next());
        previousButton.addEventListener('click', () => this.before());
        rewindButton.addEventListener('click', () => this.rewind());
        this.container.appendChild(nextButton);
        this.container.appendChild(previousButton);
        this.container.appendChild(rewindButton);
    }

    next() {
        this.index++;
        if (this.index >= this.data.length) {
            this.index = 0;
        }
        this.updateSlide();

    }
    before() {
        this.index--;
        if (this.index < 0 ) {
            this.index = this.data.length - 1;
        }
        this.updateSlide();
        
    }
    rewind() {
        this.index = 0;
        this.updateSlide();
    }

    updateSlide() {
        let diapositivas = this.container.getElementsByClassName('id');
        console.log(diapositivas);  
    
        for (let i = 0; i < diapositivas.length; i++) {
            if (i === this.index) {
                diapositivas[i].style.display = 'block';
            } else {
                diapositivas[i].style.display = 'none';
            }
        }
    }
}
export { Draw }