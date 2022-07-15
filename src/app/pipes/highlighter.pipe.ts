import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(safeHtml: any, args: any, type?:string): unknown {
    let value = safeHtml?.changingThisBreaksApplicationSecurity;
    if(!args) return value;
    if(type==='full'){
      console.log(value);
      const re = new RegExp("\\b("+args+"\\b)", 'igm');
      value= value.replace(re, '<span class="highlighted-text">$1</span>');
    }
    else{
      const re = new RegExp(args, 'igm');
      value= value.replace(re, '<span class="highlighted-text">$&</span>');
    }

      return value;
  }

}
