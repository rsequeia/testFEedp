import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/photo';
import { FlickrDataService } from 'src/app/services/flickr-data.service';

@Component({
  selector: 'app-flickr-gallery',
  templateUrl: './flickr-gallery.component.html',
  styleUrls: ['./flickr-gallery.component.scss']
})
export class FlickrGalleryComponent implements OnInit {

  photos: Photo[] = [];

  list = new Array();
  pageList = new Array();
  currentPage = 1;
  numberPerPage = 20;
  numberOfPages = 0;

  private photosSubscription: Subscription;

  constructor(
    private $photosService: FlickrDataService,
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  ngOnDestroy(): void {
    this.photosSubscription.unsubscribe();
  }

  getPhotos() {
    this.photos = [];
    this.photosSubscription = this.$photosService.photos$.subscribe(response => {
      this.photos = [];
      response.forEach(element => {
        const photo: Photo = {
          id: element.id,
          userID: element.owner,
          title: element.title,
          image: element.url_m,
          description: element.description._content.replace( /(<([^>]+)>)/ig, ''),
        };
        this.photos.push(photo);
      });
      this.loadList();
      this.numberOfPages = this.getNumberOfPages();
    });
    this.$photosService.getRemotePhotos();
  }

  getNumberOfPages() {
    return Math.ceil(this.photos.length / this.numberPerPage);
  }

  nextPage() {  
    this.currentPage += 1;
    this.loadList();
  }

  previousPage() {
    this.currentPage -= 1;
    this.loadList();
  }

  firstPage() {
    this.currentPage = 1;
    this.loadList();
  }

  lastPage() {
    this.currentPage = this.numberOfPages;
    this.loadList();
  }

  loadList() {
    let begin = ((this.currentPage - 1) * this.numberPerPage);
    let end = begin + this.numberPerPage;

    this.pageList = this.photos.slice(begin, end);
    this.check();
  }

  check() {
    (document.getElementById("next") as HTMLInputElement).disabled = this.currentPage === this.numberOfPages ? true : false;
    (document.getElementById("previous") as HTMLInputElement).disabled = this.currentPage === 1 ? true : false;
    (document.getElementById("first") as HTMLInputElement).disabled = this.currentPage === 1 ? true : false;
    (document.getElementById("last") as HTMLInputElement).disabled = this.currentPage === this.numberOfPages ? true : false;
  }
}
