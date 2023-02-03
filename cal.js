
function displayContent(content){
    formGroupExampleInput.value+=content
}

function allclear(){
    formGroupExampleInput.value =""
}
function evalexp(){
    formGroupExampleInput.value = eval(formGroupExampleInput.value)

}
function backSpace(){
    formGroupExampleInput.value = formGroupExampleInput.value.slice(0,-1)
}