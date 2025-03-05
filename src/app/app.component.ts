import { Component } from '@angular/core';
import { CameraComponent } from './components/camera/camera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CameraComponent],
  template: '<app-camera></app-camera>'
})
export class AppComponent {}
