// JavaScript Document
$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('elefante','audio/ELEFANTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('rinoceronte','audio/RINOCRONTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/TIGGRE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gorila','audio/GORILA.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hipopotamo','audio/HIPOPOTAMO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','audio/COCODRILO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('conejo','audio/CONEJO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('perro','audio/PERRO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('loro','audio/LORO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('guajolote','audio/GUAJOLOTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/GATO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pato','audio/PATO.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend', function(){$(this).removeClass('tocada');});
	},false);//deviceready
});//ready