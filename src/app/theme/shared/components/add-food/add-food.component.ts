import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ifood } from 'src/app/models/ifood';
import { FoodService } from 'src/app/services/food.service';
import { SharedModule } from '../../shared.module';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.scss'
})
export class AddFoodComponent {
  categories: string[] = [
    'burger sandwiches', 
    'chicken sandwiches', 
    'keto & light sandwiches', 
    'offers', 
    'appetizers', 
    'sauces', 
    'desserts', 
    'drinks'
  ];
  food: ifood =
    {
      category: '',
      description: { ar: '', en: '' },
      image: '',
      price: 0,
      title: { ar: '', en: '' }
    };

  constructor(
    private foodService: FoodService,
    private router: Router,
    private alertService: AlertService,  // inject AlertService to show success message
  ) { }
  addFood() {
    if (['burger sandwiches', 'chicken sandwiches', 'keto & light sandwiches'].includes(this.food.category)) {
      this.food.details = {
        comboOptions: false,
        drinks: false,
        extras: false,
        bread: false
      };
    }
    else {
      delete this.food.details;
    }
    this.foodService.addFood(this.food).then(() => {
      this.router.navigate(['/food']);
      this.alertService.showSuccess('Updated food Successfully ')

    });
  }
  categoryChanged() {
    if (!['burger sandwiches', 'chicken sandwiches', 'keto & light sandwiches'].includes(this.food.category)) {
      delete this.food.details;
    }
  };
}