import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  plants: any[] = [];
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPlants();
    this.loadUsers();
  }

  loadPlants() {
    this.apiService.getPlants().subscribe({
      next: (response: any) => {
        this.plants = response.plants;
      },
      error: (error) => {
        console.error('Error loading plants:', error);
      }
    });
  }

  loadUsers() {
    this.apiService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response.users;
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }

  deletePlant(id: number) {
    this.apiService.deletePlant(id).subscribe({
      next: () => {
        this.plants = this.plants.filter(plant => plant.id !== id); // Elimina la planta del array
        console.log('Planta eliminada con éxito');
      },
      error: (error) => {
        console.error('Error al eliminar la planta:', error);
      }
    });
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id); // Elimina el usuario del array
        console.log('Usuario eliminado con éxito');
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    });
  }

  // Función para editar planta (puedes implementarla si es necesario)
  editPlant(id: number) {
    console.log('Editar planta:', id);
  }
}
