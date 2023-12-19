var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// lang
const trans = {
  en: {
    title: "Turn your personal photo into a cartoon image for five dollars",
    des: "Now you can transform your personal picture into a unique and distinctive cartoon drawing",
    span: "Why choose my service:-",
    w1: "1- Unique and Personalized Design: I transform your photo into a cartoon that reflects your personal character and showcases your beauty in a distinctive way.",
    w2: "2- Fast Delivery: I ensure you receive the cartoon drawing in record time, without any delay.",
    w3: "3- Competitive Prices: Our service is available at a fantastic price! High quality at an affordable cost.",
    contact: "Get in touch with me"
  },
  ar: {
    title: "حول صورتك الشخصية الى صورة كارتونية مقابل خمسة دولار",
    des: "الآن يمكنك تحويل صورتك الشخصية إلى رسمة كارتونية بشكل فريد ومميز",
    span: " لماذا تختار خدمتي :- ",
    w1: "1- تصميم فريد وشخصي: اقوم بتحويل صورتك إلى كرتون يعكس طابعك الشخصي ويظهر جمالك بشكل مميز",
    w2: "2- سرعة التسليم: اضمن لك الحصول على الرسم الكرتوني في وقت قياسي، دون أي تأخير",
    w3: "3- أسعار تنافسية: خدمتنا متاحة بسعر رائع! جودة عالية بتكلفة مناسبة",
    contact: "تواصل معي"
  }
}

const lanBtn = document.querySelectorAll('.lang-btn');
const ar = document.getElementById('arBtn');
const en = document.getElementById('enBtn');
lanBtn.forEach(i => i.addEventListener('click', function (e) {

  console.log(i.value);
  if (i.value == "ar") {
    ar.style.display = "none";
    en.style.display = "block";
  } else {
    ar.style.display = "block";
    en.style.display = "none";
  }
  setLang(i.value)
}))

function setLang(lang) {
  const eles = document.querySelectorAll('[data-il8n]');
  eles.forEach(ele => {
    const keys = ele.getAttribute("data-il8n");
    ele.textContent = trans[lang][keys];
  })
  if (lang == "en") {
    document.dir = "ltr";
    document.querySelectorAll("ul").forEach(i => i.dir = "ltr");
    document.querySelectorAll(".contact").forEach(i => i.dir = "ltr");
    eles.forEach(i => i.dir = "ltr");
  }
  else {
    document.dir = "rtl";
    document.querySelectorAll("ul").forEach(i => i.dir = "rtl");
    document.querySelectorAll(".contact").forEach(i => i.dir = "rtl");
    eles.forEach(i => i.dir = "rtl");
  
  }
}