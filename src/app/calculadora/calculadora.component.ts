import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;



  somar(){
    this.resultado = Number(this.numero1) + Number(this.numero2);
    this.numero1 = 0;
    this.numero2 = 0;
  }

  subtrair(){

    this.resultado = Number(this.numero1) - Number(this.numero2);
    this.numero1 = 0;
    this.numero2 = 0;
  }

  multiplicar(){
    this.resultado = Number(this.numero1) * Number(this.numero2);
    this.numero1 = 0;
    this.numero2 = 0;
  }

  dividir(){
    this.resultado = Number(this.numero1) / Number(this.numero2);
    this.numero1 = 0;
    this.numero2 = 0;
    
  }

  limpar(){
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }

  isResultadoInvalido(): boolean {
  return isNaN(this.resultado) || this.resultado === null || this.resultado === undefined;
  }

}
