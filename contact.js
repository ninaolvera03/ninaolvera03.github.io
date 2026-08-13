function sendMessage()
{
    let username = document.contactMe.uname.value;
    let phoneNum = document.contactMe.phone.value;
    let content = document.contactMe.message.value;

    if(username == "" || content == "")
    {
        alert("Required fields are empty. Please fill in the required fields.");
    }
    else if(content.length <= 10)
    {
        alert("Message is too short. Please write a longer message.");
    }
    else
    {
        alert("Message sent successfully!");
        let subject = `Message through Portfolio from ${username}`;

        let body = `${content}\n\nFrom: ${username}\nPhone Number: ${phoneNum}`;

        let mailToLink = `mailto:nina.olvera03@utrgv.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailToLink;
    }
}