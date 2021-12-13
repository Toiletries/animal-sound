function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cxIjOGIE_/model.json',modelready)
}
function modelready(){
classifier.classify(gotresults);
}
function gotresults(error,results){
    if (error) {
        console.error(error)
    }else{
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="i can hear-"+results[0].label
        document.getElementById("result_confidence").innerHTML="Accuracy-"+Math.floor(results[0].confidence * 100)+"%";
        img1=document.getElementById('aliens-01')
        img2=document.getElementById('aliens-02')
        img3=document.getElementById('aliens-03')
        img4=document.getElementById('aliens-04')
if (results[0].label=="Background Noise") {
 img1.src='ear.gif' 
 img2.src='cat.jpeg'
 img3.src='elephant.jpeg'  
 img4.src='dog.jpeg'
}
else if (results[0].label=="cat sound") {
 img1.src='ear.jpeg' 
 img2.src='cat.gif'
 img3.src='elephant.jpeg'  
 img4.src='dog.jpeg'   
}
else if (results[0].label=="elephant sound") {
    img1.src='ear.jpeg' 
 img2.src='cat.jpeg'
 img3.src='elephant.gif'  
 img4.src='dog.jpeg'  
}
 else if (results[0].label=="dog sound") {
    img1.src='ear.jpeg' 
 img2.src='cat.jpeg'
 img3.src='elephant.jpeg'  
 img4.src='dog.gif'
    }
}}