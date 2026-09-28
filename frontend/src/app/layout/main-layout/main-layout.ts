import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './../navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
