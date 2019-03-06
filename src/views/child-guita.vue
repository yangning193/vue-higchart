<template>
  <div class="child-guita">
    <studentChild-component :msg="msg"></studentChild-component>
  </div>
</template>
<script>
import studentChildComponent from "./student-child/classLists.vue";//学员增减量

export default {
  name: "child-guita",
  data(){
    return{
      msg:"吉他"
    }
  },
  components: {
    studentChildComponent
  },
  mounted() {
    
  },
  methods:{
    
  }
};
</script>
