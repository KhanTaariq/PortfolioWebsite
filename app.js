(function () 
{
    [
     ...document.querySelectorAll(".control")
    ]
    .forEach
    (
        button =>
        {
            button.addEventListener
            (   
                "click", function()
                {
                    document.querySelector(".active-btn").classList.remove("active-btn");
                    this.classList.add("active-btn");
                    document.querySelector(".active").classList.remove("active");
                    document.getElementById(button.dataset.id).classList.add("active");
                }
            )
        }
    );
    document.querySelector(".theme-btn").addEventListener
    (
        "click", () =>
        {
        document.body.classList.toggle("light-mode");
        }
    )
}
)();

src="https://smtpjs.com/v3/smtp.js"
var btn = document.getElementById('btn')
btn.addEventListener('click', function(e)
{//console.log('hi');
    e.preventDefault() 
    var name = documnet.getElementById('name').value;
    var email = documnet.getElementById('email').value;
    var subject = documnet.getElementById('subject').value;
    var message = documnet.getElementById('message').value;
    var body = "name:" + name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "taariqkhs@gmail.com",
        Password : "aexoenndwbpfxgpq",
        To : 'taariqkhs@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
    message => alert("message sent successfully")
    );  
})
