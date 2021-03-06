import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TripModel} from "../../repository/models/trip.model";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {
  newTripForm = new FormGroup({
    title: new FormControl(''),
    destination: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    image: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<NewTripComponent>) {
  }

  addNewTrip() {
    let startDateValue = this.newTripForm.get('startDate').value;
    let startDate = startDateValue === "" ? null : startDateValue;
    let endDateValue = this.newTripForm.get('endDate').value;
    let endDate = endDateValue === "" ? null : endDateValue;

    this.dialogRef.close({
      title: this.newTripForm.get('title').value,
      destination: this.newTripForm.get('destination').value,
      startDate,
      endDate,
    } as TripModel);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.newTripForm.reset();
  }
}
