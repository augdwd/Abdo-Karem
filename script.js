function check(){
    const correct=['d','d','b','c','a','a','d','b','c','b','a','d','b','b','b','d','d','c','b','c'];
  let score=0;
    for(let i=0; i<correct.length; i++){
    const annw=document.querySelector(`input[name="q${i + 1}"]:checked`)?.value
    if(annw === correct[i]){
     score++   
    }
}
document.getElementById('result').textContent= `النتيجه:${score} من 20`
}