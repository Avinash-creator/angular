import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup : FormGroup;
  fifthFormGroup : FormGroup;
  sixthFormGroup : FormGroup;
  isOptional = false;




  constructor(private _formBuilder: FormBuilder,private fb: FormBuilder) {}



  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

 
  positionsOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  positions = new FormControl(this.positionsOptions[0]);


  positionssOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  positionss = new FormControl(this.positionssOptions[0]);

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ''
    });

    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ''
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl:''
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl:''
    });
   
  }
}