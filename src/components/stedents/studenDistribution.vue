<template>
  <div class="studenDistribution mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">学员分布城市排行</h2>
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
      <div id="studenDistribution" style="height: 415px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
export default {
  data(){
    return{
      radio: '年',
      scrollbar:true
    }
  },
  mounted() {
    this.initMaps();
  },
  methods:{
    initMaps(){
      var that = this;
      let data1 = {};
      data1.name = "学员增减量";
      data1.data = [];
      for (var i = 0; i < 12; i++){
          var num = parseInt(Math.random() * 50000);
          data1.data.push(num);
      }
      let data2 = ['01/01', '01/01', '01/01', '01/01', '01/01', '01/01', '01/01'];

      Highcharts.chart('studenDistribution', {
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
              categories: data2,
              max:5,
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
              },
              
          },
          legend: {
              align: 'right',
              // x: -30,
              // verticalAlign: 'top',
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
          series: [data1],
          credits:{
            enabled: false //不显示LOGO 
          }
      });
    },
    changeVal(t){
        console.log(t)
        if(t == "年"){
            this.scrollbar = true;
        }else{
            this.scrollbar = false;
        }
        this.initMaps();
    }
  }
};
</script>
<style>

</style>
