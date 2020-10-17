import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  
  title = 'couponsappui';
  isBlockedCookies = false;
  loading = true;

  constructor(private _commonService: CommonService, private spinner: NgxSpinnerService){
    try{
      this.isBlockedCookies = false;
      document.cookie = 'isCookieAllowed=allowed';
    }
    finally{
      const consentCookie = this._commonService.getCookie('isCookieAllowed');
      if (consentCookie && consentCookie === 'allowed'){
        this.isBlockedCookies = false;
      }
      else {
        this.isBlockedCookies = true;
      }
    }
  }

  ngOnInit(){
  }
}
