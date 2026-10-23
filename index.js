// ================= FLOATING NAV & SCROLL SPY
const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
  floatingNavs.forEach(nav => {
    nav.classList.remove('active')
  })
}

floatingNavs.forEach(nav => {
  nav.addEventListener('click', () => {
    removeActiveClass();
    nav.classList.add('active')
  })
})

const sections = [
  { id: '', nav: floatingNavs[0], el: document.querySelector('header') },
  { id: '#resume', nav: floatingNavs[1], el: document.querySelector('#resume') },
  { id: '#projects', nav: floatingNavs[2], el: document.querySelector('#projects') },
  { id: '#faqs', nav: floatingNavs[3], el: document.querySelector('#faqs') },
  { id: '#contact', nav: floatingNavs[4], el: document.querySelector('#contact') }
];

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight * 0.35;
  let currentNav = floatingNavs[0];
  sections.forEach(sec => {
    if (sec.el && scrollPos >= sec.el.offsetTop) {
      currentNav = sec.nav;
    }
  });
  if (currentNav && !currentNav.classList.contains('active')) {
    removeActiveClass();
    currentNav.classList.add('active');
  }
}, { passive: true });










// ======================Resume 
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `
            <h4>Experience</h4>
                <p>
                    Skilled in full-stack web development, project management, and technical SEO—delivering scalable platforms end to end.
                </p>
                <ul>
                    <li>
                        <h6>Dec 2025 - Oct 2026</h6>
                        <h5>Head of Operations</h5>
                        <p>Ajalisco Production Industries LTD</p>
                    </li>
                    <li>
                        <h6>Mar 2024 - Nov 2025</h6>
                        <h5>Full Stack Developer | Project Lead</h5>
                        <p>Power Graph Systems</p>
                    </li>
                    <li>
                        <h6>Feb 2022 - Feb 2024</h6>
                        <h5>WordPress Developer</h5>
                        <p>Nichips Technology</p>
                    </li>
                </ul>
`

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
})
// set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;



// education
const educationBtn = document.querySelector('.education__btn');
const educationContent = `<h4>Education</h4>
                <p>Certified in SEO, web development, and digital tools for optimized performance.</p>
                <ul>
                    <li>
                        <h5>University of Uyo</h5>
                        <p>
                            Graduated with a B.Eng in Mechanical Engineering. Achieved a strong CGPA of 4.03/5.0, demonstrating consistent academic excellence and analytical skills.
                        </p>
                    </li>
                    <li>
                        <h5>LinkedIn Learning</h5>
                        <p>
                            Completed certifications in Project Management tools like Trello, Notion, and Adobe Acrobat Pro. Gained hands-on proficiency and workflow optimization experience.
                        </p>
                    </li>
                    <li>
                        <h5>Google Digital Skills</h5>
                        <p>
                            Trained in SEO, digital marketing, and website optimization. Developed in-depth understanding of user behavior, branding, and growth-driven design principles.
                        </p>
                    </li>
                    <li>
                        <h5>IBBIL ICT Academy</h5>
                        <p>
                            Studied web development, Microsoft Office Suite, DBMS, and CorelDraw. Built a strong foundation in tech tools, programming logic, and visual communication.
                        </p>
                    </li>
                </ul>`
                
  educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = 'resume__right education'
    educationBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    
  })
  
  
  
  
  // skills
  const skillsContent = `<h4>Skills</h4>
                <p>Proficient in HTML, CSS, PHP, MySQL, and WordPress, with expertise in Figma, Webflow, and Canva for seamless web design.</p>
                <ul>
                    <li title="HTML5"><img src="./assets/html.png" alt="HTML logo"><span>HTML5</span></li>
                    <li title="JavaScript"><img src="./assets/JavaScript.png" alt="JS logo"><span>JavaScript</span></li>
                    <li title="PHP"><img src="./assets/PHP.png" alt="PHP logo"><span>PHP</span></li>
                    <li title="CSS3"><img src="./assets/css.png" alt="CSS logo"><span>CSS3</span></li>
                    <li title="Tailwind CSS"><img src="./assets/tailwind.png" alt="Tailwind logo"><span>Tailwind</span></li>
                    <li title="WordPress"><img src="./assets/Wordpress.png" alt="Wordpress logo"><span>WordPress</span></li>
                    <li title="Webflow"><img src="./assets/webflow.png" alt="Webflow logo"><span>Webflow</span></li>
                    <li title="Figma"><img src="./assets/Figma.png" alt="Figma logo"><span>Figma</span></li>
                    <li title="Canva"><img src="./assets/Canva.jpg" alt="Canva logo"><span>Canva</span></li>
                </ul>`
                
  const skillsBtn = document.querySelector('.skills__btn')
  skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume__right skills'
    skillsBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  })
  
  // about me 
  const aboutContent = `<h4>About me</h4>
                <p>Passionate web developer & SEO expert, crafting optimized, engaging, and high-performing websites with precision.</p>
                <ul>
                    <li>
                        <h5>Name:</h5>
                        <p>Joshua Etok</p>
                    </li>
                    <li>
                        <h5>Experience:</h5>
                        <p>4+ years</p>
                    </li>
                    <li>
                        <h5>Email:</h5>
                        <p><a href="mailto:etokjoshua@gmail.com" style="color: var(--color-primary);">etokjoshua@gmail.com</a></p>
                    </li>
                    <li>
                        <h5>Collaboration:</h5>
                        <p>Available</p>
                    </li>
                    <li>
                        <h5>Language:</h5>
                        <p>English</p>
                    </li>
                    <li>
                        <h5>Phone:</h5>
                        <p>+2348084017920</p>
                    </li>
                    <li>
                        <h5>Nationality:</h5>
                        <p>Nigeria</p>
                    </li>
                    <li>
                        <h5>LinkedIn:</h5>
                        <p><a href="https://www.linkedin.com/in/joshua-etok-082957157" target="_blank" rel="noopener" style="color: var(--color-primary);">@Joshuaetok</a></p>
                    </li>
                </ul>`
                
  const aboutBtn = document.querySelector('.about__btn')
  aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add("primary")
    // remove classes from other buttons
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  })
  
  
  // ================= MIXITUP (projects section)
  const containerEl = document.querySelector('.projects__container')
  let mixer = mixitup(containerEl, {
    animation: {
      enable: false
    }
  })
  
  mixer.filter('*')
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // ================= SWIPER
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    600: {
      slidesPerView: 2
    }, 1024: {
      slidesPerView: 3
    }
  }

});





















// ================= FAQS
const faqs = document.querySelectorAll('.faqs__item');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    const p = faq.querySelector('.faqs__item-bottom p');
    const icon = faq.querySelector('.faq__icon')
    if(p.classList.contains('show')) {
      p.classList.remove('show')
      icon.innerHTML = '<i class="uil uil-angle-down"></i>'
    } else {
      p.classList.add('show')
      icon.innerHTML = '<i class="uil uil-angle-up"></i>'
    }
  })
})












// ================= THEME
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')
  if (!document.body.classList.contains('dark-theme-variables')) {
    themeToggler.innerHTML = '<i class="uil uil-moon"></i>'
    window.localStorage.setItem('portfolio-theme', '')
  } else {
    themeToggler.innerHTML = '<i class="uil uil-sun"></i>'
    window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
  }
})

// use theme from local storage on page load
const bodyClass = window.localStorage.getItem('portfolio-theme');
if (bodyClass === 'dark-theme-variables') {
  document.body.classList.add('dark-theme-variables');
  themeToggler.innerHTML = '<i class="uil uil-sun"></i>';
}
