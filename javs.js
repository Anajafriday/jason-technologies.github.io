            let buttonClose = document.querySelector('.buton-close');
            let navigation = document.querySelector('.nav');
            let openButton = document.querySelector('.buton-open');


            buttonClose.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            openButton.addEventListener("click",()=>{
                  navigation.classList.add('navigation-open');
            });

            let clickList = document.querySelector('.nav-list');

            clickList.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList1 = document.querySelector('.nav-list-1');

            clickList1.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList2 = document.querySelector('.nav-list-2');

            clickList2.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList3 = document.querySelector('.nav-list-3');

            clickList3.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList4 = document.querySelector('.nav-list-4');

            clickList4.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList5 = document.querySelector('.nav-list-5');

            clickList5.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });

            let clickList6 = document.querySelector('.nav-list-6');

            clickList6.addEventListener("click",()=>{
                  navigation.classList.remove('navigation-open');
            });
            let drop = document.querySelector(".drop");
            drop.addEventListener("click",()=>{
                  navigation.drop.add('navigation-open')
            })