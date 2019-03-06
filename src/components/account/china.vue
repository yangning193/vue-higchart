<template>
  <div class="account mapBacg">
    <div>
      <div class="viewBox">
        <el-col :span="24">
          <h2 class="ac cn-tite">账户分布密度图</h2>
        </el-col>
      </div>
    </div>
    <div>
      <div id="chinaMap" style="height: 408px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
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
        provinceDate:null
    }
  },
  mounted() {
    var that = this;
    this.$post("/account/findAccountProvinceDistribute").then((response)=>{
          // console.log(response)
          that.highmaps(response);
    });
    // this.highmaps();
  },
  methods:{
    highmaps(res){
      const that = this;
      Highcharts.setOptions({
              lang: {
                  drillUpText: '< 返回 “{series.name}”'
              }
      });
      var map = null,
          geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';

      $.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
              var data = [];
              //数据
              Highcharts.each(mapdata.features, function(md, index) {
                      let proVal = 0;//省份数据
                      for(let pro in res){
                          if(pro == md.properties.name) {
                              proVal = res[pro];
                          }
                      }
                      var tmp = {
                          name: md.properties.name,
                          value: proVal
                      };
                      if(md.properties.drilldown) {
                          tmp.drilldown = md.properties.drilldown;
                      }
                      data.push(tmp);
              });
              // console.log(data)
              map = new Highcharts.Map('chinaMap', {
                      chart: {
                          events: {
                            drilldown: function(e) {
                              // console.log(e.point.properties);
                              if(e.point.properties.level == "city"){
                                  return;
                              }
                              this.tooltip.hide();
                              // for(var i in e.point){
                              //     console.log(i)
                              // }
                              // 异步下钻
                              if (e.point.drilldown) {
                                      var pointName = e.point.properties.fullname;
                                      map.showLoading('下钻中，请稍后...');
                                      that.$post("/account/findAccountCityDistribute",{"province" : e.point.properties.name})
                                      .then((response)=>{
                                        // console.log(response)
                                          // 获取二级行政地区数据并更新图表
                                          $.getJSON(geochina +   e.point.drilldown + '.json&callback=?', function(data) {
                                                  data = Highcharts.geojson(data);
                                                  Highcharts.each(data, function(d) {
                                                      let cityDate = 0;
                                                      for(let cc in response){
                                                          if(cc == d.name){
                                                              cityDate = response[cc];
                                                          }
                                                      }
                                                      // console.log(d)
                                                      if(d.properties.drilldown) {
                                                          d.drilldown = d.properties.drilldown;
                                                      }
                                                      d.value = cityDate; // 生成 1 ~ 100 随机值
                                                  });
                                                  // console.log(data)
                                                  map.hideLoading();
                                                  map.addSeriesAsDrilldown(e.point, {
                                                          name: e.point.name,
                                                          data: data,
                                                          dataLabels: {
                                                              enabled: true,
                                                              format: '{point.name}'
                                                          }
                                                  });
                                                  map.setTitle({
                                                      text: pointName
                                                  });
                                          });
                                      })
                                      
                              }
                            },
                            drillup: function() {
                                map.setTitle({
                                   text: '中国'
                                });
                            }
                          }
                      },
                      title: {
                          text: '',
                      },
                      subtitle: {
                          text: '',
                      },
                      mapNavigation: {
                          enabled: true,
                          buttonOptions: {
                              verticalAlign: 'bottom'
                          }
                      },
                      exporting:{
                          enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                      },
                      legend:{
                          layout: 'vertical',
                          align: 'right',
                          verticalAlign: 'bottom',
                          enabled:true,

                      },
                      plotOptions: {
                          map: {
                                  states: {
                                      hover: {
                                          color: '#EEDD66'
                                      }
                                  }
                              }
                      },
                      colorAxis: {
                              min: 0,
                              minColor: '#E6E7E8',
                              maxColor: '#005645'
                      },
                      series: [{
                              data: data,
                              mapData: mapdata,
                              joinBy: 'name',
                              name: '中国地图',
                              states: {
                                  hover: {
                                      color: '#a4edba',
                                      shadow:true
                                  }
                              },
                              dataLabels: {
                                  enabled: true,
                                  format: '{point.properties.postal-code}'
                              }
                      }],
                      credits:{
                        enabled: false //不显示LOGO 
                      },
                      drilldown: {
                          activeDataLabelStyle: {
                              color: '#FFFFFF',
                              textDecoration: 'none',
                              textShadow: '0 0 3px #000000'
                          },
                          drillUpButton: {
                              relativeTo: 'spacingBox',
                              position: {
                                  x: 0,
                                  y: 60
                              }
                          },
                          xAxis:{
                            
                          }
                      }
              });
      });
    }
  }
};
</script>
<style lang="less">
.cn-tite{
  font-size: 22px;
}
</style>
