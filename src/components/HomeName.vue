<template>
<HeaderCom />
<h1>Hello {{name}}, Welcome home page </h1>
<table>
<tr v-for="item in RestoBar" :key="item.id">
<td>{{item.id}}</td>
<td>{{item.name}}</td>
<td>{{item.address}}</td>
<td>{{item.contact}}</td>
</tr>
</table>

</template>

<script>
import axios from 'axios'
import HeaderCom from './HeaderCom.vue'
export default {
    name: 'HomeName',
    data(){
        return{
            name:'',
            RestoBar:[],
        }
    },
    components: {
HeaderCom
    },

 async mounted(){
      let user = localStorage.getItem('user.info');
      this.name= JSON.parse(user).name
      if(!user){
          this.$router.push({name:'SignUp'})
      }
      let result = await axios.get("http://localhost:3000/RestoBar");
      console.warn(result);
      this.RestoBar = result.data
    }
}
</script>
