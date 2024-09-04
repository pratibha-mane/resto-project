<template>
<img class="logo" src="../assets/resto logo.jpg" />

<h1>Login Page</h1>
<div class="register">
    
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" >Login</button>
    <p>
    <router-link to ="/Sign-up">SignUp</router-link>
    </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'LoginFirst',
    data(){
        return{
            email:'',
            password:''
        }
    },

    methods:{
       async login(){
           let result = await axios.get(
               `http://localhost:3000/user?email=${this.email}&password=${this.password}`
           );
        //console.log(result);
           if(result.status==200 && result.data.length>0){
                 localStorage.setItem("user.info",JSON.stringify(result.data[0]));
            this.$router.push({name:'HomeName'})
         //console.log(result);
           }
        },
    },

  mounted(){
      let user = localStorage.getItem('user.info');
      if(user){
          this.$router.push({name:'HomeName'})
      }
    }
}
</script>