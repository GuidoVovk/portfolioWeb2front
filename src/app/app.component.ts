import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PortfolioWeb';
  theme: Theme = 'light-theme'

 

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private observer: BreakpointObserver, private tokenService: TokenService) {}
  ngOnInit() {
    this.initializeTheme();   
  }

  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme'));
  }
  
  initializeTheme = (): void=> this.renderer.addClass(this.document.body, this.theme);
 

}

export type Theme = 'light-theme' | 'dark-theme';