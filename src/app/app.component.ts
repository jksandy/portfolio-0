import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-0';
  nav_items = [
    {
      button_content: "Education",
      span_content: "school"
    },
    {
      button_content: "Technical Skills",
      span_content: "code"
    },
    {
      button_content: "Acheivements",
      span_content: "trophy"
    },
    {
      button_content: "Experience",
      span_content: "work"
    },
    {
      button_content: "Projects",
      span_content: "wifi"
    }
  ]
}
