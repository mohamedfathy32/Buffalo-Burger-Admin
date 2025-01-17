import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ifood } from 'src/app/models/ifood';
import { AlertService } from 'src/app/services/alert.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FoodDetailComponent implements OnInit {
  food: ifood | null = null;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router,
    private alertService: AlertService,

  ) {}

  ngOnInit() {
    const titleEn = this.route.snapshot.paramMap.get('id').split('-').join(' ');

    if (titleEn) {
      this.foodService.getDocumentByTitle('products', titleEn).subscribe((data) => {
        this.food = data;
        console.log(this.food);
      });
    }
  }

  updateFood() {
    if (this.food) {
      this.foodService.updateFood(this.food.id, this.food).then(() => {

        this.router.navigate(['/food']);
        this.alertService.showSuccess('Updated food Successfully ')
      });
    }
  }
}
