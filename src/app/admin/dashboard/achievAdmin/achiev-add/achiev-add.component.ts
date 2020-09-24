import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Achievement } from 'src/app/models/achievement';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-achiev-add',
  templateUrl: './achiev-add.component.html',
  styleUrls: ['./achiev-add.component.scss']
})
export class AchievAddComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private formBuilder : FormBuilder
  ) { }


  achievement : Achievement;
  achievementAddForm : FormGroup;

  createAchievementForm() {
    this.achievementAddForm = this.formBuilder.group({
      achievementName : ["",Validators.required],
      achievementDate : ["",Validators.required],
      trophy : ["",Validators.required]
    })
  }

  ngOnInit() {
    this.createAchievementForm();
  }

  add() {
    if(this.achievementAddForm.valid) {
      this.achievement = Object.assign({},this.achievementAddForm.value)
      this.adminService.addAchievement(this.achievement)
    }
  }

}
