import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Importar módulos necesarios
import { HttpClientModule } from '@angular/common/http'; // Si usas HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Proveer el servicio HttpClient
    provideAnimations(),  // Habilitar animaciones
  ],
}).catch((err) => console.error(err));
