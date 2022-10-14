function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}
function preload(){

classifier = ml5.imageClassifier('DoodleNet');
}
function clearCanvas(){
    background("white");
}
function draw(){
    storkeWeight(13);
    storke(0);
    if(mouseisPressed){
        line(pmouseX , pmouseY , mouseX , mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas , gotResult) 
        if(error);
        console.error(error);
    }
    console.log(result);
document.getElementById('label').innerHTML = 'Confidence:'+Math.round(result[0].confidence * 100) +'%';
utterthis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis);

