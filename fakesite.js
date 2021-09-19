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
      location.href="main.html"
     },4000)
   }
  }  
})
