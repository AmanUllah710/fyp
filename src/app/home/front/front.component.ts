import { CounterService } from './counter.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';


export interface PeriodicElement {
  id: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}

/** Constants used to fill up our data base. */
const TYPES: string[] = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray"
];
const NAMES: string[] = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth"
];

@Component({
  selector: "app-front",
  templateUrl: "./front.component.html",
  styleUrls: ["./front.component.css"]
})

export class FrontComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  displayedColumns: string[] = ["id", "name", "type", "quantity", "price", "add", "btn"];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( private counterService : CounterService) {
    // Create 100 users
    const users = Array.from({ length: 200 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public get count() {
    return this.counterService;
  }
  public incCount(){
    this.counterService.count += 1;
  }

  public decCount(){
    if(this.counterService.count > 0) {
    this.counterService.count -= 1;
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): PeriodicElement {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    " " +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    ".";

  return {
    id: id.toString(),
    name: name,
    quantity: Math.round(Math.random() * 200),
    price: Math.round(Math.random() * 200),
    type: TYPES[Math.round(Math.random() * (TYPES.length - 1))]
  };
}
