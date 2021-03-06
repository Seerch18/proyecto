import { Component, OnInit } from '@angular/core'
import { Evento } from '../../../models/Evento'
import { EventoService } from '../../../services/events/evento.service'

@Component({
  selector: 'app-like-eventos',
  templateUrl: './like-eventos.component.html',
  styleUrls: ['./like-eventos.component.css']
})
export class LikeEventosComponent implements OnInit {
  likeEvents: Array<Evento>

  constructor(private eventoService: EventoService) {
    this.likeEvents = []
  }

  ngOnInit(): void {
    this.cargarMeGustas()
  }

  cargarMeGustas() {
    this.eventoService
      .getLikeEvents()
      .subscribe((eventos) => (this.likeEvents = eventos))
  }
}
