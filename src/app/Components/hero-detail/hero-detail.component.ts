import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<HeroDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
