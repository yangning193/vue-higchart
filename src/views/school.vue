<template>
  <div class="school">
    <el-row style="font-size: 24px;padding-left: 20px;margin: 10px 0;">{{msg}}</el-row>
    <el-row :gutter="20">
      <el-col class='pd-r-0' :span="6"><totalPeo-component></totalPeo-component></el-col>
      <el-col class='pd-r-0' :span="12"><schoolDataDetails-component></schoolDataDetails-component></el-col>
      <el-col class='pd-r-0' :span="6"><schoolData-component></schoolData-component></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-col class='pd-r-0' :span="8"><trendsInClass-component></trendsInClass-component></el-col>
      <el-col class='pd-r-0' :span="8"><hostConnection-component></hostConnection-component></el-col>
      <el-col class='pd-r-0' :span="8"><hostExceptionRecord-component></hostExceptionRecord-component></el-col>
    </el-row>
  </div>
</template>
<script>
// import Highcharts from 'highcharts/highstock';
import totalPeoComponent from "@/components/school/totalPeo.vue";//总数
import schoolDataDetailsComponent from "@/components/school/schoolDataDetails.vue";//学校数据详情
import schoolDataComponent from "@/components/school/schoolData.vue";//学校数据
import trendsInClassComponent from "@/components/school/trendsInClass.vue";//上课人数走势
import hostConnectionComponent from "@/components/school/hostConnection.vue";//主机链接情况
import hostExceptionRecordComponent from "@/components/school/hostExceptionRecord.vue";//主机异常记录

export default {
  name: "school",
  data(){
    return{
      msg:"学校信息",
      model:null
    }
  },
  components: {
    totalPeoComponent,
    schoolDataDetailsComponent,
    schoolDataComponent,
    trendsInClassComponent,
    hostConnectionComponent,
    hostExceptionRecordComponent
  },
  mounted() {
    
  },
  methods:{
    
  }
};
</script>
