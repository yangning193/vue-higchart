<template>
  <div class="stedents">
    <el-row style="font-size: 24px;padding-left: 20px;margin: 10px 0;">{{msg}}</el-row>
    <el-row :gutter="20">
      <el-col class='pd-r-0' :span="8"><studentNum-component></studentNum-component></el-col>
      <el-col class='pd-r-0' :span="10"><studenDensity-component></studenDensity-component></el-col>
      <el-col class='pd-r-0' :span="6"><studenTotal-component></studenTotal-component></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-col class='pd-r-0' :span="8"><studenDistribution-component></studenDistribution-component></el-col>
      <el-col class='pd-r-0' :span="8"><studentClass-component></studentClass-component></el-col>
      <el-col class='pd-r-0' :span="8"><studenData-component></studenData-component></el-col>
    </el-row>
  </div>
</template>
<script>
// import Highcharts from 'highcharts/highstock';
import studentNumComponent from "@/components/stedents/studenNum.vue";//学员增减量
import studenDensityComponent from "@/components/stedents/studenDensity.vue";//学员分布密度
import studenTotalComponent from "@/components/stedents/studenTotal.vue";//数据展示
import studenDistributionComponent from "@/components/stedents/studenDistribution.vue";//学员分布城市排行
import studentClassComponent from "@/components/stedents/studentClass.vue";//城市上课学员数量排行
import studenDataComponent from "@/components/stedents/studenData.vue";//学员数据

export default {
  name: "stedents",
  data(){
    return{
      model:null
    }
  },
  props: {
    msg: String
  },
  components: {
    studentNumComponent,
    studenDensityComponent,
    studenTotalComponent,
    studenDistributionComponent,
    studentClassComponent,
    studenDataComponent
  },
  mounted() {
    this.getUrl();
  },
  methods:{
    getUrl(st,key){
      let url;
      if (st) {
        url = st;
      }else{
        url = window.location.search;
      }
      let index = url.indexOf("?");
      this.model = url.substr(index + 1,url.length);
      console.log(this.model)
　　}
  }
};
</script>
