/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/





/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


//to wait DOM full loaded and by it we an put js link at the head of index.html
document.addEventListener('DOMContentLoaded', landpro)
//start main function 
function landpro(){

    // define and store varibles inside globvar function
    function globVar(){
        //invoke sections (nodelist)and convert it to array
        sect     = document.querySelectorAll('section');
        sectArr = [...sect];
        //invoke ul elemnt
        ul       = document.querySelector('#navbar__list');
        //create document fragment to but the list inside it to decrease the reflow and repain
        frag = document.createDocumentFragment();
        // return the varibles to use
        return sectArr;
        return ul;
        return frag;
    }
    globVar()

    // Build navigation bar
    //define returned varibles
    let sections = sectArr;
    let navBar   = ul;
    let fragment = frag;
    //start build navigation function & call it
    function BuildNavBar(){
        // loop through sections 
        sections.forEach(function(section) {
            // create a list and make its content bu using innerHTML property then add the list to fragment then to navbar
            const li = document.createElement('li');
            // li.classList.add('link');
            li.innerHTML = `<a class = 'menu__link' data-link = ${section.id}>${section.dataset.nav}</a>`;
            fragment.appendChild(li);
        });
        navBar.appendChild(fragment);
        return navBar;
    }
    BuildNavBar();

    // smooth scroll when click on the sections in navigation bar
    //invoke a (anchors) elements (links) nodelist and convert it to array 
    let li2 = document.querySelectorAll('.menu__link');
    let links =[...li2];

    // start smoothScroll function
    function SmoothScroll() {
        // loop through a (anchors)elements 
        links.forEach(function (link){
            // add event to sections in navigtion bar (links) when click it scroll smoothly to the section on the page
            link.addEventListener('click', smoothyscroll, false);//false make it work in capturing phase   
            function smoothyscroll(e){
                // use preventDefault to prevent the default action to occur 
                e.preventDefault();
                // invoke the related section & add scrollintoview method to it 
                const viewSection = document.getElementById(link.getAttribute('data-link')); 
                viewSection.scrollIntoView({behavior:"smooth"});
            };
        });           
    }         
    SmoothScroll();      

    // make the section active when it in the view port by using observation to observe sections & make heighlight sections in navigation bar while scroll 
    // make a new intersectionsobserver to observe section when it in view port
    const observer = new IntersectionObserver(function (entries){
        entries.forEach(function(entry){
            // listen to scroll event and to toggle 'your active class' when the section in view port or not
            // using isintersection property for observer
            window.addEventListener('scroll',activeSection,false);
                function activeSection (ev) {
                    ev.preventDefault();
                    entry.target.classList.toggle('your-active-class',entry.isIntersecting);
                    //start to make the section in navigation bar heighlight (make style in css file )when the section in view port by add active class according to this condition
                    links.forEach(function(link) {
                        if(entry.isIntersecting === true && link.textContent === entry.target.dataset.nav){       
                            link.classList.add('active')
                        }else{
                            link.classList.remove('active')
                        }
                    })
                }
        })
        console.log(entries)// to test 
    },{threshold:0.65})//make change in css file  to work in responsive view  
    // apply the observation on sections 
    sections.forEach(function (section){
    observer.observe(section);
    })
    
    //function for search button to work 
    // invoke search bar and icon
    const search = document.getElementById('search');
    const icon   = document.querySelector('.button');
    icon.addEventListener('click',searchin,false);
        function searchin (evt){
            evt.preventDefault();
            window.find(search.value);           
        }
    
    //welcome alert appear after 0.5 second 
    const myTime = setTimeout(hello,500);
    function hello (){
    let time   = new Date();
    alert (`Hello \nWelcome,How are you today?\n${time}`);
    }
  
    //add date to the footer of page 
    const footer = document.querySelector('.page__footer');
    const date   = document.createElement('p');
    date.innerHTML= new Date;
    footer.append(date);
    
      
  //to test performmance
    performance.now()     
}