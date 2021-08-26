
function display(){
  
    let priceEl = document.getElementById("priceTable");
     priceEl.style.display='none';

     let includeEl = document.getElementById("include");
     includeEl.style.display='none';
}



function itinerary(){
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='block';

    let priceEl = document.getElementById("priceTable");
    priceEl.style.display='none';

    let includeEl = document.getElementById("include");
    includeEl.style.display='none';
}

function price(){
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='none';

    let includeEl = document.getElementById("include");
    includeEl.style.display='none';

     let priceEl = document.getElementById("priceTable");
     priceEl.style.display='block';
}

function include(){
    let includeEl = document.getElementById("include");
    includeEl.style.display='block';

    let priceEl = document.getElementById("priceTable");
    priceEl.style.display='none';
    
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='none';
}


function showHide(){
    document.getElementById("checkForm").style.display = "none"
}


function calculator1() {
   let priceValue = document.getElementById("button1").value;
   let priceEl = document.getElementById("vip1")
   priceEl.innerHTML= priceValue+"$";

   let gstEl = document.getElementById("gst");
   gstEl.innerHTML= priceValue * 0.05 +"$";

   let qstEl = document.getElementById("qst");
   qstEl.innerHTML= priceValue * 0.0998 +"$";

   let totalEl = document.getElementById("totalP");
   let totalPrice = priceValue * 1.1498;
   totalEl.innerHTML = `<strong> ${totalPrice.toFixed(2) }$ </strong>` ;

   document.getElementById("checkForm").style.display = "block";

}

function calculator2() {
    let priceValue = document.getElementById("button2").value;
    let priceEl = document.getElementById("vip1")
    priceEl.innerHTML= priceValue+"$";
 
    let gstEl = document.getElementById("gst");
    gstEl.innerHTML= priceValue * 0.05 +"$";
 
    let qstEl = document.getElementById("qst");
    qstEl.innerHTML= priceValue * 0.0998 +"$";
 
    let totalEl = document.getElementById("totalP");
    let totalPrice = priceValue * 1.1498;
    totalEl.innerHTML = `<strong> ${totalPrice.toFixed(2) }$ </strong>` ;
 
    document.getElementById("checkForm").style.display = "block";
 
 }
 function calculator3() {
    let priceValue = document.getElementById("button3").value;
    let priceEl = document.getElementById("vip1")
    priceEl.innerHTML= priceValue+"$";
 
    let gstEl = document.getElementById("gst");
    gstEl.innerHTML= priceValue * 0.05 +"$";
 
    let qstEl = document.getElementById("qst");
    qstEl.innerHTML= priceValue * 0.0998 +"$";
 
    let totalEl = document.getElementById("totalP");
    let totalPrice = priceValue * 1.1498;
    totalEl.innerHTML = `<strong> ${totalPrice.toFixed(2) }$ </strong>` ;
 
    document.getElementById("checkForm").style.display = "block";
 
 }
 function calculator4() {
    let priceValue = document.getElementById("button4").value;
    let priceEl = document.getElementById("vip1")
    priceEl.innerHTML= priceValue+"$";
 
    let gstEl = document.getElementById("gst");
    gstEl.innerHTML= priceValue * 0.05  +"$";
 
    let qstEl = document.getElementById("qst");
    qstEl.innerHTML= priceValue * 0.0998 +"$";
 
    let totalEl = document.getElementById("totalP");
    let totalPrice = priceValue * 1.1498;
    totalEl.innerHTML = `<strong> ${totalPrice.toFixed(2) }$ </strong>` ;
 
    document.getElementById("checkForm").style.display = "block";
 
 }