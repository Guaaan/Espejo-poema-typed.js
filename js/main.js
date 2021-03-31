var app = document.getElementById('app2');

var typewriter = new Typewriter(app, {
    loop: false,
	delay: 2
});

	
typewriter.pauseFor(13500)
	.typeString('<br><br>marialuisa de este cuadro<br>ni un ápice de lástima<br>ni tristeza ni asombro<br>ya condenados a repetir la escena hasta los huesos<br>obra nefasta<br>la piscina de fondo<br>y el limonero que ha muerto<br>y sigue dando frutos<br>y la sangre corriendo repetirse<br>son colores que no se borran<br>amarillo despliego, verde aceituna, alhelíes<br>azul piscina, rojo Cándida<br>pintados contra voluntad<br>la opinión general era que debimos ser menos indolentes<br>&nbsp;&nbsp;&nbsp;&nbsp; La intención del pintor era otra<br>&nbsp;&nbsp;&nbsp;&nbsp; pero arrimaba otra vez<br>&nbsp;&nbsp;&nbsp;&nbsp; Impávido ante el viejo grabado.')
	.start();