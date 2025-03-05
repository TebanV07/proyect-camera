import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from './Services/camera.service';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  constructor(public photoService: PhotoService) {}
}