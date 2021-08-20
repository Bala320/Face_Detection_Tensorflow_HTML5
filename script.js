let video=document.getElementById("video");

const setupCamera= () => {
    navigator.mediaDevices.getUserMedia({
        video: {width: 600, height: 400},
        audio: true,
    })
    .then((stream) => {
        video.srcObject = stream;
    });
};

setupCamera();