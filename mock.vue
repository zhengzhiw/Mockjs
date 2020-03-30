...
...
...
export default{
  name: 'mock',
  data() {
    return{
      ...
    }
  },
  methods: {
    mockjs () {
      this.$axios.get("/api/mock").then(function (ret){
        if(Object.is(ret.status, 200)){
          console.log(ret.data)
        }
      }).catch(functhion (err){
        console.log(err)
      })
    }
  }
}
