import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm:string): any {
    return value.filter(function(get:any){
      return get.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    });
  }

}
