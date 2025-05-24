import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemLista } from './itemlista';


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

  lista: ItemLista[] = [];

  adicionarItem() {
    if (this.item.trim() !== '') {
      this.lista_itens.push({ nome: this.item.trim(), riscado: false });
      this.item = '';
      this.totalItems();

    }
  }


  addItem(){
    let itemLista = new ItemLista();

    if(this.item != ''){

      itemLista.nome = this.item;
      itemLista.id = this.lista.length + 1;
      this.lista.push(itemLista);
      this.item = '';
      this.totalItems();

    }
    else{
      alert("Digite um nome válido")
    }
  }


  deleteItem(id: number | undefined) {
    if (id !== undefined) {
      this.lista = this.lista.filter(item => item.id !== id);
      this.totalItems();
    }
  }


  removerItem(index:number){
    this.lista_itens.splice(index, 1);
    this.totalItems();

  }

  riscarItem(id:number){
    const item = this.lista.find(x => x.id === id);
    if (item){
      item.comprado = !item.comprado;
    }
  }

  totalItems(){
    this.total = this.lista.length;
  }


  limparLista(){
    this.lista = [];
    this.item = "";
    this.total = 0;
  }

}
