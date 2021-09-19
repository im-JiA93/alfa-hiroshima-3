const app=new Vue({
  el:"#app",
  data:{
    message:"IPアドレス取得中..." ,
    seen: false
  },
  methods: {
   show(){
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
      this.message="繝??繧ｿ騾∽ｿ｡荳ｭ"
     },3800)
     setTimeout(()=>{
      location.href="main.html"
     },4000)
   }
  }  
})
