<template>
  <div class="account mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">新增账户数量</h2>
          </div>
        </el-col>
      </div>
    </div>
    <div>
      <div id="account" style="height: 420px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import cn from './../../plugins/zn';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import Highcharts3D from 'highcharts/highcharts-3d';
import $ from 'jquery';
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
      this.$post(baseUrl,{startDate:that.startDate,endDate:that.endDate}).then((response)=>{
          // console.log(response)
          let maps = [
            ["伤害",11],
            ["你是",22]
            ["看看",19]
          ]
          that.initMaps(response);
      })
      // that.initMaps();
    },
    initMaps(res){
      let that = this;
        // create the chart
        Highcharts.stockChart('account', {
          chart: {
            alignTicks: false
          },
          rangeSelector: {
            selected:that.$store.state.default_show,
          },
          title: {
            text: ''
          },
          scrollbar : {
              enabled : false
          },
          series: [{
            type: 'column',
            name: '数量：',
            data: res.resultMap,
            tooltip: {
                valueDecimals: 2
            },
            dataGrouping: {
              units: [[
                'week', // unit name
                [1] // allowed multiples
              ], [
                'month',
                [1, 2, 3, 4, 6]
              ]]
            }
          }],
          credits:{
            enabled: false //不显示LOGO 
          }
        });
    }
  }
};
</script>
<style>

</style>
