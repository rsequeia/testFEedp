import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrGalleryComponent } from './flickr-gallery.component';

describe('FlickrGalleryComponent', () => {
  let component: FlickrGalleryComponent;
  let fixture: ComponentFixture<FlickrGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickrGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
