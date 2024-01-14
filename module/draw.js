class Draw {
    constructor(data, slider) {
        this.index = 0;
        this.data = [];
        this.container = document.getElementById(slider);
        let template = this.container.children[0];
        if (!this.validateData(data)) {
            
            console.error('Datos iniciales no válidos.');
            return;
        }
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

    validateData(data) {
        if (
            data &&
            Array.isArray(data.diapositiva) &&
            data.diapositiva.every(item =>
                item &&
                typeof item === 'object' &&
                'titulo' in item && typeof item.titulo === 'string' &&
                'subtitulo' in item && typeof item.subtitulo === 'string' &&
                'contenido' in item && typeof item.contenido === 'string'
            )
        ) {
            this.data = data.diapositiva;
            return true;
        } else {
            console.error('Datos no válidos');
            return false;
        }
    }
    

    updateSlide() {
        let diapositivas = this.container.getElementsByClassName('id');
        let selectedDiapositivas = Array.from(diapositivas);

        anime({
            targets: diapositivas,
            opacity: 0,
            duration: 1000,
            translateX : 450,
            delay: 100,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            complete: () => {
                for (let i = 0; i < selectedDiapositivas.length; i++) {
                    selectedDiapositivas[i].style.opacity = 1;
                    selectedDiapositivas[i].children[0].innerHTML = this.data[this.index].titulo;
                    selectedDiapositivas[i].children[1].innerHTML = this.data[this.index].subtitulo;
                    selectedDiapositivas[i].children[2].innerHTML = this.data[this.index].contenido;
                }
            }
        });
    }
}
export { Draw }