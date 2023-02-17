document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const button = document.createElement('button');
  button.innerHTML = 'do something';
  button.onclick = function (deleteMe) {
    alert('button clicked!');
  }
  const place = document.querySelector('body');
  place.appendChild(button)
})

const handleFormSubmit = function(event){
  event.preventDefault();
  console.log(event);
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  console.log(title, author, category)

  const formResult = document.createElement('li');
  formResult.textContent = `Title: ${title} Author: ${author} Category: ${category}`;
  formResult.id = ('book-border');

  const list = document.querySelector('#reading-list');
  list.insertBefore(formResult, list.firstChild);

  document.getElementById('new-item-form').reset();
}


const deleteMe = function() {
  form = document.querySelector('#new-item-form')
  form.reset();
}