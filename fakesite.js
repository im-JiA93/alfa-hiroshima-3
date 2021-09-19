const app=new Vue({
  el:"#app",
  data:{
    message:"IPアドレス取得中..." ,
    seen: false
  },
  methods: {
   show(){
    const se = new Audio("警報が鳴る.mp3")
    se.play()
    this.seen = true
     setTimeout(()=>{
      this.message="個人情報取得中..."
     },1000)
     setTimeout(()=>{
      this.message="データ送信中..."
     },2000)
     setTimeout(()=>{
      this.message="Obtaining personal information..."
     },2800)
     setTimeout(()=>{
      this.message="正在收集的个人数据..."
     },3300)
     setTimeout(()=>{
      this.message="蛟倶ｺｺ諠??ｱ蜿門ｾ嶺ｸｭ"
     },3600)
     setTimeout(()=>{
      this.message="繧｢繝峨Ξ繧ｹ蜿門ｾ嶺ｸｭ"
     },3700)
     setTimeout(()=>{
      this.message="繝??繧ｿ騾∽ｿ｡荳ｭ"
     },3800)
     setTimeout(()=>{
      this.message="縺ゅ↑縺溘ｒ繝上ャ繧ｭ繝ｳ繧ｰ縺吶ｋ"
     },3900)
     setTimeout(()=>{
      location.href="main.html"
     },4000)
   }
  }  
})
