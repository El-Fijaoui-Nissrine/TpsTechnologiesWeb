import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log('File selected:', file);
   
  }
}
