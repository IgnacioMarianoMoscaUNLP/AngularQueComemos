import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MenucardComponent } from '../menucard/menucard.component';

@Component({
  selector: 'app-home-component',
  imports: [NavbarComponent,FooterComponent,MenucardComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  menus = [
    { title: 'Menú Vegano', date: '20/12/2024' },
    { title: 'Menú No Vegano', date: '20/12/2024' }
  ];
}
