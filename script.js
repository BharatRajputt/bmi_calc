
function getItemValue(){
    let weight  = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let height1 = height*12
    let height2 = height1*0.025

    let newbmivalue = weight/(height2 * height2)
    console.log(newbmivalue);
    if( newbmivalue>=18.6 ){
        // document.getElementById('under').value = newbmivalue
         under.innerHTML = `${newbmivalue}`
console.log(newbmivalue);
    }
    else if(newbmivalue<18.6||newbmivalue>=24.9){
        // document.getElementById('normal').value = newbmivalue
       normal.innerHTML =`${newbmivalue}`
        console.log(newbmivalue);

    }

    else{
        // document.getElementById('over').value = newbmivalue
    over.innerHTML = `${newbmivalue}`
        console.log(newbmivalue);

    }
}
 