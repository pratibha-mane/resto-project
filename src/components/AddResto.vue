<template>
<HeaderCom />
<h1> Welcome Add Restourant page </h1>

</template>

<script>
import HeaderCom from './HeaderCom.vue'
export default {
    name: 'AddResto',
    components: {
HeaderCom
    },

 mounted(){
      let user = localStorage.getItem('user.info');
      if(!user){
          this.$router.push({name:'SignUp'})
      }
    }
}
</script>
