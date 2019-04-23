import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-setttings',
  templateUrl: 'setttings.html',
})
export class SetttingsPage {

  constructor(private settSevice: SettingsService){}

  onToggle(toggle: Toggle){
    this.settSevice.setToggle(toggle.checked)
  }

  checked(){
    return this.settSevice.isToggle(); 
  }

}
