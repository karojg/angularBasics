import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

export class BarComponent implements OnChanges {

  @Input() bar: number;
  iconWidth: number;

  ngOnChanges(): void {
    this.iconWidth = this.bar * 52 / 5;
  }
}
