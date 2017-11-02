// 基于准备好的dom，初始化echarts实例
        var ServerStatic = echarts.init(document.getElementById('server_static'));
		var InterruptedStatic = echarts.init(document.getElementById('interrupted_static'));
		var HardDiskStatic = echarts.init(document.getElementById('hardDisk_static'));
	
        // 指定图表的配置项和数据
        var ServerStaticOption = {
					    title : {
					        text: '服务状态',
					        subtext: '生产环境'
					    },
					    grid: {
								left: '3%',
								right: '10%',
						        bottom: '3%',
						        containLabel: true
						},
					    tooltip : {
					        trigger: 'axis'
					    },
					    legend: {
					        data:['CPU占用','内存占用']
					    },
					    toolbox: {
					        show : true,
					        feature : {
					            dataView : {show: true, readOnly: false},
					            magicType : {show: true, type: ['line', 'bar']},
					            restore : {show: true},
					            saveAsImage : {show: true}
					        }
					    },
					    calculable : true,
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ]
			};
		
		
		var InterruptedStaticOption = {
					    title: {
					        text: '中断状态'
					    },
					    tooltip: {
					        trigger: 'axis'
					    },
					    legend: {
					        data:['水电新能源','火电','环保']
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    toolbox: {
					    	show : true,
					        feature : {
					            dataView : {show: true, readOnly: false},
					            magicType : {show: true, type: ['line', 'bar']},
					            restore : {show: true},
					            saveAsImage : {show: true}
					        }
					        /*feature: {
					            saveAsImage: {}
					        }*/
					    },
					    xAxis: {
					        type: 'category',
					        boundaryGap: false,
					        data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
					    },
					    yAxis: {
					        type: 'value'
					    },
					    series: [
					        {
					            name:'水电新能源',
					            type:'line',

					            data:[120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 150]
					        },
					        {
					            name:'火电',
					            type:'line',
					            data:[20, 15, 15, 15, 13, 22, 22,20, 15, 15, 15]
					        },
					        {
					            name:'环保',
					            type:'line',
					            data:[1, 0, 0, 5, 5, 6, 0,1, 0, 0,1]
					        }
					    ]
					};

		

		var radius = [40, 55];
		var HardDiskStaticOption = {
		    legend: {
		        x : 'center',
		        y : '8%',
		    },
		    title : {
		        text: '各服务器重要磁盘占用率',
		        x: 'center'
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        width: '20%',
		                        height: '30%',
		                        itemStyle : {
		                            normal : {
		                                label : {
		                                    formatter : function (params){
		                                        return 'other\n' + params.value + '%\n'
		                                    },
		                                    textStyle: {
		                                        baseline : 'middle'
		                                    }
		                                }
		                            },
		                        } 
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    }
		};
          
        HardDiskStaticOption.legend.data=setHardDiskStatic(getHardDiskStatic()).legendData;//设置顶部磁盘列表
        HardDiskStaticOption.series = setHardDiskStatic(getHardDiskStatic()).series;//设置磁盘数据
        
        ServerStaticOption.xAxis = setServerStatic(getServerStatic()).xAxis;//设置服务器状态服务器清单
        ServerStaticOption.series = setServerStatic(getServerStatic()).series;
        
        ServerStatic.setOption(ServerStaticOption);
	    InterruptedStatic.setOption(InterruptedStaticOption);
	    HardDiskStatic.setOption(HardDiskStaticOption);
        //setServerStatic(getServerStatic());
        //console.log(obj.data[1].server+"---"+obj.data.length);
        setInterval(
        function()
        {
        	HardDiskStaticOption.legend.data=setHardDiskStatic(getHardDiskStatic()).legendData;//设置顶部磁盘列表
	        HardDiskStaticOption.series = setHardDiskStatic(getHardDiskStatic()).series;//设置磁盘数据
	        ServerStaticOption.xAxis = setServerStatic(getServerStatic()).xAxis;//设置服务器状态服务器清单
	        ServerStaticOption.series = setServerStatic(getServerStatic()).series;
	        
	        ServerStatic.setOption(ServerStaticOption);
	        InterruptedStatic.setOption(InterruptedStaticOption);
	       	HardDiskStatic.setOption(HardDiskStaticOption);
        },
        1000);

        window.onresize = function () { ServerStatic.resize();InterruptedStatic.resize();HardDiskStatic.resize();}//echar自适应
