import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.irParaHome.bind(this)
    },
    {
      label: 'Produto',
      action: this.irParaProduto.bind(this)
    }
  ];

  constructor(private readonly router: Router) { }

  private irParaHome(): void {
    this.router.navigate(['']);
  }

  private irParaProduto(): void {
    this.router.navigate(['produto']);
  }
}
