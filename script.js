// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll to Top
const scrollToTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', function() {
    scrollToTop.classList.toggle('active', window.scrollY > 300);
});
scrollToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:"smooth" }));

// GALLERY SLIDER
let currentGallerySlide = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const totalGallerySlides = gallerySlides.length;
const gallerySlider = document.getElementById('gallerySlider');
function slideGallery(direction){
    currentGallerySlide = (currentGallerySlide + direction + totalGallerySlides) % totalGallerySlides;
    gallerySlider.style.transform = `translateX(${-currentGallerySlide * 370}px)`; // 350+20
}
setInterval(()=>slideGallery(1),4000);

// AMENITIES SLIDER
let currentAmenitiesGallerySlide = 0;
const amenitiesGallerySlides = document.querySelectorAll('.amenity-gallery-slide');
const totalAmenitiesGallerySlides = amenitiesGallerySlides.length;
const amenitiesGallerySlider = document.getElementById('amenitiesGallerySlider');
function slideAmenitiesGallery(direction){
    currentAmenitiesGallerySlide = (currentAmenitiesGallerySlide + direction + totalAmenitiesGallerySlides) % totalAmenitiesGallerySlides;
    amenitiesGallerySlider.style.transform = `translateX(${-currentAmenitiesGallerySlide * 320}px)`; // 300+20
}
setInterval(()=>slideAmenitiesGallery(1),5000);

// RERA SLIDER
let currentReraSlide = 0;
const reraSlides = document.querySelectorAll('.rera-slide');
const totalReraSlides = reraSlides.length;
const reraSlider = document.getElementById('reraSlider');
function slideRera(direction){
    currentReraSlide = (currentReraSlide + direction + totalReraSlides) % totalReraSlides;
    reraSlider.style.transform = `translateX(${-currentReraSlide * 330}px)`; // 300+30
}
setInterval(()=>slideRera(1),5000);

// FORM Submit
document.getElementById('contactForm').addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you soon.');
    e.target.reset();
});
document.getElementById('brochureForm').addEventListener('submit', e=>{
    e.preventDefault();
    alert('Brochure download link has been sent to your email!');
    e.target.reset();
    bootstrap.Modal.getInstance(document.getElementById('brochureModal')).hide();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if(target){ 
            target.scrollIntoView({ behavior:'smooth', block:'start' });
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// MAP
function initMap(){
    const projectLocation = [18.5204, 73.8567];
    const map = L.map('projectMap').setView(projectLocation,14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'&copy; OpenStreetMap' }).addTo(map);
    const customIcon = L.divIcon({ html:'<i class="fas fa-home" style="color:#E91E63;font-size:24px;"></i>', iconSize:[30,30] });
    L.marker(projectLocation,{icon:customIcon}).addTo(map).bindPopup(`
        <div style="text-align:center;">
            <h4 style="margin:0 0 10px;color:#2196F3;">VTP Luxe - Velvet Villas</h4>
            <p style="margin:0;">43 Limited Edition Luxury Villas</p>
            <p style="margin:5px 0;"><i class="fas fa-map-marker-alt"></i> Premium Location, City</p>
            <a href="https://maps.google.com/?q=VTP+Luxe+Velvet+Villas" target="_blank"
                style="display:inline-block;margin-top:10px;padding:5px 15px;background:#2196F3;color:#fff;text-decoration:none;border-radius:20px;font-size:14px;">
                <i class="fas fa-directions"></i> Get Directions
            </a>
        </div>
    `).openPopup();
    L.circle(projectLocation,{ color:'#2196F3', fillColor:'#2196F3', fillOpacity:0.1, radius:500 }).addTo(map);
}
document.addEventListener('DOMContentLoaded', initMap);
