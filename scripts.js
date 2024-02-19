// console.log('connected')

let count = 0;
const keys = document.querySelectorAll(".kbd");


for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    
    // seat background & select
    key.addEventListener('click', function(event){
        let seatName = this.textContent;
        // console.log(seatName);
        console.log("clicked");
        key.style.backgroundColor = "#1DD100";
        key.style.color = "white";

        if(count<4 && !key.classList.contains("selected")){
            key.classList.add('selected');
            count++;

            if (count === 4) {
                alert("Enough ticket for you. Now purchase tickets please.");

                for (const otherKeys of keys) {
                    if (!otherKeys.classList.contains("selected")) {
                        otherKeys.style.pointerEvents = "none";
                    }
                }
            }
        }

        document.getElementById("seat-selected").innerText = count;
        document.getElementById("seat-left").innerText = 40-count;
        document.getElementById("total-price").innerText = 550 * count;
        document.getElementById("grand-total").innerText = 550 * count;

        const buySeat = document.getElementById("buying-seat");
        const li = document.createElement("li");
    
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
    
        p.innerText = seatName;
        p2.innerText = "Economy";
        p3.innerText = "550";
    
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        buySeat.appendChild(li);

    });

}

document.getElementById("discount").addEventListener("blur", function (event) {
    const discountCode = this.value.trim();
    if (count===4) {
        let discount = 0  
        if (discountCode === "NEW15") {
          discount = 0.15 * parseInt(document.getElementById("total-price").innerText);
          document.getElementById("discount-total").innerText = discount;
        } else if (discountCode === "Couple20" && count >= 2) {
          discount = 0.2 * parseInt(document.getElementById("total-price").innerText);
          document.getElementById("discount-total").innerText = discount;
        } else {
          alert("Enter the correct discount code");
        }
        document.getElementById("grand-total").innerText =
        parseInt(document.getElementById("total-price").innerText) - discount;
    }
    else{
        alert("Don't be so smart. Buy more ticket.");
        document.getElementById("grand-total").innerText =
        parseInt(document.getElementById("total-price").innerText); 
    }
  
  });
 
  

const button = document.getElementById("next-btn");

document.getElementById('next-btn').addEventListener('click', function(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value;

    if (name && mail && phone) {
        if(count!==0){
            window.location.href = 'success.html';
        }
        else{
            alert("Please Select Ticket First.")
        }
    } else {
        alert('Please fill out all fields.');
    }
});
