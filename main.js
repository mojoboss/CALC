$(document).ready(function(){
	//To print on the screen
	$(".button").click(function(){
		var t = $(this).text();
		var scr = $(".screen");
		if(t != 'AC' && t!= 'CE' && t!= '='){
			var S = scr.text();
			//console.log(S.length);
			if (S.length <= 21){
				S = S + t;
				scr.html(S);
			}
		}
		else{
			if(t == "AC"){
				scr.html("");
			}
			else if(t == "CE"){
				var S = scr.text();
				var res = S.slice(0, S.length-1);
				scr.html(res);
			}
		}
	});
	$(".buttonBottom").click(function(){
		var t = $(this).text();
		var scr = $(".screen");
		if(t != 'AC' && t!= 'CE' && t!= '='){
			var S = scr.text();
			//console.log(S.length);
			if (S.length <= 21){
				S = S + t;
				scr.html(S);
			}
		}
		else{
			var S = scr.text();
			var ans = eval(S);
			//console.log(ans);	
			scr.html(ans);
			
		}
	});
	
});



