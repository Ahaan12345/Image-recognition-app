Webcam.set({
   width:350,
   height:300,
   image_format:'jpeg',
   jpeg_qualiy:90
});


var camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
});
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/izXfCxNHW/model.json',modelloaded);


function modelloaded(){
    console.log("model loaded");
}

function check(){
    var img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);

}

function gotResult(error, results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}