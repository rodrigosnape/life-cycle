import { Item } from './../../interfaces/iItem';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('oninit')
  }

  ngOnChanges(): void {
    console.log('onchanges')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(){
    this.emitindoIdParaDeletar.emit(this.item.id);
    console.log('Estão tentando me calar.',this.item.id)
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  ngOnDestroy(){
    console.log('Conseguiram me calar!');
  }

}
