let mail = document.getElementById('contact-form');

mail.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = "Enquiry"
    let body = "Phone:"+phone+'\r\n';
    body =body+ document.getElementById('message').value;
    body=encodeURIComponent(body)
    console.log({name, email, subject, body});
    window.location.href = `mailto:rindishkrishna@gmail.com?subject=${subject}&body=${body}`
});