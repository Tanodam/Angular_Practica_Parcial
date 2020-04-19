import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-informador',
  templateUrl: './informador.component.html',
  styleUrls: ['./informador.component.css']
})
export class InformadorComponent implements OnInit {
  @Input() producto:Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
