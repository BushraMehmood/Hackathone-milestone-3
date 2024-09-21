//get refrences to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form Submission
form.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>Education:</b>").concat(education, "</p>\n    <p><b>Experience:</b>").concat(experience, "</p>\n    <p><b>Skills:</b>").concat(skills, "</p>\n\n    <he>Education</h3>\n    <p>").concat(education, "</p>\n\n    \n    <he>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    \n    <he>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else
        (console.error("The resume dislay is missing."));
});
