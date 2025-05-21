import { Component, OnInit } from '@angular/core';
import { TodoitemlistService } from '../../services/todoitemlist.service';
import { TodoItem } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-generatereport',
  imports: [CommonModule],
  templateUrl: './generatereport.component.html',
  styleUrl: './generatereport.component.scss'
})
export class GeneratereportComponent implements OnInit {
  date = new Date().toLocaleDateString().split('/').join('-');
  fileName= `Todo_Items(${this.date}).xlsx`;

  constructor(private todoItemListService:TodoitemlistService){}
  todoItems:TodoItem[] = [];

  ngOnInit(): void {
    this.todoItems = this.todoItemListService.ReturnToDoItems();
  }

  CalculateTimeDifference(endTime:any,startTime:any){

      if(endTime !== ''){
      const date1 = new Date(`1970-01-01T${startTime.split(' ')[0]}Z`);
      const date2 = new Date(`1970-01-01T${endTime.split(' ')[0]}Z`);

      // Difference in milliseconds
      const diffMs = Math.abs(date2.getTime() - date1.getTime());

      // Convert to hh:mm:ss
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      return `${hours}h ${minutes}m ${seconds}s`;
      }
      else{
        return '';
      }
  }

  ExportExcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
