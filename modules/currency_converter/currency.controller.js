const cc=require("currency-converter-lt")
const converter=async(payload)=>{
const{from,to,amount}=payload;
const currencyConverter= new cc();
const result=await currencyConverter
.from(from.toUpperCase())
.to(to.toLowerCase())
.amount(amount)
.convert()
return result;
}
module.exports={converter}