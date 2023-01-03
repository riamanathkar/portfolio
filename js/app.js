(function(){

    var buttons = document.querySelectorAll('.btn2')
    const photos = document.querySelectorAll('.photo')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter= e.target.dataset.filter

            photos.forEach((item) => {
                if (filter === 'all'){
                    item.style.display = 'block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

    var header = document.getElementById("buttons");
    var btns = header.getElementsByClassName("btn2");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }


})();