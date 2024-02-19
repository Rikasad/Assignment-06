let titleCount = 0;
let totalPrice = 0;
let seatAvailable = 39;


const seats =document.querySelectorAll(".seat");
// console.log(seats);
for ( let index=0; index< seats.length; index++){
    const seat =seats[index];
    // console.log(seat);
    seat.addEventListener("click", function(){
        // console.log("clicked");


        seat.style.backgroundColor =" green"
        const title = seat.innerText;
        // console.log(title)
        const price = 550;
        // 
        const coach =  "Economy";
        
        titleCount++;
        const tr = document.createElement("div");
        const td1 = document.createElement("p");
        const td2 = document.createElement("p");
        const td3 = document.createElement("p");
        td1.innerText = title;
        td2.innerText = coach;
        td3.innerText = price;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.classList.add("flex","justify-around");
        const test = document.getElementById("test");
        test.appendChild(tr);

       

        // seat count--------------------------------------------------
        const seatCont = document.getElementById("seatCount");
        seatCont.innerText = titleCount; 
        const seatsAvailable = document.getElementById("seatAvailable")
        seatsAvailable.innerText = seatAvailable;
        seatAvailable--;








       
   



        // console.log(typeof price)
        totalPrice += price;
        console.log(totalPrice);
        document.getElementById('totalPrice').innerText= totalPrice.toFixed(2);


    })

}
 
const btn =document.getElementById("apply-button");
btn.addEventListener("click",function(){
  // console.log(btn)

  // get the value from input----------------

  const couponElement = document.getElementById("input-field").value;
  // console.log(couponElement.value)
  const couponCode = couponElement.split(" ").join("").toUpperCase()
  console.log(couponCode);
  if(totalPrice === 2200){
    if(couponCode === "NEW15" ){
      const discountElement = document.getElementById("discountElement");
      discountPrice= (totalPrice*0.15);
      discountElement.innerText= totalPrice -discountPrice;
      document.getElementById("input-field").value= "" ;
      // grandTotal = totalPrice - discountPrice;
      // const grandTotal = document.createElement("p")
      // discountElement.appendChild(grandTotal)
    }else{
      alert("Invalid Coupon Code")
    }

  }else{
    alert("You have to buy  4 tickets ")
  }



})



