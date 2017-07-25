function setup(){
	//put setup code here
	noCanvas();
	//get url, cache and objectify it
	var url = getURL();
	var urlPath = getURLPath();
	var params = getURLParams();
	var category, postslug;
	console.log('params: ', params);
	console.log('url: ', url);
	console.log('url path: ', urlPath);
	var live = "https://thawing-dawn-24491.herokuapp.com/",
		    dev = 'http://localhost:3000/';

	if(R.isEmpty(params) && R.isEmpty(urlPath)){
		category = 'pacific-papers';
		
		loadJSON(live+'recent/'+category, (data) => {
			console.log("From recent/"+category+":", data);
			loadIntroTemplate(data);

		});

		loadJSON(live+'read', (data) => {
			loadReadTemplate(data);
		});
		
	} else {
		
		//check if either params or path is set
		//get category query and cache it
		//get postslug query and cache it
		// params.category ? category = params.category && postslug = params.postslug : category = urlPath[0] && postslug = urlPath[1];
		if(params.category){
			category = params.category;
			postslug = params.postslug;
		} else {
			category = urlPath[0];
			postslug = urlPath[1];
		}
		
		loadJSON(live+category+'/'+postslug, (data) => {
			console.log(data);
		loadPageTemplate(data);

		});
	}
	function loadPageTemplate(data){
		var myPost = "<h1>{{{posttitle}}}</h1><div class='content'>{{{postcontent}}}</div>";
		var template = Handlebars.compile(myPost);
		var voltron = template(data);
		console.log(`Voltron: ${voltron}`);
		if(document.getElementById('innerWrapper')){
			var innerWrapper = select('#innerWrapper');
			innerWrapper.html(voltron);
		}

	}

	function loadIntroTemplate(data){
		var latestTemplateRaw = document.getElementById('latestTemplate').innerHTML;
		console.log(latestTemplateRaw);
		var latestTemplateCompiled = Handlebars.compile(latestTemplateRaw);
		var voltronLatest = latestTemplateCompiled(data);
		var latestContainer = select('#post_bank');
		latestContainer.html(voltronLatest);
	}

	function loadReadTemplate(data){
		var readTemplateRaw = document.getElementById('booksreadTemplate').innerHTML;
		var readTemplateCompiled = Handlebars.compile(readTemplateRaw);
		var voltronRead = readTemplateCompiled(data);
		console.log(`Voltron Read: ${voltronRead}`);
		var readContainer = select('#books_read__themeat');
		readContainer.html(voltronRead);
	}
	console.log('running');

}

