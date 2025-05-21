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
    this.todoItems = [];
    this.todoItems = this.todoItemListService.ReturnToDoItems();
  }

  CalculateTimeDifference(endTime: any, startTime: any): string {
  if (endTime && startTime) {
    const startDate = new Date(`1970-01-01T${this.convertTo24Hr(startTime)}`);
    const endDate = new Date(`1970-01-01T${this.convertTo24Hr(endTime)}`);

    const diffMs = Math.abs(endDate.getTime() - startDate.getTime());

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return '';
}

// Converts 12-hour format with AM/PM to 24-hour format
convertTo24Hr(timeStr: string): string {
  const date = new Date(`1970-01-01 ${timeStr}`);
  return date.toISOString().substring(11, 19); // "HH:MM:SS"
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
