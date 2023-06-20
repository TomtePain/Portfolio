import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

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


    // 
    await fetch('https://tom-pannier.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    })

    this.enableFields(nameField, mailField, messageField, sendButton);
    this.clearInputs();
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

  enableFields(nameField: { disabled: boolean; }, mailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    return nameField.disabled = false,
      mailField.disabled = false,
      messageField.disabled = false,
      sendButton.disabled = false
  }



}
