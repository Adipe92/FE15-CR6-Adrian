import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderCartComponent } from './order-cart/order-cart.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "about", component: AboutUsComponent
},{
  path: "menu", component: MenuComponent
},{
  path: "order", component: OrderCartComponent
},{
  path: "products/:productId", component: DetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
