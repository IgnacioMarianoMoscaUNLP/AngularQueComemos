import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-menucard',
  imports: [],
  templateUrl: './menucard.component.html',
  styleUrl: './menucard.component.css'
})
export class MenucardComponent {
  @Input() menu: { title: string, date: string };
}
