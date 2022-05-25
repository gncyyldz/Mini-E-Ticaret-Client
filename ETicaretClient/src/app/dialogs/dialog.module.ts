import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectProductImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule,
    FileUploadModule
  ]
})
export class DialogModule { }
