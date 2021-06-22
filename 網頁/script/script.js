const inputtopic = document.querySelectorAll('.topicwd');

function rmrev(){
    this.classList.remove("unfocus");
    this.classList.add("focus");
}

inputtopic.forEach(input => {
    input.addEventListener('click',rmrev);
});