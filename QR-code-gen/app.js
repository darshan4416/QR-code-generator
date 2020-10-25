const canvas = document.getElementById("canvas");
const message = document.getElementById("message");
const genbtn = document.getElementById("generate-button");
const downloadbtn = document.getElementById("download-button");

downloadbtn.addEventListener("click",()=>{

    if(message.value !=='')
    download();
})

genbtn.addEventListener("click", ()=>{
    
    if(message.value !== "")
    {
        QRCode.toCanvas(canvas,message.value,{width:1000},(err)=>
        {
            console.log(err);
        });
    }
    
});

function download(){
    const link = document.createElement("a");
    link.download = "qrcode_" + Date.now();
    link.href = canvas.toDataURL("images/jpeg");
    link.click();
    link.remove();

}

