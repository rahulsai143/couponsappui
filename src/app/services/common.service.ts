import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LanguageIdCode } from '../constants/application.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public cacheCommodity$: Observable<any>;
  public savedSpaceType$: string;
  public savedSpaceId$: string;
  subject = new Subject();
  public dataAllWidgetMaster: any;
  public dataAllWidgetUser: any;

  constructor() { }

  getCookie(name: string){
    let cookies : Array<string> = document.cookie.split(';');
    let cookiesLength : number = cookies.length;
    let cookieName = '${name}=';
    let c:string;

    for (let index :number = 0; index < cookiesLength; index ++){
      c = cookies[index].replace(/^s+/g,'');
      if (c.indexOf(cookieName) === 0){
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public getLanguageCodeFromId(languageId){
    if (languageId in LanguageIdCode){
      return LanguageIdCode[languageId];
    }else{
      return 'en-US';
    }
  }
}
