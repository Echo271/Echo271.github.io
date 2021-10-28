function sendMail(params){
    let tempParams = {
        from_name: document.getElementById('nama').value,
        to_name: document.getElementById('email').value,
        message: document.getElementById('pesan').value,
    };

    emailjs.send('service_a7rqliv','template_lciz242',tempParams).then(function(res){
        alert('Berhasil Mengirim email');
    })
}