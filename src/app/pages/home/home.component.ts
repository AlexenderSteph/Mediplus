import { Component,  OnInit, OnDestroy } from '@angular/core';

import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideNativeDateAdapter()],
  
})
export class HomeComponent implements OnInit, OnDestroy {
  value1: { current: number, target: number, increment: number } = { current: 0, target: 3468, increment: 0 };
  value2: { current: number, target: number, increment: number } = { current: 0, target: 557, increment: 0 };
  value3: { current: number, target: number, increment: number } = { current: 0, target: 4379, increment: 0 };
  value4: { current: number, target: number, increment: number } = { current: 0, target: 32, increment: 0 };

  ngOnInit(): void {
    this.calculateIncrements();
    this.startIncrementing();
  }

  calculateIncrements(): void {
    const totalSteps = 50; // Nombre total d'étapes pour atteindre la cible en 5 secondes

    this.value1.increment = Math.ceil(this.value1.target / totalSteps);
    this.value2.increment = Math.ceil(this.value2.target / totalSteps);
    this.value3.increment = Math.ceil(this.value3.target / totalSteps);
    this.value4.increment = Math.ceil(this.value4.target / totalSteps);
  }

  startIncrementing(): void {
    this.incrementValue(this.value1);
    this.incrementValue(this.value2);
    this.incrementValue(this.value3);
    this.incrementValue(this.value4);
  }

  incrementValue(value: { current: number, target: number, increment: number }): void {
    if (value.current < value.target) {
      value.current += value.increment;
      if (value.current > value.target) {
        value.current = value.target;
      }
      setTimeout(() => {
        this.incrementValue(value);
      }, 25); // Répéter toutes les 100 millisecondes
    }
  }

  ngOnDestroy(): void {
    // Vous pouvez ajouter ici un nettoyage si nécessaire
  }

  }
