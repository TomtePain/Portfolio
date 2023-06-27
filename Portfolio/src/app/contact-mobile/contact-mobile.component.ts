import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {
  ngOnInit(): void {
  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  nameFilled: boolean = false;
  mailFilled: boolean = false;
  messageFilled: boolean = false;

  checkFields() {
    let nameField: HTMLElement | any = document.getElementById('nameField');
    let mailField: HTMLElement | any = document.getElementById('mailField');
    let messageField: HTMLElement | any = document.getElementById('msg');

    if (nameField.value != '') {
      this.nameFilled = true;
    } else {
      this.nameFilled = false;
    }

    if (mailField.value != '') {
        this.mailFilled = true
    } else { this.mailFilled = false }

    if(messageField.value != '') {
      this.messageFilled = true 
    } else {
      this.messageFilled = false;
    }
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.disableFields(nameField, mailField, messageField, sendButton);

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);

    await fetch('https://tom-pannier.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    })
    this.showPopUp();
    this.enableFields(nameField, mailField, messageField, sendButton);
    this.clearInputs();
    this.checkFields();
  }

  clearInputs() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  }

  disableFields(nameField: { disabled: boolean; }, mailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    return nameField.disabled = true,
      mailField.disabled = true,
      messageField.disabled = true,
      sendButton.disabled = true
  }

  enableFields(nameField:any, mailField:any, messageField:any, sendButton:any) {
    return nameField.disabled = false,
      mailField.disabled = false,
      messageField.disabled = false,
      sendButton.disabled = false;
  }

  showPopUp() {
    let popUp:any = document.getElementById('popup');
    popUp.classList.remove('d-none');
    setTimeout(() => {
      popUp.classList.add('d-none');
    }, 3500);
  }
}
