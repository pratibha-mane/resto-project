<template>

<div class="nav">
<router-link to="/">Home </router-link>
<router-link to="AddResto">Add Restaurant </router-link>
<router-link to="UpdateResto">Update Restaurant </router-link>
<a v-on:click="logout" href="#">Logout </a>
</div>
</template>
<script>
export default{
    name:'HeaderCom',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"LoginFirst"})
        }
    }
}
</script>

<style>
.nav{
    background-color:#333;
    overflow:hidden
}
.nav a{
    float:left;
    color: white;
    text-align: center;
    padding:10px 14px;
    text-decoration: none;
    font-size: 14px;
    margin-right: 4px;
}
.nav a:hover{
  


}
</style>