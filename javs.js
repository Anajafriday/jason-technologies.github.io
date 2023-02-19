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

// Get all the like buttons and like count elements
const likeButtons = document.querySelectorAll('.like-post');
const likeCounts = document.querySelectorAll('.like-info');


// Loop through each like button
likeButtons.forEach((button, index) => {
  // Get the current like count for this post from local storage
  let currentCount = localStorage.getItem(`post${index+1}`);

  // If the count is not null, set it as the text content of the corresponding like count element
  if (currentCount !== null) {
    likeCounts[index].textContent = currentCount;
  }

  // Add a click event listener to the button
  button.addEventListener('click', () => {
    // Increment or decrement the count based on whether the button was already clicked
    if (button.classList.contains('clicked')) {
      currentCount--;
    } else {
      currentCount++;
    }

    // Update the like count for this post in local storage and on the page
    localStorage.setItem(`post${index+1}`, currentCount);
    likeCounts[index].textContent = currentCount;

    // Toggle the clicked class on the button
    button.classList.toggle('clicked');
  });
});
// Get all the comment forms and comment lists
const commentForms = document.querySelectorAll('.comment-form');
const commentLists = document.querySelectorAll('.comment-list');
const commentBtn = document.getElementById('comment-btn')

// Loop through each comment form
commentForms.forEach((form, index) => {
  // Get the current comments for this post from local storage
  let currentComments = JSON.parse(localStorage.getItem(`post${index+1}-comments`)) || [];

  // Loop through each comment in the current comments array and add it to the comment list
  currentComments.forEach(comment => {
    const li = document.createElement('li');
    li.textContent = comment;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.addEventListener('click', () => {
      currentComments = currentComments.filter(c => c !== comment);
      localStorage.setItem(`post${index+1}-comments`, JSON.stringify(currentComments));
      li.remove();
    });

    li.appendChild(deleteButton);
    commentLists[index].appendChild(li);
  });

 
  // Add a submit event listener to the form
  form.addEventListener('submit', event => {
    event.preventDefault();
    const input = form.querySelector('input');
    const comment = input.value.trim();
    if (comment) {
      currentComments.push(comment);
      localStorage.setItem(`post${index+1}-comments`, JSON.stringify(currentComments));

      const li = document.createElement('li');
      li.textContent = comment;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        currentComments = currentComments.filter(c => c !== comment);
        localStorage.setItem(`post${index+1}-comments`, JSON.stringify(currentComments));
        li.remove();
      });

      li.appendChild(deleteButton);
      commentLists[index].appendChild(li);
      input.value = '';      
    }
  });
  commentBtn.addEventListener('click',function(){
      form.style.display="block"
  })

});

            // pop-up
            const exitPopupBtn = document.getElementById("exit-popup-btn")
            const popupContainer = document.getElementById("popup-container")
            const acceptBtn = document.getElementById("accept-btn")
            const declineBtn = document.getElementById("decline-btn")
            const formLogin = document.getElementById("form")
            
             exitPopupBtn.addEventListener("click",function(){
                   popupContainer.style.display="none"
         
             })
            setTimeout(function(){
                  popupContainer.style.display ="inline"
            },5000)

         formLogin.addEventListener("submit",function(e){
             e.preventDefault()

             const logFormData = new FormData(formLogin)
             const Name = logFormData.get("fullName")
                
         })
         
         acceptBtn.addEventListener("click",function(){
            
                 popupContainer.style.display="none"
         })
