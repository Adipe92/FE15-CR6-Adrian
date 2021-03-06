import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IProducts } from '../IProduct';
import { products } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    product: IProducts = {} as IProducts;
    id: number = 0
    clickCounter :number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    
    ) { }

    countClick(){
      this.clickCounter ++;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }

addToCart(){
  window.alert('Product was added!');
  this.cartService.addToCart(this.product);
}

}
