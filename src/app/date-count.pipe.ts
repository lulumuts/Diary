import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current Date and nativeElement
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime)//Returns value in milliseconds
    const secondsInADay= 86400; //60 seconds*minutes in an hour *24 hours

    var dateDifferenceSeconds=dateDifference*0.001; //converts to secondsInADay

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if(dateCounter >= 1){
      return dateCounter;
    }else{
      return null;
    }

  }

}
