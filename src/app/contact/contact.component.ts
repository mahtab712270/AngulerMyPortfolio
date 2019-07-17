import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactM } from '../model/contact-m';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  SubmitForm(form: NgForm) {

    console.log(form.value)
    this.toastr.success('Thank You ' + form.value.name + '. I contuct you ASAP.', 'Thanks.');

    form.reset();
  }


}
