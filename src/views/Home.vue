<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col class='pd-r-0' :span="12"><account-component></account-component></el-col>
      <el-col class='pd-r-0' :span="12"><china-component></china-component></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-col class='pd-r-0' :span="8"><views-component></views-component></el-col>
      <el-col class='pd-r-0' :span="8"><newRanking-component></newRanking-component></el-col>
      <el-col class='pd-r-0' :span="8"><useSoftware-component></useSoftware-component></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import accountComponent from "@/components/account/account.vue";//新增账户数量
import chinaComponent from "@/components/account/china.vue";//账户分布密度图
import viewsComponent from "@/components/account/websiteViews.vue";//官网浏览量趋势
import newRankingComponent from "@/components/account/newRanking.vue";//新增账户分布排行
import useSoftwareComponent from "@/components/account/useSoftware.vue";//软件使用量
export default {
  name: "home",
  data() {
    return {
      show2: true
    };
  },
  components: {
    accountComponent,
    chinaComponent,
    viewsComponent,
    newRankingComponent,
    useSoftwareComponent
  }
};
</script>
<style scoped lang="less">
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.pd-r-0{padding-right:0}
</style>
