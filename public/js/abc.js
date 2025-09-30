document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os wrappers de vídeo
    const videoWrappers = document.querySelectorAll('.video-player-wrapper');

    videoWrappers.forEach(wrapper => {
        
        // --- PARTE 1: Configuração Inicial e Aplicação da Thumb ---
        const posterUrl = wrapper.getAttribute('data-poster');
        
        if (posterUrl && !wrapper.closest('.video-more-mask-card')) {
            wrapper.style.backgroundImage = `url('${posterUrl}')`;
            wrapper.style.backgroundSize = 'cover';
            wrapper.style.backgroundPosition = 'center';
        }

        if (wrapper.closest('.video-more-mask-card')) {
            return; 
        }

        const video = wrapper.querySelector('.local-video-player');
        
        if (!video) return;

        // --- PARTE 2: Lógica de Play (mouseenter) ---
        wrapper.addEventListener('mouseenter', () => {
            wrapper.classList.add('is-playing');
            video.currentTime = 0; 
            video.play().catch(error => {
                console.warn("Autoplay bloqueado pelo navegador. ", error);
            });
        });

        // --- PARTE 3: Lógica de Pause (mouseleave) ---
        wrapper.addEventListener('mouseleave', () => {
            wrapper.classList.remove('is-playing');
            video.pause();
        });

        // --- PARTE 4: Lógica de Clique ---
        wrapper.addEventListener('click', (e) => {
            e.preventDefault();
            const link = wrapper.closest('.video-card-link');
            if (link) {
                link.click();
            }
        });
    });
});
