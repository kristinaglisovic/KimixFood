import { Component, OnInit } from '@angular/core';
import { IStaff } from 'src/app/interfaces/IStaff';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.css']
})
export class StaffSectionComponent implements OnInit {

  Staff:IStaff[]=[];
  constructor(private ss:StaffService) { }

  ngOnInit(): void {
    this.ss.getAllStaff().subscribe({
      next: data =>{
        this.Staff=data;
      },
      error: err=>
      console.log(err)
    })
  }

}
