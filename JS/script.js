$(window).ready(function(){


	var bod = $('body')[0];

	window.addEventListener('scroll',function(){

		var scrl = bod.scrollTop;

		if(scrl > 100){
			$('header')[0].style.backgroundColor = '#1755A9';
		}else{
			$('header')[0].style.backgroundColor = 'transparent';
		}




		if(scrl < $('#p2').offset().top - 160){ 
			$('.menuItem').removeClass('activeMenuItem');
			$('#mi1').addClass('activeMenuItem');		
		}


		if( scrl >= ($('#p2').offset().top - 160) && (scrl < $('#p3').offset().top - 160)){ 
			$('.menuItem').removeClass('activeMenuItem');
			$('#mi2').addClass('activeMenuItem');		
		}

		if( scrl >= ($('#p3').offset().top - 160) && (scrl < $('#p4').offset().top - 160)){ 
			$('.menuItem').removeClass('activeMenuItem');
			$('#mi3').addClass('activeMenuItem');		
		}

		if( scrl >= ($('#p4').offset().top - 160) && (scrl < $('#p5').offset().top - 600)){ 
			$('.menuItem').removeClass('activeMenuItem');
			$('#mi4').addClass('activeMenuItem');		
		}

		if( scrl >= ($('#p5').offset().top - 600)){ 
			$('.menuItem').removeClass('activeMenuItem');
			$('#mi5').addClass('activeMenuItem');		
		}



	});
	$('#twi').on('click',function(){
		window.open('https://twitter.com/lnexun');
	});

	$('#fb').on('click',function(){
		window.open('https://www.facebook.com/ExunClan');
	});

	$('#exp').click(function(){
		$('body, html').animate({
			scrollTop: $(window)[0].innerHeight - 60
		}, 800);
	});

	$('.menuItem').click(function(){
		var id = $(this)[0].id.substr(2);

		$('body, html').animate({
			scrollTop: $('#p'+id).offset().top-60
		}, 800);

	})


	$('#lne').click(function(){
		window.open('http://www.lnexun.com');
	});


	$('.p4card').click(function(){
		var id = Number(this.id.substr(1));
		if(id === 1){
			window.open('http://www.lnexun.com/minet-x-2015-overall-winners/');
		}else if(id === 2){
			window.open('http://www.lnexun.com/cyberbuzz-2015/');
		}else if(id === 3){
			window.open('http://www.lnexun.com/ordintrix-2015-overall-winners/');
		}else if(id === 4){
			window.open('http://www.lnexun.com/gateway-2015-overall-winners/');
		}else if(id === 5){
			window.open('http://www.lnexun.com/force-fest-2015-overall-winners/');
		}else{
			window.open('http://www.lnexun.com/interface-2015-overall-winners/');
		}
	});



	$('#mailLogo').click(function(){
		$('body, html').animate({
			scrollTop: 0
		}, 800);		
	});

});

$(window).load(function(){
	$('#loadPane').css({
		'opacity':'0'
	});

	setTimeout(function(){
		$('#loadPane').css({
			'display':'none'
		});
	},1000);

	setTimeout(function(){
		$('h1, #subTxt').css({
			'opacity':'1',
			'top':'200px'
		});
	}, 700);

});