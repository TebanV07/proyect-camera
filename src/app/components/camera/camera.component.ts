import { Component } from '@angular/core';
import { PhotoService } from './Services/camera.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-camera',
  imports: [NgIf, NgFor],
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  constructor(public photoService: PhotoService) {}
}

