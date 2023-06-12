var sta = 800;
	var staa = 8; 
	var startid = setInterval(function (){
		start.style.top = (sta-=staa)+"px";
		staa -=0.06;
		if(staa<=0.5){
			clearInterval(startid);
			start.style.display="none";
			za();
		}
	},10);
	
	var g = 0.01;
	var lv = 0;
	var times = 0;
	var opa =1;
	function za(){
		addiv();
		var s2 = setInterval(function(){
			lv+=g;
			for(var i=0;i<200;i++){
				var elem = document.getElementById("d"+i);
				elem.style.left = (arrl[i]+=(arrv[i]*Math.cos(arrr[i])))+"px";
				elem.style.top = (arrt[i]+=(arrv[i]*Math.sin(arrr[i])+lv))+"px";
				elem.style.opacity= (opa-=0.00001);
				if(arrv[i]>0)
					arrv[i]-=0.001;
				else arrv[i]=0;
			}
			
			if(times++>=1000) clearInterval(s2);
			
		},10);
	}
	
	var arrr = [];
	var arrl = [];
	var arrt = [];
	var arrv = [];
	var arro = []
	function addiv(){
		for(var i=0;i<200;i++){
			box.innerHTML+="<section id='d"+i+"'></section>"
			arrl[i]=600;
			arrt[i]=sta;
			arrv[i]=Math.random()*2+0.1;
			arrr[i]=Math.random()*Math.PI*2;
		}
	}