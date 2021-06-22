const inputs = document.querySelectorAll('.option');
const input2 = document.querySelectorAll('input[type="number"]');

function clickFunc(){
    let parent = this.parentNode;
    parent.classList.add('labelcheck');
}
function unfocusFunc(){
    if (this.value != ""){
        this.parentNode.classList.add('valueavail');
        this.classList.add('inputvail');
    }
}

inputs.forEach(input => {
    input.addEventListener('click',clickFunc);
});
input2.forEach(input => {
    input.addEventListener('focusout',unfocusFunc);
});