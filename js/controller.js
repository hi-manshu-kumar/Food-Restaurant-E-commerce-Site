window.addEventListener("load",bindEvents);

function bindEvents(){
    fetchLocal();
    printTable();
    document.getElementById('delete').addEventListener("click", deleteItem);
    console.log("hi there")
}

function fetchLocal(){
	if(window.localStorage){
		if(localStorage.myitemslist){
			itemOperations.itemList = JSON.parse(localStorage.myitemslist);
			printTable();
		}
		else{
			alert("Nothing to Load...");
		}
	}
	else{
		alert("Ur Browser Doesn't Support LocalStorage...");
	}
	
}



//function updateItem(){
//	 itemObjectEdit.id= document.getElementById("id").value  ;
//	itemObjectEdit.descr= document.getElementById("descr").value  ;
//	   itemObjectEdit.itemdate = document.getElementById("quantity").value;
//	 itemObjectEdit.color = document.getElementById("amount").value ;
//	printTable();
//}

function deleteItem(){
itemOperations.deleteItem();
	printTable();
}

function markForDelete(event){
	var tr = event.srcElement.parentNode.parentNode;
	tr.classList.toggle("redrow");
	var id = event.srcElement.getAttribute("item-id");
	itemOperations.markRecordDelete(id);
    
	
	//alert("Delete Call.... "+id);
}

function printIcon(path,cls,fn,id){
	var image = document.createElement("img");
	image.src = path;
	image.className=cls;
	image.setAttribute("item-id",id);
	image.addEventListener("click",fn);
	return image;
	
	
}
function printTable(){
	document.getElementById("itemtable").innerHTML="";
	itemOperations.itemList.forEach((itemObject)=>printRecord(itemObject));
}

function printRecord(itemObject){
	
	var tbody = document.getElementById("itemtable");
	var tr = tbody.insertRow();
	var index = 0;
	for(let key in itemObject){
//        if(key=='id'){
//            
//            continue;
//        }
        if(key=='id'){
            continue;
        }
        else if(key=='pic'){
            	var image = document.createElement("img");
            	image.src = itemObject[key];
                image.className='imagestyle';
            tr.insertCell(index).appendChild(image);
            continue;
        }
        else if(key=='product'){
            tr.insertCell(index).innerHTML = itemObject[key];
            continue;
        }
        else if (key=='amount'){
            tr.insertCell(index).innerHTML = itemObject[key];
            continue;
        }
        else {
            tr.insertCell(index).innerHTML="<input type ='number' id='quanbox' value='1' min='1''> " ;
            continue;
        }
        
        
        if(key=='markForDelete'){
			continue;
		}
        
		
		index++;
	}
	var deleteIcon = printIcon('images/delete.png','imagestyle',markForDelete,itemObject.id);
	var td = tr.insertCell(index);
	td.appendChild(deleteIcon);
	
	//tr.insertCell(0).innerHTML = itemObject.id;
	//tr.insertCell(1).innerHTML = itemObject.name;
}
