import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProduct';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {
  
  items: IProducts[] = [];
  

  contact = new FormGroup({
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    textArea: new FormControl("", Validators.required),
  })

  constructor(private cartService: CartService) { }

  get itemPrice(): number{
    let total: number = 0;
    for(const item of this.items){
      total += item.price;
    }
    return total;
  }

  get serviceFee():number{
    return this.itemPrice * 0.1;
  }

  get discount(): number{
    let total: number = this.itemPrice + this.serviceFee;
    let discount: number = 0;
    if (total >= 40){
      discount = total * 0.15;
    }
    return discount;
  }

  get totalPrice (): number{
    return (this.itemPrice + this.serviceFee);
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  submitForm() {
    if (this.contact.valid) {
       var a = this.contact.value;
    console.log(a);
    }
  }

}
