
const sidebarLinks = [
  { text: "The Development and Rollout of COVID-19 Vaccines", href: "#section1" },
  { text: "The Long-Term Effects of COVID-19 on Patient Health", href: "#section2" },
  { text: "The Impact of the Pandemic on the Healthcare System and Medical Professionals", href: "#section3" }
];

// Function to create and append navbar links
function createNavbarLinks() {
  const navbarElement = document.getElementById("navbar");

  sidebarLinks.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.href;
    linkElement.textContent = link.text;
    linkElement.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      smoothScroll(targetId, 1000); // Scroll duration of 1 second
    });
    navbarElement.appendChild(linkElement);
  });
}

    // Smooth scroll function
    function smoothScroll(target, duration) {
      var targetElement = document.querySelector(target);
      var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }

    // Create the navbar links
    createNavbarLinks();

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
    
