function setHardDiskStatic(obj)
{
	var reObj = {} ;
	var LD = new Array();
	for(var i=0;i<obj.HardDiskStatic.length;i++)
	{
		LD.push(obj.HardDiskStatic[i].server+obj.HardDiskStatic[i].driveLetter);
	}
	reObj.legendData = LD;
	
	
	//设置数据set Data
	var labelFromatter = {
		    normal : {
		        label : {
		            formatter : function (params){
		                return 100 - params.value + '%'
		            },
		            textStyle: {
		                baseline : 'top'
		            }
		        }
		    },
		}
    var labelTop = {
	    normal : {
	        label : {
	            show : true,
	            position : 'center',
	            formatter : '{b}',
	            textStyle: {
	                baseline : 'bottom'
	            }
	        },
	        labelLine : {
	            show : false
	        }
	    }
	};
	var labelFromatter = {
	    normal : {
	        label : {
	            formatter : function (params){
	                return 100 - params.value + '%'
	            },
	            textStyle: {
	                baseline : 'top'
	            }
	        }
	    },
	}
	var labelBottom = {
	    normal : {
	        color: '#ccc',
	        label : {
	            show : true,
	            position : 'center'
	        },
	        labelLine : {
	            show : false
	        }
	    },
	    emphasis: {
	        color: 'rgba(0,0,0,0)'
	    }
	};
	var Radius = [40, 55];
	
	var per = ['8%','24%','40%','56%','72%','88%']
	var SS = new Array();
	for(var i=0;i<obj.HardDiskStatic.length;i++)
	{
		var tmp ={};
		if(i<=5)
		{
			tmp.type = 'pie';
			tmp.radius = Radius;
			tmp.center = [per[i], '35%'];
			tmp.x = '0%';
			tmp.itemStyle = labelFromatter;
			tmp.data = [
			                {name:'other', value:(100-parseInt(obj.HardDiskStatic[i].static)), itemStyle : labelBottom},
			                {name:''+obj.HardDiskStatic[i].server+obj.HardDiskStatic[i].driveLetter, value:parseInt(obj.HardDiskStatic[i].static),itemStyle : labelTop}
			            ];
		}
		else
		{
			tmp.type = 'pie';
			tmp.radius = Radius;
			tmp.center = [per[i-6], '70%'];
			tmp.x = '0%';
			tmp.itemStyle = labelFromatter;
			tmp.data = [
			                {name:'other', value:(100-parseInt(obj.HardDiskStatic[i].static)), itemStyle : labelBottom},
			                {name:''+obj.HardDiskStatic[i].server+obj.HardDiskStatic[i].driveLetter, value:parseInt(obj.HardDiskStatic[i].static),itemStyle : labelTop}
			            ];
		}
		SS.push(tmp);
	}
	reObj.series = SS;
	return reObj;
}

function setServerStatic(obj)
{
	var reObj = {};
	var xAxis = {};
	
	xAxis.type = 'category';
	var tmp = new Array();
	for(var i=0;i<obj.ServerStatic.length;i++)
	{
		tmp.push(obj.ServerStatic[i].server);
	}
	xAxis.data = tmp;
	reObj.xAxis = xAxis;
	
/*	var series = new Array();*/
	var tmp1 = {};
	var tmp2 = {};
	tmp1.name='CPU占用';
	tmp1.type='bar';
	tmp1.markPoint ={
			                data : [
					                    {type : 'max', name: '最大值'}
					                ]
			            }
	tmp1.markLine ={
			                data : [
			                    {type : 'average', name: '平均值'}
			                ]
			            }
	tmp2.name='内存占用';
	tmp2.type='bar';
	tmp2.markPoint ={
			                data : [
					                    {type : 'max', name: '最大值'}
					                ]
			            }
	tmp2.markLine ={
			                data : [
			                    {type : 'average', name: '平均值'}
			                ]
			            }
	var cpu = new Array();
	var ram = new Array();
	for(var i=0;i<obj.ServerStatic.length;i++)
	{
		cpu.push(obj.ServerStatic[i].CPU);
		ram.push(obj.ServerStatic[i].RAM);
	}
	tmp1.data = cpu;
	tmp2.data = ram;
	reObj.series=[tmp1,tmp2];
	
	return reObj;
}


