import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product(0, "0", "0", 0);
  products: Product[] = [
    new Product(1, "Bánh bông lan", "https://cdn.tgdd.vn/Files/2021/09/07/1380831/cach-lam-banh-bong-lan-cuon-vanilla-cake-roll-recipe-de-lam-tai-nha-202201270927128316.jpg", 20000),
    new Product(2, "Bánh gato", "https://st.quantrimang.com/photos/image/2019/06/26/banh-sinh-nhat-2.jpg", 100000)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  createProduct() {
    let newProduct = new Product(this.product.id, this.product.name, this.product.img, this.product.price);
    this.products.push(newProduct);
    this.clearInputProduct();
  }

  clearInputProduct() {
    this.product = new Product(0, "0", "0", 0);
  }

  deleteProduct(p: Product) {
    this.products.splice(this.products.indexOf(p), 1);
  }
  showEdit(p: Product) {
    this.product = p;
  }

  editProduct(p: Product) {
    let editProduct = new Product(this.product.id, this.product.name, this.product.img, this.product.price);
    this.products.splice(this.products.indexOf(p), 1, editProduct);
  }

}
