<template>
  <div class="websiteViews mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">新增账户分布排行</h2>
            <span class="times">2017/12/12-2018/03/12</span>
          </div>
        </el-col>
        <el-col class="tel-right" :span="12">
            <el-radio-group v-model="radio" size="medium" @change="changeVal">
              <el-radio-button label="周"></el-radio-button>
              <el-radio-button label="月"></el-radio-button>
              <el-radio-button label="年"></el-radio-button>
            </el-radio-group>
        </el-col>
      </div>
    </div>
    <div>
      <div id="software" style="height: 400px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import h5App from "./../../plugins/h5App";
import Highcharts from 'highcharts/highstock';
export default {
  data(){
    return{
      radio: '年',
      startDate:null,
      endDate:null
    }
  },
  mounted() {
    this.getDate();
  },
  methods:{
    getDate(){
      let that = this;
      let baseUrl = '/account/findAccountCourseDistribute_ranking';
      this.endDate = h5App.getNowDate();
      switch (this.radio){
        case "年":
          this.startDate = h5App.getLastYearDy();
          break;
        case "月":
          this.startDate = h5App.getLastMonthDy();
          break;
        case "周":
          this.startDate = h5App.getLastWeekDy();
          break;
      }
      this.$post(baseUrl,{startDate:new Date(that.startDate).getTime(),endDate:new Date(that.endDate).getTime()}).then((response)=>{
          console.log(response)
          that.initMaps(response);
      })
    },
    initMaps(res){
      let categories = [],
          datas = [],
          noStu = {"name":"非学员",data:[]},
          stu = {"name":"学员",data:[]};
      for(let n in res){
          categories.push(res[n].name);
          noStu.data.push(res[n].noStudentNum);
          stu.data.push(res[n].studentNum);
      }
      datas.push(noStu);
      datas.push(stu)
      console.log(datas)
      Highcharts.chart('software', {
          chart: {
              type: 'column',
              options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 75
              },
              marginTop: 0,
              marginRight: 0,
              marginLeft:0
            // marginBottom:0
          },
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: categories,
              // crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y} 人</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                  // stacking: 'normal',
                  // depth: 40
              }
          },
          series: datas,
          exporting:{
              enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
          },
          credits:{
            enabled: false //不显示LOGO 
          }
      });
    },
    changeVal(t){
        this.getDate();
    }
  }
};
</script>
<style>

</style>
