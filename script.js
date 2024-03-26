
var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right ="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz6C11b9nGatwSRyUYsixuuFKeFTxr_yIeycjlC_hVc3klcHX1W_V2UOA4l9gZJ8ofTbw/exec'
    const form = document.forms['submit-to-google-sheet'];
    const msg =document.getElementById("msg");
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent Successfully";
            setTimeout(function(){
                msg.innerHTML="";
            },2000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })