let count=0;
function seatBooked(key){
    
    const seats=document.querySelectorAll('.seats button');
    const seatID=document.getElementById(key);

    if(seatID.classList.contains('selected')){
        alert('You have already selected this seat.');
    }
    else if(count==4 && !seatID.classList.contains('selected') ){
        alert('You can book only 4 seats at a time.');
    }
    
    else if(!seatID.classList.contains('selected') && count<4){
        seatID.style.backgroundColor='#1DD100';
        seatID.classList.add('selected');
        count++;
        availableSeats('seat-count',count);
        bookedSeats('selected-seat',count);
        addRow('booked-seats',key);
        increasePrice(count);

        if(count===4){
            enableCoupon();
        }

    }
}
function availableSeats(elementID,value){
    const availableSeatsID = document.getElementById(elementID);
    availableSeatsID.innerText=40-value;
}

function bookedSeats(elementID,value){
    const seatsID=document.getElementById(elementID);
    seatsID.innerText=value;
}

function addRow(elementID,value){
    const getSeatID=document.getElementById(elementID);
    const newRow=document.createElement('div');
    const quality='Economy';
    const pp=550;
    newRow.innerHTML=`<div class="flex flex-row justify-between p-5 ">
                            <p class="font-normal text-center">${value}</p>
                            <p class="font-normal text-center w-full pl-12">${quality}</p>
                            <p class="font-normal text-center">${pp}</p>
                    </div>`;
   
    getSeatID.appendChild(newRow);
}

function increasePrice(count){
    const total=document.getElementById('total-price');
    let pp=count*550;
    total.innerText=pp;
    grandTotal(pp);
}

function enableCoupon(){
    const couponBtn=document.getElementById('coupon-btn');
    couponBtn.disabled=false;
}

function applyCoupon(){
    const applyButton=document.getElementById('coupon-btn');
    const couponBox=document.getElementById('coupon-box');
    const value=couponBox.value;
    const priceField=document.getElementById('total-price');
    const price=priceField.innerText;

    let discount=0,grand=price;
    if(value==='NEW15'){
        discount=price*0.15;
        grand=price-discount;
        setDiscount(discount);
        grandTotal(grand);
    }
    else if(value==='Couple 20'){
        discount=price*0.2;
        grand=price-discount;
        setDiscount(discount);
        grandTotal(grand);
    }
    else{
        alert('Please enter correct coupon code.');
        grandTotal(grand);
    }
}

function grandTotal(grand){
    const grandBtn=document.getElementById('grand-total');
    grandBtn.innerText = grand;
}

function setDiscount(discount){
    const discountBtn=document.getElementById('discount');
    discountBtn.classList.remove('hidden');

    const disPriceField=document.getElementById('discounted-price');
    disPriceField.innerText=discount;

    const couponField=document.getElementById('input-coupon');
    couponField.style.display="none";
}

document.getElementById('passenger-phone').addEventListener('keyup', function(event){
    const value=event.target.value;
    if(count===0 && value.length!=0){
        alert('please choose minimum one seat first');
    }
    else if(count>0 && value.length!=0){
        const nextBtn=document.getElementById('next');
        nextBtn.disabled=false;
    }
  });



