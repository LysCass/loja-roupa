import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { produtos, Produto } from './data/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = produtos;
  filtro: string = '';

  get produtosFiltrados(): Produto[] {
    if (!this.filtro) return this.produtos;
    const texto = this.filtro.toLowerCase();
    return this.produtos.filter(p =>
      p.nome.toLowerCase().includes(texto) ||
      p.descricao.toLowerCase().includes(texto)
    );
  }
}