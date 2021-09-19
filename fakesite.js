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
      location.href="main.html"
     },4000)
   }
  }  
})
