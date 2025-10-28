  // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll to Top
        const scrollToTop = document.getElementById('scrollToTop');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTop.classList.add('active');
            } else {
                scrollToTop.classList.remove('active');
            }
        });

        scrollToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Gallery Slider
        let currentGallerySlide = 0;
        const gallerySlides = document.querySelectorAll('.gallery-slide');
        const totalGallerySlides = gallerySlides.length;
        const gallerySlider = document.getElementById('gallerySlider');

        function slideGallery(direction) {
            currentGallerySlide += direction;
            
            if (currentGallerySlide < 0) {
                currentGallerySlide = totalGallerySlides - 1;
            } else if (currentGallerySlide >= totalGallerySlides) {
                currentGallerySlide = 0;
            }
            
            const translateX = -currentGallerySlide * (350 + 20); // slide width + gap
            gallerySlider.style.transform = `translateX(${translateX}px)`;
        }

        // Auto slide gallery
        setInterval(() => {
            slideGallery(1);
        }, 4000);

        // Amenities Gallery Slider
        let currentAmenitiesGallerySlide = 0;
        const amenitiesGallerySlides = document.querySelectorAll('.amenity-gallery-slide');
        const totalAmenitiesGallerySlides = amenitiesGallerySlides.length;
        const amenitiesGallerySlider = document.getElementById('amenitiesGallerySlider');

        function slideAmenitiesGallery(direction) {
            currentAmenitiesGallerySlide += direction;
            
            if (currentAmenitiesGallerySlide < 0) {
                currentAmenitiesGallerySlide = totalAmenitiesGallerySlides - 1;
            } else if (currentAmenitiesGallerySlide >= totalAmenitiesGallerySlides) {
                currentAmenitiesGallerySlide = 0;
            }
            
            const translateX = -currentAmenitiesGallerySlide * (300 + 20); // slide width + gap
            amenitiesGallerySlider.style.transform = `translateX(${translateX}px)`;
        }

        // Auto slide amenities gallery
        setInterval(() => {
            slideAmenitiesGallery(1);
        }, 5000);

        // RERA Slider
        let currentReraSlide = 0;
        const reraSlides = document.querySelectorAll('.rera-slide');
        const totalReraSlides = reraSlides.length;
        const reraSlider = document.getElementById('reraSlider');

        function slideRera(direction) {
            currentReraSlide += direction;
            
            if (currentReraSlide < 0) {
                currentReraSlide = totalReraSlides - 1;
            } else if (currentReraSlide >= totalReraSlides) {
                currentReraSlide = 0;
            }
            
            const translateX = -currentReraSlide * (300 + 30); // slide width + gap
            reraSlider.style.transform = `translateX(${translateX}px)`;
        }

        // Auto slide RERA
        setInterval(() => {
            slideRera(1);
        }, 5000);

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Our team will contact you soon.');
            this.reset();
        });

        document.getElementById('brochureForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Brochure download link has been sent to your email!');
            this.reset();
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('brochureModal'));
            modal.hide();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });
    // Initialize Map
    function initMap() {
        const projectLocation = [18.5204, 73.8567]; // Pune example

        const map = L.map('projectMap').setView(projectLocation, 14);

        // Tile Layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Custom Icon
        const customIcon = L.divIcon({
            html: '<i class="fas fa-home" style="color:#E91E63; font-size:24px;"></i>',
            iconSize: [30, 30],
            className: 'custom-map-icon'
        });

        // Marker + Popup
        L.marker(projectLocation, { icon: customIcon }).addTo(map)
            .bindPopup(`
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

        // Circle around location
        L.circle(projectLocation, {
            color: '#2196F3',
            fillColor: '#2196F3',
            fillOpacity: 0.1,
            radius: 500
        }).addTo(map);
    }

    document.addEventListener('DOMContentLoaded', initMap);

