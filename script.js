document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-menu');
    nav.classList.toggle('open');
});

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
});
