let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let img4 = document.querySelector('#img4')
let formfilled = document.querySelector('.formContainer')

//when the first image is clicked a form should appear ok
var clickbait1 = 0
var clickbait2 = 0
var clickbait3 = 0
var clickbait4 = 0
var clickbait = 0
img1.addEventListener('click', displayForm)

function displayForm(){
    
    if(clickbait1 < 1){
        
    formfilled.classList.add('unhide')
    input_name = document.getElementById('name').value 
    input_username = document.getElementById('username').value

    input_name = ''
    input_username = ''
    clickbait1++;
}
else {
    img1.removeEventListener('click',displayForm)
}
}


img2.addEventListener('click', displayInput)

function displayInput() {
    if(clickbait2 < 1){
       
    let input_name = document.getElementById('name').value
    console.log(input_name)
    let input_username = document.getElementById('username').value
    console.log(input_username)
    formfilled.classList.remove('unhide')

    let showinput = document.createElement('p')
    showinput.setAttribute('class', 'showinput')
    showinput.textContent = 'Name:-'+ input_name +" , Username:- " + input_username
   
    // showinput.textContent = input_username
    let box2= document.querySelector('.box2')
      box2.append(showinput)
    clickbait2++
    }

    else{
        img2.removeEventListener('click',displayForm)
    }
}

img3.addEventListener('click', displayDiceImg)

function displayDiceImg(){
    if(clickbait3 < 1){

    let diceimg = document.createElement('img')
    diceimg.setAttribute('src','https://images.unsplash.com/photo-1634277448989-7d2f681d9172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')
    diceimg.setAttribute('id','dice')
    diceimg.style.width = '500px'
    diceimg.style.height = '300px'
//    diceimg.style.margin = 'auto'
    let box2= document.querySelector('.box2')
    box2.appendChild(diceimg)

    let dice = document.querySelector('#dice');
    dice.addEventListener('click',generateRandomText)
    clickbait3++;
  }
  else{
    img3.removeEventListener('click',displayDiceImg)
  }
}

function generateRandomText(){
    var sum = 0
   dice = document.querySelector('#dice');
    if(clickbait4<3){
      
   randomDigit = Math.floor(Math.random() * 6) + 1
//    sum = sum + randomDigit
   let showdigit = document.createElement('p')
   showdigit.setAttribute('class','nums')
    // console.log(randomDigit)
    showdigit.innerHTML = randomDigit

   let box2= document.querySelector('.box2')
   box2.appendChild(showdigit)
   
   clickbait4++ 

    }

    newarr = [...document.querySelectorAll('.nums')];
    for(let i=0; i<newarr.length; i++){
       d1 = newarr[i].innerHTML
       sum+=+d1
      }
      console.log(sum)
    if(sum > 10){
        img4.addEventListener('click',fourthImage)
       }
    if(sum <= 10){
        console.log('No chance')
        // box2= document.querySelector('.box2')
        // showdigit = document.getElementsByClassName('nums')
        // showdigit.innerHTML = 'Bad Luck I dont want to give you second !!!!'
        // box3.appendChild(showinput)
       }
}
    

// adding event listner to fourth image

function fourthImage(){
    if(clickbait<1){
     twelveDigt = Math.floor(100000000000 + Math.random() * 900000000000);
     ans = twelveDigt.toString().substr(0, 12)
     let showdigit = document.createElement('p')

     let box2= document.querySelector('.box2')
     
     let congo = document.createElement('img')
     congo.setAttribute('src','https://imgs.search.brave.com/jwr8gFBM2GsuLT8J3Qa3Oy-fnl_7XKaHNYcFH5M76No/rs:fit:1200:1137:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAyLzQ0/OS84ODgvbGFyZ2Vf/MngvY29uZ3JhdHVs/YXRpb25zLWFic3Ry/YWN0LWRlc2lnbi10/ZW1wbGF0ZS1iYWNr/Z3JvdW5kLXdpdGgt/Z2FybGFuZC1mbGFn/cy1mcmVlLXZlY3Rv/ci5qcGc')
     congo.setAttribute('id','congoImg')
     congo.style.width = '400px'
     showdigit.innerHTML = '12 digit coupon <'+ ans+">"
     showdigit.style.fontSize = '38px'
     box2.appendChild(congo)
     box2.appendChild(showdigit)
     console.log(ans);
    clickbait++}
     else{
        img4.removeEventListener('click',fourthImage)
     }
}
