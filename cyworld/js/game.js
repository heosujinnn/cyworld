const startWord=()=>{
    let myword=document.getElementById("myword").value 
    let word=document.getElementById("word").innerText

    let lastword=word[word.length-1] /**마지막글자 */
    let firstword=myword[0]
    
    if (lastword==firstword){
        document.getElementById("result").innerText="정답입니다!"
        document.getElementById("word").innerText=myword
        document.getElementById("myword").value=""

    }
    else {
        document.getElementById("result").innerText="떙!"
        document.getElementById("myword").value=""


    }
}