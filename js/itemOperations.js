
const itemOperations = {
itemList:[],
//id:1,	
deleteItem(){
	 return this.itemList = this.itemList.filter(function(itemObject){
		return itemObject.markForDelete ==false;
});
},
    searchById(id){
	var index = this.itemList.findIndex(function(itemObject){
		return itemObject.id ==id;
	});
    return index;
    },
    
markRecordDelete(id){
	var index = this.searchById(id);
	var itemObject = this.itemList[index];
	//itemObject.toggleDelete();
    itemObject.markForDelete= !itemObject.markForDelete;
}
	
}