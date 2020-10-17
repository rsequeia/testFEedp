import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickrPhotoComponent } from './components/flickr-photo/flickr-photo.component';
import { FlickrGalleryComponent } from './components/flickr-gallery/flickr-gallery.component';

@NgModule({
  declarations: [FlickrPhotoComponent, FlickrGalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FlickrGalleryComponent
  ]
})

export class PhotosModule { }
