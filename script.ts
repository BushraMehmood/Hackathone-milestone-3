//get refrences to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form Submission
form.addEventListener('submit',(event: Event) => {
    event?.preventDefault(); //prevent page reload
    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>Education:</b>${education}</p>
    <p><b>Experience:</b>${experience}</p>
    <p><b>Skills:</b>${skills}</p>

    <he>Education</h3>
    <p>${education}</p>

    
    <he>Experience</h3>
    <p>${experience}</p>

    
    <he>Skills</h3>
    <p>${skills}</p>
    `;
    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else(
        console.error(`The resume dislay is missing.`)
    )
    
})


