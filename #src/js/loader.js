window.addEventListener('DOMContentLoaded', function() {
	let proloader = document.createElement('div');
	proloader.className = '_preload-body';
	document.body.prepend(proloader);

    console.log('test');
    window.addEventListener('load', function () {
        
        document.body.classList.add('is-load');
    })
});


	
