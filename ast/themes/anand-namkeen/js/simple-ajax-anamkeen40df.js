jQuery(document).ready(function($) {	
	$('a.productitem').on('click',function(){
		var get_product_id = $(this).attr( 'id' );
		//var get_data_post = $(this).attr( 'data-post' );
		//alert(get_data_post);
		//alert(get_product_id);	 
		// This does the ajax request
		$.ajax({
			url: anamkeen_ajax_obj.ajaxurl,
			data: {
				'action': 'anamkeen_ajax_request',
				'get_product_id' : get_product_id,
				//'get_data_post' : get_data_post
			},
			success:function(data) {
				if(data != 0 ){
					$('.ajax-data').html(data);
					//$('#productPopup').modal('slide');
				}
				else{
					alert('no data found');	
				}
				//console.log(data);
			},
			error: function(errorThrown){
				console.log(errorThrown);
			}
		});  
	});




	$('a.expprdajax').on('click',function(){
		var get_exp_product_id = $(this).attr( 'id' );	
		//alert(get_product_id);	 
		// This does the ajax request
		$.ajax({
			url: anamkeen_ajax_obj.ajaxurl,
			data: {
				'action': 'anamkeen_export_product_ajax_request',
				'get_exp_product_id' : get_exp_product_id
			},
			success:function(data) {
				if(data != 0 ){
					$('.ajax-data').html(data);
					//$('#productPopup').modal('slide');
				}
				else{
					alert('no data found');	
				}
				//console.log(data);
			},
			error: function(errorThrown){
				console.log(errorThrown);
			}
		});  
	});




              
});