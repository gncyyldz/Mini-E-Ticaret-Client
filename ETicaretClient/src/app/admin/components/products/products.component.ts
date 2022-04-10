import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products",
    // }, {
    //   id: "6869efa1-eba6-4c29-9717-42849ffe7ea1",
    //   name: "Renkli Kağıt",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe()

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "7a7abb1f-a593-4c9d-8699-5cb9c2777064")
    //   .subscribe();

    // this.httpClientService.get({
    //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data => console.log(data));
  }

}
