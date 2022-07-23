import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof ParallaxComponent
   */
   hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  @Input() height: string = '50';
  @Input() img: string = '';
  @Input() opacity: string = '1';

}
