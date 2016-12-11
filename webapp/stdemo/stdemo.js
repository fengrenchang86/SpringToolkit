
define(["dojo/_base/declare", 
        "dijit/_Widget",
		"dijit/_WidgetBase", 
		"dijit/_TemplatedMixin", 
		"dojo/_base/lang",
		"dojo/dom-form",
		'dojo/string',
		"dojo/on",
		"dojo/ready",
		"dijit/registry",
		"dojo/text!./template.html",
		"dijit/form/TextBox",
		"dijit/form/Button"], 
	function(declare, Widget, WidgetBase, TemplatedMixin, 
			lang, domForm, String, on, ready, registry,
			template,
			TextBox, Button){
		var rt = declare([WidgetBase, Widget, TemplatedMixin], {
			templateString:template,
			impTestitem : null,
//			templateString:dojo.cache("template", "./template.html"),
			postCreate: function(){
				this.inherited(arguments);
				
				var btnInsert = new Button({
					label: "download"
				});
				btnInsert.placeAt(this.btnDownload);
				on(btnInsert, "click", lang.hitch(this, this.onSubmit));
				
			},
			onSubmit:function() {
				console.log("onAdd");
				
				var xhrArgs = {
					url:"/wf/demo/download2",
//					handleAs: "json",
//					postData: dojo.toJson(obj),
					postData:"ttt",
					headers:{
						"Content-Type":"text/plain"
					},
					load:function(data) {
						console.log(data);
					},
					error:function(response) {
						console.log("[listFiles]error:" + response);
					}
				}
					var deferred = dojo.xhrPost(xhrArgs);
					console.log("sendRequest done");
			}
		});
		ready(function(){
	        // Call the parser manually so it runs after our widget is defined, and page has finished loading
	       // parser.parse();
	    });
		return rt;
});
