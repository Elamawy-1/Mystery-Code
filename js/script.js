AOS.init();
// الحصول على العناصر من الصفحة
const icone = document.querySelector('.icone');
const menu = document.querySelector('.menue ul');

// إضافة حدث الضغط على عنصر icone
icone.addEventListener('click', () => {
    // التبديل بين إظهار وإخفاء القائمة
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


var typed = new Typed(".typing", {
    strings: ["Amr Elamawy"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:false,
    loopCount: Infinity,
    showCursor: false,
  });
  var typed = new Typed(".typing-p", {
    strings: ["Crafting seamless and interactive web experiences, one line of code at a time."],
    typeSpeed: 50,
    backSpeed: 50,
    loop:false,
    loopCount: Infinity,
    showCursor: false,
    startDelay: 0,
  });


  $('.image-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });





