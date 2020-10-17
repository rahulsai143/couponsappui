import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.sass']
})
export class LoginpageComponent implements OnInit {

  closeResult: string;
  genders = genders;
  maritalStatus=maritalStatus;

  constructor(fb: FormBuilder,  private modalService: NgbModal) { 
    this.signupForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]*$/)]],
      email:   ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      contactno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      Confirmpassword:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      country :['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      maritalStatus:['',[Validators.required]]
    }, { validator: this.checkIfMatchingPasswords('password', 'Confirmpassword') });
  }

  submitForm(value: any) {
    if (this.signupForm.valid)
      console.log(value)
    this.signupForm.reset()
    // this.signupForm.controls.genders.setValue(0)
  }

  checkPass: any;
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) {
        this.checkPass = true;
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        this.checkPass = false;
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  a(event) {
    var char = event.which;
    if (char > 31 && char != 32 && (char < 65 || char > 90) && (char < 97 || char > 122)) {
      return false;
    }
  }

  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id)
    });
  }

  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }

  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Andhra Pradesh' },
      { id: 2, country_id: 1, name: 'Madhya Pradesh' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ]
  }

  getCity() {
    return [
      { id: 1, state_id: 1, name: 'Guntur' },
      { id: 2, state_id: 1, name: 'Vijayawada' },
      { id: 3, state_id: 1, name: 'Nellore' },
      { id: 4, state_id: 1, name: 'Kadapa' },
      { id: 5, state_id: 2, name: 'Warangal' },
      { id: 6, state_id: 2, name: 'Hyderabad' },
      { id: 7, state_id: 2, name: 'Karimnagar' },
      { id: 8, state_id: 2, name: 'Kadapa' },
      { id: 9, state_id: 3, name: 'SOMA' },
      { id: 10, state_id: 3, name: 'Richmond' },
      { id: 11, state_id: 3, name: 'Sunset' },
      { id: 12, state_id: 4, name: 'Burbank' },
      { id: 13, state_id: 4, name: 'Hollywood' },
      { id: 14, state_id: 5, name: 'Sunset' },
      { id: 15, state_id: 5, name: 'Burbank' },
      { id: 16, state_id: 5, name: 'Hollywood' },
      { id: 17, state_id: 6, name: 'Benalla' },
      { id: 18, state_id: 6, name: 'Melbourne' },
    ]
  }

export const genders: any = ['Male', 'Female', 'Others'];

export const maritalStatus: any = ['Married', 'Unmarried'];

  ngOnInit(): void {
  }

  refresh() { }

  signupForm: FormGroup;

  selectedCountry = 0;
  selectedState = 0;
  states = [];
  cities = [];

}
