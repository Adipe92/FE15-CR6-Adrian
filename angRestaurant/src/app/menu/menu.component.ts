import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProduct';
import { products } from '../product';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0

  items: IProducts[] = [];

  products:IProducts[] = products;

  clickCounter: number = 0;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }
  
  countClick(){
      this.clickCounter ++;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
      this.items = this.cartService.getItems();
    });
    
  }

  addToCart(){
    window.alert('Product was added!');
    this.cartService.addToCart(this.product);
  }

  

  

}
