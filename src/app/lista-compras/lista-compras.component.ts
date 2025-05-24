import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})


export class ListaComprasComponent {
  item: string='';
  lista_itens: { nome: string, riscado: boolean }[] = [];
  total: Number= 0;

  adicionarItem() {
    if (this.item.trim() !== '') {
      this.lista_itens.push({ nome: this.item.trim(), riscado: false });
      this.item = '';
      this.totalItems();

    }
  }

  removerItem(index:number){
    this.lista_itens.splice(index, 1);
    this.totalItems();

  }

  riscarItem(index:number){
    this.lista_itens[index].riscado = !this.lista_itens[index].riscado;
  }

  totalItems(){
    this.total = this.lista_itens.length;
  }

}
