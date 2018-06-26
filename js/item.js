
class Item{
constructor(id,pic,product,amount,quantity){
this.id=id;
this.pic=pic;
this.product = product;
this.amount = amount;
this.quantity =quantity;
this.markForDelete = false;
	
}
	toggleDelete(){
		this.markForDelete = ! this.markForDelete;
	}
}

