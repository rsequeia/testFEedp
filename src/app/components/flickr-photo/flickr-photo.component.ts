import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/photo';
import { FlickrDataService } from 'src/app/services/flickr-data.service';

@Component({
  selector: 'app-flickr-photo',
  templateUrl: './flickr-photo.component.html',
  styleUrls: ['./flickr-photo.component.scss']
})
export class FlickrPhotoComponent implements OnInit {

  @Input() photo: Photo;

  imageUrl: string;

  constructor(
    private $photosService: FlickrDataService
  ) { }

  ngOnInit() {
    this.imageUrl = 'https://www.flickr.com/photos/' + this.photo.userID + '/' + this.photo.id;
  }

}
