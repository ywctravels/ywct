const API_URL="https://script.google.com/macros/s/AKfycbwEwzJxbVD0qeWrmarSmkjU-HgtUTpEfWGxzHDC99dn3PkmnkJi_aA_c05my9ICVXAJ/exec";


function generateVoucher(){

const btn=document.getElementById("generateBtn");
const msg=document.getElementById("statusMsg");

btn.disabled=true;

msg.innerText="Processing...";
msg.style.color="orange";


const data={

name:document.getElementById("guestName").value,
mobile:document.getElementById("mobile").value,
email:document.getElementById("email").value,

adults:document.getElementById("adults").value,
children:document.getElementById("children").value,

tourStart:document.getElementById("tourStart").value,
tourEnd:document.getElementById("tourEnd").value,

city:document.getElementById("city").value,
hotel:document.getElementById("hotel").value,

checkin:document.getElementById("checkin").value,
checkout:document.getElementById("checkout").value,

room:document.getElementById("roomType").value,
meal:document.getElementById("mealPlan").value,

vehicleType:document.getElementById("vehicleType").value,
vehicleModel:document.getElementById("vehicleModel").value,
vehicleNumber:document.getElementById("vehicleNumber").value,

driverName:document.getElementById("driverName").value,
driverMobile:document.getElementById("driverMobile").value,

totalCost:document.getElementById("totalCost").value,
advancePaid:document.getElementById("advancePaid").value,

paymentMode:document.getElementById("paymentMode").value,

notes:document.getElementById("notes").value

};



fetch(API_URL,{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})

.then(res=>res.json())

.then(res=>{

if(res.status==="success"){

msg.style.color="green";
msg.innerText="Voucher Generated";

showVoucher(res.voucher,data);

}

else{

msg.style.color="red";
msg.innerText=res.message;

}

btn.disabled=false;

})

.catch(err=>{

msg.style.color="red";
msg.innerText="Server Error";

btn.disabled=false;

});

}


function showVoucher(voucher,data){

document.getElementById("voucherPreview").style.display="block";

document.getElementById("voucherNo").innerText=voucher;

document.getElementById("vGuest").innerText=data.name;

document.getElementById("vMobile").innerText=data.mobile;

document.getElementById("vEmail").innerText=data.email;

document.getElementById("vStart").innerText=data.tourStart;

document.getElementById("vEnd").innerText=data.tourEnd;

document.getElementById("vVehicle").innerText=data.vehicleType;

document.getElementById("vTotal").innerText=data.totalCost;

document.getElementById("vAdvance").innerText=data.advancePaid;

}



function printVoucher(){

window.print();

}
