let input = document.getElementById("input");
let wrapper = document.getElementsByClassName('wrapper')[0];
let image = document.getElementsByTagName('img')[0];
let button =  document.getElementsByTagName('button')[0];
button.addEventListener('click',function (e) {
    e.preventDefault();
    wrapper.classList.add('active');
    if (input.value) {
        let qrText = input.value;
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`
    } else {
        alert('Please Enter A Text')
    }
})