import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  plants = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPlants().subscribe((data: any) => {
      this.plants = data.plants;
    });
  }

  editPlant(id: number): void {
    // Lógica para editar una planta
  }

  deletePlant(id: number): void {
    // Lógica para eliminar una planta
  }
}
