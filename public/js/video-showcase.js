document.addEventListener("DOMContentLoaded", function() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.video-thumbnail');
        if (thumbnail) {
            thumbnail.addEventListener('click', function() {
                const videoId = card.getAttribute('data-video-id');
                const iframe = document.createElement('iframe');

                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');

                // Substitui o conteúdo da thumbnail pelo iframe
                thumbnail.innerHTML = '';
                thumbnail.appendChild(iframe);
            });
        }
    });
});