const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $fordward = document.querySelector("#fordward")

$play.addEventListener("click",handleplay)
$pause.addEventListener("click",handlepause)

function handlepause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log("pause")
}
function handleplay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log("siii")

$backward.addEventListener("click",handlebackward)
$fordward.addEventListener("click",handlefordward)
    
function handlefordward(){
    $video.currentTime = video.currentTime +10
}
function handlebackward(){
    $video.currentTime = video.currentTime - 10
    }
}
const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetadata",handleloaded)
$video.addEventListener("timeupdate",handleTimeupdate)

function handleloaded(){
    $progress.max= $video.duration
    console.log("a cargado mi video",$video.duration)
}

function handleTimeupdate(){
    $progress.value= $video.currentTime
}

$progress.addEventListener("input",handleinput)
function handleinput(){
    $video.currentTime = $progress.value
}

