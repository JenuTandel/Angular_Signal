import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  a = signal<number>(5);
  b = signal<number>(3);
  firstname = signal('Jinal');
  lastname = signal('Tandel');
  adduser = false;
  qty = signal<number>(4);
  users = signal([
    { name: 'Jinal', contactNumber: '1234567890', age: 23 },
    { name: 'Hetal', contactNumber: '9904567856', age: 26 },
    { name: 'Arpan', contactNumber: '9560567888', age: 19 },
    { name: 'Nitya', contactNumber: '9934450999', age: 6 },
  ]);

  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = new FormGroup('');
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      name: '',
      contactNumber: '',
      age: '',
    });
  }

  fullname = computed(() => {
    return this.firstname() + ' ' + this.lastname();
  });

  sideeffect = effect(() => {
    console.log(this.fullname());
  });

  // public firstname = 'Jinal';
  // public lastname = 'Tandel';
  // public fullname = this.firstname + this.lastname;

  onFirstname(fname: any) {
    // this.firstname = fname;
    this.firstname.set(fname);
  }
  onLastname(lname: any) {
    // this.lastname = lname;
    this.lastname.set(lname);
  }

  increaseQty() {
    this.qty.update((q) => q + 1);
  }

  decreaseQty() {
    if (this.qty() != 1) {
      this.qty.update((q) => q - 1);
    }
  }

  addUser() {
    this.adduser = true;
  }

  addUserData() {
    // this.users.push(this.userForm.value);
    this.users.mutate((userlist) => {
      userlist.push(this.userForm.value);
    });
  }
}
