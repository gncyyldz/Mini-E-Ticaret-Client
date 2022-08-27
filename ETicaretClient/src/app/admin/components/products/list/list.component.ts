import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { List_Product } from '../../../../contracts/list_product';
import { SelectProductImageDialogComponent } from '../../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { DialogService } from '../../../../services/common/dialog.service';
import { ProductService } from '../../../../services/common/models/product.service';

declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
    private dialogService: DialogService) {
    super(spinner)
  }


  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate', 'photos', 'edit', 'delete'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallAtom);
    const allProducts: { totalProductCount: number; products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalProductCount;
  }

  addProductImages(id: string) {
    this.dialogService.openDialog({
      componentType: SelectProductImageDialogComponent,
      data: id,
      options: {
        width: "1400px"
      }
    });
  }

  async pageChanged() {
    await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts();
  }

}

