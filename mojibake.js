alert("キーワードを入力すると、ハッカーのPCにたどり着いた。\nただ、PCにはパスワードがかかっている...")
document.getElementById("text-button").onclick = function() {
    document.getElementById("text").innerHTML = "パスタ　　スイカ　　ワイン　　ー　　ドリアン　<br>　はちみつ　　天かす　　さんま　　イチジク";
    alert("文字化けが直った")
  };

  var point = 0
  var q_no = 0
var q_data = [
    {text  : '　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　パスワードを入力',
     answer : ['天さイ']},
   ];


window.onload = function (){
document.getElementById("q_text").innerHTML = q_data[q_no].text;
}


function EEE(){
  if (q_data[q_no].answer.includes(AAA.CCC.value)) {
        document.AAA.reset();
      point++;
      alert("PCの侵入に成功した...\n\n                             Next...→→");
    }else{
      document.AAA.reset();
      alert("パスワードが違います。ページがリロードされます。");
  }

  q_no++;

  if (point == 1 ) {
    window.location.replace('quiz.html');
}else if (point == 0){
  location.reload();
  }

  document.getElementById("q_text").innerHTML = q_data[q_no].text;
}