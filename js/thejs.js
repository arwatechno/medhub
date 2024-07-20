/*side nav*/
const sidebarLinks = [
    { text: "The Development and Rollout of COVID-19 Vaccines", href: "#section1" },
    { text: "The Long-Term Effects of COVID-19 on Patient Health", href: "#section2" },
    { text: "The Impact of the Pandemic on the Healthcare System and Medical Professionals", href: "#section3" }
  ];
    
  //to create and append sidebar links
  function createSidebarLinks() {
    const sidenavElement = document.getElementById("mySidenav");
  
    sidebarLinks.forEach((link, index) => {
    // link element
    const linkElement = document.createElement("a");
    linkElement.id = 'thenav';
    linkElement.href = link.href;
    linkElement.textContent = link.text;
      
    //styles to the link element
    linkElement.style.position = "fixed"; 
    linkElement.style.left = "-600px";
    linkElement.style.transition = "0.3s";
    linkElement.style.padding = "15px";
    linkElement.style.width = "600px";
    linkElement.style.textDecoration = "none";
    linkElement.style.fontSize = "20px";
    linkElement.style.color = "#190019";
    linkElement.style.backgroundColor = "#FED7A5"; 
    linkElement.style.borderRadius = "0 5px 5px 0";
    linkElement.style.backgroundColor = link.backgroundColor;
    linkElement.style.top = `${200 + (index * 60)}px`;
          
      
    // Hover 
    linkElement.addEventListener("mouseenter", () => {
      linkElement.style.left = "0";
    });
      
    linkElement.addEventListener("mouseleave", () => {
      linkElement.style.left = "-600px";
    });
      
    // when clicked 
    linkElement.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      smoothScroll(targetId, 1000); // Scroll duration of 1 second
      closeNav();
      });
        
      // Append the link to the sidenav
      sidenavElement.appendChild(linkElement);
    });
  }
    
  /*smooth scrolling*/
    function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
      
    function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
    requestAnimationFrame(animation);
    } else {
    targetElement.scrollIntoView({ behavior: 'auto' });
    }
    }
      
    function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
    }
      
    requestAnimationFrame(animation);
    }
  }
    
  // Create the sidebar links
  createSidebarLinks();
    
  /* active state */
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const currentScrollPos = window.pageYOffset;
      
    sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
      
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
    section.classList.add('active');
    } else {
    section.classList.remove('active');
    }
    });
  });
  /*comment form */
  document.addEventListener('DOMContentLoaded', function() {
    // Get input values
    const form = document.getElementById('comment');
    const taskInput = document.getElementById('cmnt-input');
    const nameInput = document.getElementById('name');
    const mailInput = document.getElementById('email');
    const taskList = document.getElementById('comments');
    // Function to handle form submission
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const thename = nameInput.value.trim();
    const themail = mailInput.value.trim();
    // Prevent form submission if fields are invalid
    if (taskText !== '' && themail !== '' && thename !== '') {
      //if everything alright
      const listItem = document.createElement('li');
      listItem.className = 'task-item'; 
      listItem.id = 't'; 
      listItem.innerHTML = `
      <span class="info" >${thename}</span>
      <span class="info" >${themail}</span>   
      <span>${taskText}</span>
      `;
      // Append the new comment to the comment section
      taskList.appendChild(listItem);
  
      // Clear the form fields
      taskInput.value = '';
      nameInput.value = '';
      mailInput.value = '';
    } else{
      // Display a warning message if no comment written
      const warningSection = document.createElement('div');
      warningSection.classList.add('warning-section');
      warningSection.textContent = 'Please complete the form !';
      form.appendChild(warningSection);
      // Remove the warning message after 5 seconds
      setTimeout(function() {
      form.removeChild(warningSection);
      }, 5000);          
      }
      });
  });
  /*scroll TO top btn*/
  let mybutton = document.getElementById("myBtn");
    
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  }
    
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
    