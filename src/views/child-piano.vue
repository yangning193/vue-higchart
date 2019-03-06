<template>
  <div class="child-piano">
    <studentChild-component :msg="msg"></studentChild-component>
  </div>
</template>
<script>
import studentChildComponent from "./student-child/classLists.vue";//学员增减量

export default {
  name: "child-piano",
  data(){
    return{
      msg:"钢琴"
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
