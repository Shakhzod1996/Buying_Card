window.addEventListener("DOMContentLoaded", () => {

    let addBtn = document.querySelectorAll('.add-t-cart');
    let album = document.querySelectorAll('.album');
    let together = document.querySelectorAll('.together');
    let table = document.querySelector('.table');


    addBtn.forEach((add, index) => {
        add.addEventListener('click', (event) => {
            if (event.target.className != 'add-t-cart') {
                return false
            }

            let tr1 = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let input = document.createElement('input')
            let removeBtn = document.createElement('button')
            let div = document.createElement('div')

            // Btn
            removeBtn.style.backgroundColor = 'rgb(187, 71, 18)'
            removeBtn.style.padding = '5px 15px'
            removeBtn.style.marginLeft = '20px'
            // removeBtn.style.marginBottom = '7px'
            removeBtn.style.border = 'none'
            removeBtn.style.borderRadius = '5px'
            removeBtn.style.color = '#fff'
            removeBtn.style.cursor = 'pointer'


            // Input
            input.style.textAlign = 'center'
            input.style.borderRadius = '5px'
            input.style.border = '2px solid rgb(62, 210, 230)'
            input.style.outline = 'none'
            input.style.width = '30px'
            input.setAttribute('type', 'number')
            input.setAttribute('value', '1')


            table.appendChild(tr1);
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            td3.appendChild(input);
            td3.appendChild(removeBtn);
            td1.appendChild(div);


            let tdTittle = document.querySelectorAll('.title')
            let tdImage = document.querySelectorAll('.image')
            let price = document.querySelectorAll('.price')
            let totalPrice = document.querySelector('.total-price');

            let cloneImage = tdImage[index].cloneNode(true);

            cloneImage.style.width = '50px'
            cloneImage.style.height = '50px'
            cloneImage.style.borderRadius = '5px'
            cloneImage.style.marginLeft = '-100px'

            td1.appendChild(cloneImage)

            td1.style.position = 'relative'

            div.style.position = 'absolute'
            div.style.top = '50%'
            div.style.left = '70px'

            div.style.transform = 'translateY(-50%)'



            div.innerHTML = tdTittle[index].innerHTML
            // td1.innerHTML = tdImage[index];
            td2.innerHTML = `$ ${price[index].innerHTML}`;
            removeBtn.innerHTML = 'Remove';
            td3 = input[index];
            td3 = removeBtn[index];

            removeBtn.addEventListener('click', ()=> {
                tr1.classList.add('td3-hide')
                totalPrice.innerHTML = '0'
            })


            input.onchange = function () {
                td2.innerHTML = 
                `$ ${price[index].innerHTML * input.value}`
                totalPrice.innerHTML = `
                $ ${totalPrice.innerHTML = price[index].innerHTML * input.value} 
                `
            }
        })




    })
    let purchase = document.querySelector('.purchase');

    purchase.addEventListener('click', ()=> {
        alert('Thank You For Using Our Services')
    })

});
