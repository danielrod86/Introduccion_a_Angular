import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  seleccionada: Persona;

  listaPersonas: Persona[] = [];

  constructor() { }

  ngOnInit(): void {

    this.listaPersonas.push(new Persona("pedro", "perez", 20), new Persona("ana", "gomez", 30));
    this.listaPersonas.push(new Persona("juan", "sanchez", 50), new Persona("david", "gomez", 60));
  }

  seleccionarPersona(persona: Persona): void {
    this.seleccionada = persona;

  }

}
