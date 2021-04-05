var app = document.getElementById('app2');

var typewriter = new Typewriter(app, {
    loop: false,
	delay: 2
});

	
typewriter.pauseFor(14000)
	.typeString('')
	.start();