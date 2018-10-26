
const a = url => {
	const p = new Promise((resolve,reject) => {

		cosnt handler = () => {
			if(this,readyState != 4){
				return;
			}
			if(this.statsu === 200){
				resolve(this.response);
			}else{
				reject(new Error(this.statusText));
			}
		}


		const client = new XMLHttpRequest();
		client.open("GET",url);
		client.open("GET", url);
	    client.onreadystatechange = handler;
	    client.responseType = "json";
	    client.setRequestHeader("Accept", "application/json");
	    client.send();

	})
}

a('url').then((json) => {
	console.log(json);
}).catch((err) => {
	console.log(err);
})






const b = id => {
	const p = new Promist((resolve,reject) => {
		if(id === 1){
			resolve('success');
		}else{
			reject(new Error('fail'));
		}
	})
	return p;
}

b(1).then((str) => {
	console.log(str);
}).catch((err) => {
	console.log(err);
})