<template>
  <div class="studenNum mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
          <el-col :span="24">
            <h2 class="ac cn-tite">学员分布密度图</h2>
          </el-col>
      </div>
    </div>
    <div id="studenDensity" style="height: 470px;margin: 0 auto"></div>
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
      radio: '年'
    }
  },
  mounted() {
    this.initMaps();
  },
  methods:{
    initMaps(){
      Highcharts.setOptions({
              lang: {
                  drillUpText: '< 返回 “{series.name}”'
              }
      });
      var map = null,
          geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';

      $.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
              var data = [];
              // 随机数据
              Highcharts.each(mapdata.features, function(md, index) {
                      var tmp = {
                              name: md.properties.name,
                              value: Math.floor((Math.random() * 1000) + 1) // 生成 1 ~ 100 随机值
                      };
                      if(md.properties.drilldown) {
                          tmp.drilldown = md.properties.drilldown;
                      }
                      data.push(tmp);
              });
              console.log(data)
              map = new Highcharts.Map('studenDensity', {
                      chart: {
                          events: {
                            drilldown: function(e) {
                              console.log(e.point.properties);
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
                                      // 获取二级行政地区数据并更新图表
                                      $.getJSON(geochina +   e.point.drilldown + '.json&callback=?', function(data) {
                                              data = Highcharts.geojson(data);
                                              Highcharts.each(data, function(d) {
                                                      if(d.properties.drilldown) {
                                                          d.drilldown = d.properties.drilldown;
                                                      }
                                                      d.value = Math.floor((Math.random() * 100) + 1); // 生成 1 ~ 100 随机值
                                              });
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
    },
    changeVal(t){

    }
  }
};
</script>
<style>

</style>
