import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-comp',
  templateUrl: './nav-bar-comp.component.html',
  styleUrls: ['./nav-bar-comp.component.css']
})
export class NavBarCompComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  secondNavigate(){
    this.router.navigateByUrl('billing/second')
  }
}
