const app=new Vue({
  el:"#app",
  data:{
    message:"IPアドレス取得中..." ,
    seen: false
  },
  methods:{
   hello(){
    alert("Hello World")
   } ,
    show(){
     this.seen=true
    }
  }
})
