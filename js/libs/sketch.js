function setup(){
	//put setup code here
	noCanvas();
	//get url, cache and objectify it
	var url = getURL();
	var urlPath = getURLPath();
	var params = getURLParams();
	console.log('params: ', params);
	console.log('url: ', url);
	console.log('url path: ', urlPath);
	if(R.isEmpty(params) && R.isEmpty(urlPath)){

		var data = {
				posttitle: "OWL's Asylum ::: Home Page",
				postcontent: "<p>Some paragraphs of text and tags.</p>"
		};
		loadPageTemplate(data);
	} else {
		var category, postslug;
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
		var live = "https://thawing-dawn-24491.herokuapp.com/",
		    dev = 'http://localhost:3000/';
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
		var innerWrapper = select('#innerWrapper');
		innerWrapper.html(voltron);
	}
	console.log('running');

}
//
// function draw(){
// 	//put drawing code here
// }
