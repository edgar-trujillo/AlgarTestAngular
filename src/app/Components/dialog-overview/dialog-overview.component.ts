import { Component, Input, Output, EventEmitter, SimpleChanges, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { HeroDetailComponent } from '../../Components/hero-detail/hero-detail.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogOverviewComponent {
  constructor(public dialog: MatDialog, private changeDetector: ChangeDetectorRef) {}
  @Input() heroDetail: any = null;
  @Output() openDialogEmitter: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['heroDetail'].currentValue) {
      this.openDialog();
    }
  }
  ngAfterViewChecked(): void {
    this.changeDetector.markForCheck();
this.changeDetector.detectChanges();
    this.changeDetector.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HeroDetailComponent, {
      data: {hero: this.heroDetail},
    });
    this.openDialogEmitter.emit(true);

    dialogRef.afterClosed().subscribe(result => {
      this.openDialogEmitter.emit(false);
    });
  }
}
