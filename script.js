var swiper = new Swiper(".swiper", {
  // Efek transisi antar slide
  effect: "coverflow",
  
  // Mengaktifkan cursor grab
  grabCursor: true,
  
  // Menampilkan slide tengah
  centeredSlides: true,
  
  // Konfigurasi efek coverflow
  coverflowEffect: {
    // Rotasi slide
    rotate: 0,
    
    // Peregangan slide
    stretch: 0,
    
    // Kedalaman slide
    depth: 100,
    
    // Faktor modifikasi
    modifier: 3,
    
    // Mengaktifkan bayangan slide
    slideShadows: true
  },
  
  // Mengaktifkan loop
  loop: true,
  
  // Konfigurasi pagination
  pagination: {
    // Elemen pagination
    el: ".swiper-pagination",
    
    // Mengaktifkan klik pagination
    clickable: true
  },
  
  // Konfigurasi breakpoints
  breakpoints: {
    // Ukuran layar 640px
    640: {
      // Jumlah slide per tampilan
      slidesPerView: 2
    },
    
    // Ukuran layar 768px
    768: {
      // Jumlah slide per tampilan
      slidesPerView: 1
    },
    
    // Ukuran layar 1024px
    1024: {
      // Jumlah slide per tampilan
      slidesPerView: 2
    },
    
    // Ukuran layar 1560px
    1560: {
      // Jumlah slide per tampilan
      slidesPerView: 3
    }
  }
});