(function () {
	var id=0;
	var data = {};
	function handle(id)
	{
		return function(res){
			finish(id,res);
		}
	}
	function promise()
	{
		this.id = id++;
		data[this.id] = this;
		this.then = function(complete,error,progress){
			this.complete = complete;
			this.error = error;
			this.progress = progress;
			var p = new promise();
			this.nextId = p.id;
			return p;
		}
	}
	function finish(id,res)
	{
		if(data[id])
		{
			var obj = data[id];
            if(typeof obj.complete == "function") {
				var arg = obj.complete(res);
				if(obj.nextId){
					finish(obj.nextId,arg);
				}
			}
		}
	}
	function get(url)
	{
		var p = new promise();
		$.get(url,handle(p.id));
		return p;
	}
	/*
	get("http://localhost/").then(function(res){
		console.log(res);
	}).then(function(res){
		console.log("chain");
	}).then(function(res){
		console.log("gogo");
	});
	*/
})();
