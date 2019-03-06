<template>
  <div class="child-drum">
    <studentChild-component :msg="msg"></studentChild-component>
  </div>
</template>
<script>
import studentChildComponent from "./student-child/classLists.vue";//学员增减量

export default {
  name: "child-drum",
  data(){
    return{
      msg:"电鼓"
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
