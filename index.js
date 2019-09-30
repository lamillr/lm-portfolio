// Scroll to a certain element
//projects
const projectScroll = document.getElementById("projects-start")

const footerScroll = document.getElementById('footer-start')

projectScroll.addEventListener("click", function (){
  projectScroll.scrollIntoView({ 
    behavior: 'smooth',
  });

});


footerScroll.addEventListener("click", function() {
  footerScroll.scrollIntoView({ 
    behavior: 'smooth',
  });
});