$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		//cloud_color: 'yellow',		
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',		
		word_mouseEnter :function(){
			$(this).css("text-decoration","underline");
		},
		word_mouseOut :function(){
			$(this).css("text-decoration","none");	
		},
		word_click: function(){ 			
			alert("You have selected:" +$(this).text());
		},		              
		beforeCloudRender: function(){
		       date1=new Date();
	 	},
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});
	
});
