import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Jobs } from '../Jobs';


@Component({
  selector: 'app-jobcard2',
  templateUrl: './jobcard2.component.html',
  styleUrls: ['./jobcard2.component.css']
})
export class Jobcard2Component implements OnInit {

  @Input('data') job:any;
  name:string = ''
  location:string=''
  company:string=''
  landing_page:string=''
  button:string="remove from wishlist";
  disable:boolean=false;
  buttonColor:string="btn btn-info";

  jobs: Array<Jobs>;
  favoritedata: boolean = true;

  constructor(private AuthenticationService:AuthenticationService, private router:Router) { }
  ngOnInit(): void {

    this.AuthenticationService.getFavoriteList().subscribe((data: Jobs[]) => {
      this.jobs = data;
    });
    
  }    

  removeFromWishlist(job: Jobs){
    this.deleteJobFromWishList(job);
    console.log("deleted");
    // this.button="removed from wishlist";
    // this.disable=true;
    // this.buttonColor="btn btn-info";
    console.log(job);
   

  }
  deleteJobFromWishList(job: Jobs)
  {
    this.AuthenticationService.deleteJobFavouriteList(job).subscribe((data: any)=>{console.log(data);
     
    })
  }
  
  
}
