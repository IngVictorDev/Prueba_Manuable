// function onOpenCvReady() {
// 			  // document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
// 			// }

// 			// function OpenCvReady(){

// 			  // cv['onRuntimeInitialized']=()=>{

// 	let video = document.createElement('video');
// 	// let card = document.getElementById('card');
// 	// let video = document.getElementById('video');
// 	let canvasFrame = document.getElementById('canvasOutput'); // canvasFrame is the id of <canvas>
// 	let context = canvasFrame.getContext('2d');
// 	document.getElementById("button").onclick = snap;
// 	// video.autoplay = true;
// 	video.height = canvasFrame.height;
// 	video.width = canvasFrame.width;

// 	let frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
// 	let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);

// 	let cap = new cv.VideoCapture(video);
// 	cap.read(frame);
// 	// context.drawImage(frame, 0, 0, video.width, video.height);
// 	let stop = false;
// 	let begin = Date.now();


// 	if (navigator.mediaDevices.getUserMedia !== null){
// 		navigator.mediaDevices.getUserMedia({ video: true, audio: false })
// 	    .then(function(stream) {
// 	        video.srcObject = stream;
// 	        video.play();
// 	        update();
// 	    })
// 	    .catch(function(err) {
// 	        console.log("An error occurred! " + err);
// 	    });
// 	}



// 		// let cap = src.read();

//     function update(){


//     	cv.imshow("canvasOutput", frame);

//     	if (!stop){
// 	    	cap.read(frame);
// 	    	cv.flip(frame, frame, 1);
//     		dst = filtroRefri(frame);
// 			requestAnimationFrame(update);
// 	    }
//     }

//     function measureDistance(color, pxl){
//     	return Math.round(Math.sqrt( (color[0]-pxl[0])**2 + (color[1]-pxl[1])**2 + (color[2]-pxl[2])**2 ))
//     }

//     function filtroRefri(img){

//     	const color = [10, 10, 10];
// 	    const rC = 80;
// 	    var hR = 3;
// 	    const wR = 1;
// 	    const rR = wR/hR;

// 	    // const h, w, _ = img.shape
// 	    const h = video.height;
// 	    const w = video.width;

// 	    const ymin = Math.round(0 + 0.03*h);
// 	    const ymax = Math.round(h - 0.03*h);
// 	    hR = ymax - ymin;

// 	    const xcenter = w/2;

// 	    const xmin = Math.round(xcenter - (hR * rR) / 2);
// 	    const xmax = Math.round(xcenter + (hR * rR) / 2);
		

// 		var flag = [0, 0, 0, 0];

// 		for (let i = ymin; i <= ymax; i++){
// 			if ( measureDistance( color, img.ucharPtr(xmin, i) ) >= rC ){
// 				flag[0] += 1;
// 			}
// 		}

// 		for (let i = ymin; i <= ymax; i++){
// 			if ( measureDistance( color, img.ucharPtr(xmax, i) ) >= rC ){
// 				flag[2] += 1;
// 			}
// 		}

// 		for (let i = xmin; i <= xmax; i++){
// 			if ( measureDistance( color, img.ucharPtr(i, ymax) ) >= rC ){
// 				flag[1] += 1;
// 			}
// 		}

// 		for (let i = xmin; i <= xmax; i++){
// 			if ( measureDistance( color, img.ucharPtr(i, ymin) ) >= rC ){
// 				flag[3] += 1;
// 			}
// 		}

// 		cv.rectangle(img, new cv.Point(xmin, ymin), new cv.Point(xmax, ymax), [0, 0, 255, 255], 2);


// 		if (flag[0] <= 10){ 
// 			cv.line(img, new cv.Point(xmin, ymin), new cv.Point(xmin, ymax), [0, 255, 0, 255], 2); 
// 		}    				

// 		if (flag[2] <= 10){ 
// 			cv.line(img, new cv.Point(xmax, ymin), new cv.Point(xmax, ymax), [0, 255, 0, 255], 2); 
// 		}    				

// 		if (flag[1] <= 10){ 
// 			cv.line(img, new cv.Point(xmin, ymax), new cv.Point(xmax, ymax), [0, 255, 0, 255], 2); 
// 		}

// 		if (flag[3] <= 10){ 
// 			cv.line(img, new cv.Point(xmin, ymin), new cv.Point(xmax, ymin), [0, 255, 0, 255], 2); 
// 		}



// 		if( flag[0] <= 10 && flag[1] <= 10 && flag[2] <= 10 && flag[3] <= 10 ){

// 			if( !img.ucharPtr(0,0).every(item=>item === 0) ){
// 				stop = true;
// 			}

// 		}


// 		return img
//     }

//     function snap(){
//     	if(stop){
// 	    	console.log("snap");
// 	    	var formData = new FormData();
// 	    	const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
// 			formData.append("csrfmiddlewaretoken", csrftoken);
// 	    	formData.append("img", frame.data);
// 	    	formData.append("height", video.height);
// 	    	formData.append("width", video.width);
// 	    	// console.log(video.width);
// 	    	$.ajax({
// 	    		// data: text:"text",
// 	    		url:"stop",
// 	    		cache:false,
// 				contentType:false,
// 				processData:false,
// 	    		data: formData,
// 	    		type: 'POST',
// 	    		// data:{csrfmiddlewaretoken:'{% csrf_token %}'},

// 	    		success: function(response){
// 	    			alert(response);
// 	    			// document.body.style.cursor = 'default';
// 	    		}
// 	    	});
// 	    }else{
// 	    	alert("No se ha enfocado el refrigerador.");
// 	    }
//     }




// }




// 			// let imgElement = document.getElementById('imageSrc');
// 			// let inputElement = document.getElementById('fileInput');

// 			// inputElement.addEventListener('change', (e) => {
// 			//   imgElement.src = URL.createObjectURL(e.target.files[0]);
// 			// }, false);

// 			// imgElement.onload = function() {
// 			// 	// let cap = cv.VideoCapture();

// 			//   let mat = cv.imread(imgElement);
// 			//   let p1 = {x:0, y:0};
// 			//   let p2 = {x:100, y:100};
// 			//   cv.line(mat, p1, p2, [0, 255, 0, 255], 2);
// 			//   // cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY);
// 			//   // cv.imshow('canvasOutput', mat);
// 			//   mat.delete();
// 			// };


			




// 			// let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
// 			// let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
// 			// }

