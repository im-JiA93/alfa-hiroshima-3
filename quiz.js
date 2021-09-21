alert("PCの侵入に成功すると、そこにはある一つのフォルダが。\nフォルダにはパスワードがかかっている...\nもう後戻りは出来ない。これが最後の謎だ！")
var quiz=[
    ["ハッカーの性別は…？","Mr","Ms","Mrs","オカマ",3],
    ["ハッカーが身につけているアクセサリーは…？","メガネ","ネックレス","サングラス","ピアス",1],
    ["ハッカーの髪型は…？","ちょうはつ","たんぱつ","アフロ","モヒカン",2],
    ["ハッカーの体型は…？","マッチョ","ガリガリ","普通","肥満",4]
];
var counter=0;

function set(){
    var order=document.getElementById("order");
    var question=document.getElementById("question");
    order.innerHTML="Question."+(counter+1);
    question.innerHTML=quiz[counter][0];
    
    for(var i=1; i<5; i ++){
        var answer=document.getElementById("answer"+i);
        answer.innerHTML=quiz[counter][i];
    }
}

function judge(num){
    var result=document.getElementById("result");
    var answer=quiz[counter][5];
    if (answer==num && counter == 3) {
        result.innerHTML="全てのロックを解除しました";
        alert("全てのロックを解除しました")
        location.href="final.html"
    }else if(answer==num){
        result.innerHTML="ロックを１つ解除しました";
        alert("ロックを１つ解除しました")
        counter+=1;
        set();
    }else{
        location.reload();
        alert("パスワードが違います。最初から入力し直す必要があります。")

    }
}