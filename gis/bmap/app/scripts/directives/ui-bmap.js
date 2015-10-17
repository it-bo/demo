/***
 * angularjs 使用指令封装百度地图
 * Created by xc on 2015/6/13.
 */
(function(window, angular) {
  'use strict';
  var angularMapModule = angular.module('angularBMap', []);
  angularMapModule.provider('angularBMap', mapService); //定位服务
  angularMapModule.directive('angularBmap', mapDirective); //定位指令
  angularMapModule.directive('bmapSearch', searchDirective); //搜索窗口
  /*
   * 定位相关服务
   */
  function mapService() {
    //基础配置
    this.default_position = new BMap.Point(114.2906, 30.5715); //地图默认中心点
    /**
     * 设置地图默认中心点
     * @param lng
     * @param lat
     * @returns {mapService}
     */
    this.setDefaultPosition = function(lng, lat) {
      this.default_position = new BMap.Point(lng, lat);
      return this;
    };



    //返回的服务
    this.$get = BMapService;
    BMapService.$inject = ['$q', '$timeout'];

    function BMapService($q, $timeout) {
      var map, //全局可用的map对象
        localsearch,
        drawingManager,
        default_position = this.default_position; //默认中心点

      return {
        initMap: initMap, //初始化地图
        getMap: getMap, //返回当前地图对象
        search: search, //搜素
        draw:draw,      //绘画
        distance:distance, //测距
        overlayer:overlayer //加载矢量数据样式 海量点/点聚合
      };
      /**
       * 获取map对象
       * @alias getMap
       */
      function getMap() {
        if (!map) {
          map = new BMap.Map('bMap', {
            minZoom: 11
          }); //地图对象
        }
        return map;
      }

      /**
       * 初始化地图
       * @constructor
       */
      function initMap() {
        var defer = $q.defer();
        $timeout(function() {
          var map = getMap();
          map.centerAndZoom("武汉", 11);
          var opts = {
            type: BMAP_NAVIGATION_CONTROL_SMALL
          };
          map.enableScrollWheelZoom(true);
          map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_TOP_LEFT
          }));
          map.addControl(new BMap.NavigationControl(opts));
          map.addControl(new BMap.MapTypeControl({
            anchor: BMAP_ANCHOR_TOP_RIGHT
          }));
          map.addControl(new BMap.OverviewMapControl({
            isOpen: false,
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
          }));


  



          var markers = [];
          var pt = null;
          pt = new BMap.Point(114.2906, 30.5715);
          markers.push(new BMap.Marker(pt));

          //图文信息
          var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
            '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
            '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
            '</div>';

          //创建检索信息窗口对象
          var searchInfoWindow = null;
          searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
            title: "百度大厦", //标题
            width: 290, //宽度
            height: 105, //高度
            panel: "panel", //检索结果面板
            enableAutoPan: true, //自动平移
            searchTypes: [
              BMAPLIB_TAB_SEARCH, //周边检索
              BMAPLIB_TAB_TO_HERE, //到这里去
              BMAPLIB_TAB_FROM_HERE //从这里出发
            ]
          });
          var marker = markers[0]; //创建marker对象
          marker.enableDragging(); //marker可拖拽
          marker.addEventListener("click", function(e) {
            searchInfoWindow.open(marker);
          })
          map.addOverlay(marker);

          function clearAll() {
            for (var i = 0; i < overlays.length; i++) {
              map.removeOverlay(overlays[i]);
            }
            overlays.length = 0
          }

          defer.resolve();
        });
        return defer.promise;
      }

      function distance(){
        var myDis = new BMapLib.DistanceTool(map);
        myDis.open();
      }


      function getLocalSearch() {
        if (!localsearch) {
          localsearch = new BMap.LocalSearch(map, {
            renderOptions: {
              map: map,
              panel:"r-result"
            },

            pageCapacity: 9

          });
        }
        return localsearch;
      }

      function search(myKeys) {
        getLocalSearch().search(myKeys);
      }

      function getDrawingManager(){
        if (!drawingManager) {
          var styleOptions = {
              strokeColor: "red", //边线颜色。
              fillColor: "red", //填充颜色。当参数为空时，圆形将没有填充效果。
              strokeWeight: 3, //边线的宽度，以像素为单位。
              strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
              fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
              strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            //实例化鼠标绘制工具
          drawingManager = new BMapLib.DrawingManager(map, {
            isOpen: false, //是否开启绘制模式
            enableDrawingTool: false, //是否显示工具栏
            circleOptions: styleOptions, //圆的样式
            polylineOptions: styleOptions, //线的样式
            polygonOptions: styleOptions, //多边形的样式
            rectangleOptions: styleOptions //矩形的样式
          });
        }
        return drawingManager;
      }
      
      function draw(value){
        var draw = getDrawingManager();
        if(value === 'None'){
           draw.close();
        }
        else{
          draw.setDrawingMode(value);
          draw.enableCalculate();
          draw.open();
        }
      }

      function overlayer(type,data){
        map.clearOverlays();
        //海量点
          if (type === 'hld' &&document.createElement('canvas').getContext) { // 判断当前浏览器是否支持绘制海量点
            var points = []; // 添加海量点数据
            for (var i = 0; i < data.length; i++) {
              points.push(new BMap.Point(data[i][0], data[i][1]));
            }
            var options = {
              // size: BMAP_POINT_SIZE_SMALL,
              shape: BMAP_POINT_SHAPE_STAR,
              color: '#d340c3'
            }
            var pointCollection = new BMap.PointCollection(points, options); // 初始化PointCollection
            map.addOverlay(pointCollection); // 添加Overlay
          } 
          else if(type === 'djh'){
            var markers = [];
            var option = null;
            for (var i = 0; i < data.length; i++) {
              option = new BMap.Point(data[i][0], data[i][1]);
              markers.push(new BMap.Marker(option));
            }
            var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
          }
      }
    }
  }

  /***
   * 地图指令
   */
  mapDirective.$inject = ['angularBMap'];

  function mapDirective(angularBMap) {
    return {
      restrict: 'EAC',
      replace: true,
      scope: true,
      template: '<div id="bMap" style="height: 500px;"></div>',
      link: mapLink,
      controller: mapController
    };
    /**
     * link
     * @constructor
     * @param scope
     * @param element
     * @param attr
     * @param ctrl
     */
    function mapLink(scope, element, attr, ctrl) {
      ctrl.initMap();
    }



    /**
     * controller
     * @constructor
     * @type {string[]}
     */
    function mapController() {
      this.initMap = angularBMap.initMap; //初始化
    }
  }

  /***
   * 搜索指令
   */
  searchDirective.$inject = ['angularBMap'];
  function searchDirective(angularBMap) {
    return {
      restrict: 'EAC',
      replace: true,
      scope: true,
      template: '<div><input type="text" ng-model="searched" class="form-control input-sm bg-light no-border rounded padder" placeholder="搜索..."></div>',
      link: searchLink,
      controller: searchController
    };
    /**
     * link
     * @constructor
     * @param scope
     * @param element
     * @param attr
     * @param ctrl
     */
    function searchLink(scope, element, attr, ctrl) {
      scope.$watch('searched', function(newValue, oldValue) {
        if (newValue === oldValue) {
          return;
        } // AKA first run
        ctrl.search(newValue);
      });
    }



    /**
     * controller
     * @constructor
     * @type {string[]}
     */
    function searchController() {
      this.search = angularBMap.search;
    }
  }

})(window, window.angular);