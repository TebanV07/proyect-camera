import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE = 'photos';

  constructor() {
    this.loadSaved();
  }

  public async takePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
    });
    this.photos.unshift(capturedPhoto);
    Preferences.set({ key: this.PHOTO_STORAGE, value: JSON.stringify(this.photos) });
  }

  public async clearGallery() {
    this.photos = [];
    Preferences.remove({ key: this.PHOTO_STORAGE });
  }

  private async loadSaved() {
    const photos = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = photos.value ? JSON.parse(photos.value) : [];
  }
}