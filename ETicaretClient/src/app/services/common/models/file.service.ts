import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { BaseUrl } from '../../../contracts/base_url';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private httpClientService: HttpClientService) { }

  async getBaseStorageUrl(): Promise<BaseUrl> {
    const getObservable: Observable<BaseUrl> = this.httpClientService.get<BaseUrl>({
      controller: "files",
      action: "GetBaseStorageUrl"
    });
    return await firstValueFrom(getObservable);
  }
}
