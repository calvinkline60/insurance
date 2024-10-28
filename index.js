const form = document.getElementById('myForm');
 form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name').value;
    alert(`Form submited your Email is: ${nameInput}`);
 });