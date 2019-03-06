<template>
  <div class="account mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">新增账户数量</h2>
            <span class="times">{{startDate}}-{{endDate}}</span>
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
      <div id="account" style="height: 400px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import h5App from "./../../plugins/h5App";
import Highcharts from 'highcharts/highstock';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import Highcharts3D from 'highcharts/highcharts-3d';
// import $ from 'jquery';
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts);
// Highcharts3D(Highcharts);
export default {
  data(){
    return{
      radio: '年',
      scrollbar:false,
      startDate:null,
      endDate:null
    }
  },
  mounted() {
    this.getDate();
    // this.initMaps();
  },
  methods:{
    getDate(){
      let that = this;
      let baseUrl = '/account/newAccountNum';
      this.endDate = h5App.getNowDate();
      switch (this.radio){
        case "年":
          baseUrl = '/account/newAccountNum_year';
          this.startDate = h5App.getLastYearDy();
          break;
        case "月":
          this.startDate = h5App.getLastMonthDy();
          break;
        case "周":
          this.startDate = h5App.getLastWeekDy();
          break;
      }
      this.$post(baseUrl,{startDate:that.startDate,endDate:that.endDate}).then((response)=>{
          // console.log(response)
          that.initMaps(response);
      })
    },
    initMaps(res){
      let that = this;
      let data1 = {
          name:"新增账户",
          data:[]
      }
      let data2 = [];
      // console.log(res.resultMap.size)
      if(Object.keys(res.resultMap).length >= 6){
          that.scrollbar = true;
      }
      for(let i in res.resultMap){
          data1.data.push(res.resultMap[i]);
          data2.push(i);
      }
      // var data1 = {};
      // data1.name = "新增账户";
      // data1.data = [];
      // var data2 = [];
      // for (var i = 0; i < max; i++){
      //     var num = parseInt(Math.random() * 8000);
      //     data1.data.push(num);
      //     data2.push(i+1);
      // }
      // // var data2 = ['01/01', '01/01', '01/01', '01/01', '01/01', '01/01', '01/01'];
      // console.log(data1)

      Highcharts.chart('account', {
          chart: {
              type: 'column'
          },
          title: {
              text: ''
          },
          subtitle:{
              text:''
          },
          scrollbar: {
              barBackgroundColor: 'gray',
              barBorderRadius: 7,
              barBorderWidth: 0,
              buttonBackgroundColor: 'gray',
              buttonBorderWidth: 0,
              buttonArrowColor: 'yellow',
              buttonBorderRadius: 7,
              rifleColor: 'yellow',
              trackBackgroundColor: 'white',
              trackBorderWidth: 1,
              trackBorderColor: 'silver',
              trackBorderRadius: 7
          },
          xAxis: {
              categories: data2,
              max:6,
              scrollbar: {
                  enabled: that.scrollbar,
                  showFull: false
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              },
              stackLabels: {
                  //柱形图顶部显示的数据
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
              }
          },
          legend: {
              align: 'right',
              // x: -30,
              verticalAlign: 'bottom',
              // y: 25,
              // floating: true,
              // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              // borderColor: '#CCC',
              // borderWidth: 1,
              shadow: false,
              enabled:false
          },
          tooltip: {
              //
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
              enabled: false
          },
          plotOptions: {
              //柱状图重叠上的文字
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: false,
                      color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                  }
              },
              series:{
                  color:'#e65aa4'
              }
          },
          exporting:{
              enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
          },
          series: [data1],
          credits:{
            enabled: false //不显示LOGO 
          }
      });
    },
    changeVal(){
        // this.initMaps();
        // this.$alert('这是一段内容', '标题名称', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     console.log("333333333333333333333")
        //   }
        // })
        this.getDate();
    }
  }
};
</script>
<style>

</style>
