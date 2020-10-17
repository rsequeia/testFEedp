import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlickrDataService {

  private endpoint = 'https://api.flickr.com/services/rest/';
  private APIKey = 'f71c79e38ee20690198d9a07065fd1a1';
  private photos = new BehaviorSubject<any[]>([]);
  public photos$ = this.photos.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRemotePhotos() {
    this.httpClient.get<any>(this.getEndpoint()).subscribe(response => {
      if (response.stat === 'ok') {
        this.photos.next(response.photos.photo);
      } else {
        console.warn('Search called. No results given.');
      }
    });
  }

  private getEndpoint() {
    return `${this.endpoint}?${this.buildParams()}`;
  }

  private buildParams(): string {

    const extras: string[] = [
      'url_m',
      'url_sq',
      'description',
      'date_taken',
    ];

    const parameters: string[] = [
      `api_key=${this.APIKey}`,
      'format=json',
      'nojsoncallback=1',
      'safe_search=1',
      'method=flickr.photos.search',
      'tags=landscape',
      'sort=relevance',
      `extras=${extras.join(',')}`,
      'details=1',
    ];

    return parameters.join('&');
  }
}
