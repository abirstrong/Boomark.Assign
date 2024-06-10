
var bookmarkNameInput= document.getElementById ('Name')
var bookmarkURLInput=document.getElementById ('link')
var allBookmark=[]


    
//  bookmarkContainer.push(bookmark);
//  console.log (bookmarkContainer);
// }

function getValues(){
    var bookmark =  {   
        Name: bookmarkNameInput.value,
        link: bookmarkURLInput.value,
    };
     
    allBookmark.push(bookmark);
    clearInputs();
    display();
    }





function clearInputs(){
    bookmarkNameInput.value = "",
    bookmarkURLInput.value = "",
}

function display(){
var cartoona =""
    for(var i= 0 ; i>allBookmark.length ; i++ ){
       cartoona += `  
       <tr>
       <td>${allBookmark[i].Name}</td>
       <td>${allBookmark[i].link}</td>
       <td>
           <button class="btn btn-success"> Visit</button>
       </td>
       <td>
           <button class="btn btn-danger">Delete</button>
       </td>
   </tr>`
    }

    document.getElementById(demo).innerHTML=cartoona

  
}

