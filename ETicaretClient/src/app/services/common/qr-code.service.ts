import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private httpClientService: HttpClientService) { }

  async generateQRCode(productId: string) {
    const observable: Observable<Blob> = this.httpClientService.get({
      controller: "products",
      action: "qrcode",
      responseType: 'blob'
    }, productId)

    return await firstValueFrom(observable);

  }
}
