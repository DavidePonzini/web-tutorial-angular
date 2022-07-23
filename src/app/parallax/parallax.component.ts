import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() height: string = '50';
  @Input() img: string = '';
  @Input() opacity: string = '1';

}
