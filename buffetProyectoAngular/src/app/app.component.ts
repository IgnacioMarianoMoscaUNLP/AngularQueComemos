import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { ComidaComponent } from './components/comida/comida.component';
import { MenuCreationComponent } from './components/menu-creation/menu-creation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponentComponent } from "./components/home-component/home-component.component";

//agregar LoginComponent
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RegisterComponent, CommonModule, RegisterComponent,
    ComidaComponent, MenuCreationComponent, NavbarComponent,
    FooterComponent, HomeComponentComponent, HomeComponentComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buffetProyectoAngular';
}
