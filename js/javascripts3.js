const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        let currentIndex = 0;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;
        let isDragging = false;

        track.addEventListener('touchstart', touchStart);
        track.addEventListener('touchend', touchEnd);
        track.addEventListener('touchmove', touchMove);

        function touchStart(event) {
            startPos = getPositionX(event);
            isDragging = true;
            animationID = requestAnimationFrame(animation);
            track.style.cursor = 'grabbing';
        }

        function touchEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);

            const movedBy = currentTranslate - prevTranslate;

            if (movedBy < -100 && currentIndex < slides.length - 1) {
                currentIndex += 1;
            } else if (movedBy < -100 && currentIndex === slides.length - 1) {
                currentIndex = 0; // Vuelve al primer slide si está en el último
            }

            if (movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1;
            }

            setPositionByIndex();

            track.style.cursor = 'grab';
        }

        function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        }

        function getPositionX(event) {
            return event.touches[0].clientX;
        }

        function animation() {
            setSliderPosition();
            if (isDragging) requestAnimationFrame(animation);
        }

        function setSliderPosition() {
            track.style.transform = `translateX(${currentTranslate}px)`;
        }

        function setPositionByIndex() {
            currentTranslate = currentIndex * -slides[0].clientWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }

        window.addEventListener('resize', showSlides);
        showSlides();

        function showSlides() {
            const viewportWidth = window.innerWidth;
            const totalWidth = track.scrollWidth;
            const itemWidth = slides[0].getBoundingClientRect().width;
            const visibleSlides = Math.floor(viewportWidth / itemWidth);

            if (visibleSlides < slides.length) {
                currentIndex = 0;
                updateCarousel();
            }
        }

        function updateCarousel() {
            const itemWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }