const Qrcode=require("qrcode");

const createQr=async(qr)=>{
    const qrData=await( Qrcode.toDataURL(qr));
    return qrData;

}
module.exports={createQr};