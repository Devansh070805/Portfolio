
let flag=0;



function changetime() {
    const myimg = document.getElementById("moon1");
    const bg=document.getElementById("body_");
    const navbar=document.getElementById("nav_bar");
    const dev=document.getElementById("Dev");
    const about=document.getElementById("about");//about page
    const skills=document.getElementById("skills");//skills page
    const projects=document.getElementById("projects");//projects page
    const contact=document.getElementById("contact");//contact page

    if(flag==0)
    {
        myimg.src = "\\Portfolio\\body_images\\sun.png";
        bg.style.backgroundColor="#03cafc";
        navbar.style.backgroundColor="#0a86c4";
        dev.style.color="#0a86c4";

        about.href="\\Portfolio\\about\\about_blue.html";
        skills.href="\\Portfolio\\skills\\skills_blue.html";
        projects.href="\\Portfolio\\projects\\projects_blue.html";
        contact.href="\\Portfolio\\contact\\contact_blue.html";
        flag=1;
    }
    else{
        myimg.src = "\\Portfolio\\body_images\\moon.png";
        bg.style.backgroundColor="#3c1273";
        navbar.style.backgroundColor="blueviolet";
        dev.style.color="blueviolet";

        about.href="\\Portfolio\\about\\about_purple.html"; 
        skills.href="\\Portfolio\\skills\\skills_purple.html";
        projects.href="\\Portfolio\\projects\\projects_purple.html";
        contact.href="\\Portfolio\\contact\\contact_purple.html";
        flag=0;
    }

    
    
  }
  function twitter()
  {
     ahref="https://twitter.com/Devansh17237054";
  }
  
