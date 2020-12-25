import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Student} from '../student';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nameValue:string = null;
  ageValue:number =null ;
  regNumValue :string = null;
  searchResults: Student[];
  constructor(private searchservice : SearchService ) { }

  ngOnInit() {
  }

  clearName()
  {
    this.nameValue = null;
  }

  clearAge()
  {
    this.ageValue = null;
  }
  clearRegNumValue()
  {
    this.regNumValue= null;
  }
  onSearch(){

    if (this.nameValue != null && this.nameValue != '')
    {
        this.searchservice.getStudentByName(this.nameValue).subscribe(searchResults => this.searchResults = searchResults);

    }
    else if (this.ageValue != null)
    {
      this.searchservice.getStudentByAge(this.ageValue).subscribe(searchResults => this.searchResults = searchResults);

    }
    else if ( this.regNumValue != null && this.regNumValue != '')
    {
      this.searchservice.getStudentByRegNum(this.regNumValue).subscribe(searchResults => this.searchResults = searchResults);

    }
    else{
    this.searchservice.getStudents().subscribe(searchResults => this.searchResults = searchResults);
    }
  }

}
