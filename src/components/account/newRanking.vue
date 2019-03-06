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
      <div id="ranking" style="height: 400px;margin: 0 auto"></div>
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
      scrollbar:false,
    }
  },
  mounted() {
    this.getDate();
  },
  methods:{
    getDate(){
      let that = this;
      let baseUrl = '/account/findAccountProvinceDistribute_ranking';
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
      this.$post(baseUrl,{startDate:that.startDate,endDate:that.endDate}).then((response)=>{
          // console.log(response)
          that.initMaps(response);
      })
    },
    initMaps(res){
      const that = this;
      let data = {};
      data.name = "新增账户";
      data.data = [];
      let xAxis = [];
      for(let i in res.resultMap){
          xAxis.push(i);
          data.data.push(res.resultMap[i]);
      }

      // for (var i = 0; i < 7; i++){
      //     var num = parseInt(Math.random() * 8000);
      //     data.data.push(num);
      // }
      
      if(Object.keys(res.resultMap).length >= 6){
          that.scrollbar = true;
      }
      Highcharts.chart('ranking', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle:{
                text:''
            },
            xAxis: {
                categories: xAxis,
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
                align: 'left',
                // x: -30,
                verticalAlign: 'bottom',
                // y: 25,
                // floating: true,
                // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                // borderColor: '#CCC',
                // borderWidth: 1,
                shadow: false,
                // enabled:false
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
            series: [data],
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
