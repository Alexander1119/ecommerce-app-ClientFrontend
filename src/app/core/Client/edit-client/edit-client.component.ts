import { Component, OnInit, Inject} from '@angular/core';
import { NavbarComponent, ClientData } from '../../navbar/navbar.component';
import { Cliente } from '../../../Shared/Models/Cliente';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../../Shared/Models/DialogData';
import { ServiceService } from '../../Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  // @ViewChild(NavbarComponent) child;
  constructor(
    private service:ServiceService,
    public dialogRef: MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  hide=true;
  clientData: Cliente = new Cliente();
  ngOnInit(): void {
    this.service.dataClientwithNickname(this.data.name)
    .subscribe(client => {
      if (client != null) {
        this.clientData=client;
      }else{
        console.log('usuario no encontrado');
      }
    });
  }

  Cliente = new FormGroup({
    nickName: new FormControl(''),
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    firstLastName: new FormControl(''),
    secondLastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  nickName: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  email: string;
  password: string;

  // valueName = this.clientData.name;
  // valueSname = this.clientData.secondName;
  // valueLname = this.clientData.lastName;
  // valueSLname = this.clientData.secondLastName;
  // valueEmail = this.clientData.mail;
  // valuePassword = this.clientData.password;
  client: Cliente = new Cliente();

  update(){
    this.dialogRef.close();

    console.log(this.clientData.lastName);
    this.service.editUser(this.clientData)
    .subscribe(data => {
      if (data!=null) {
        console.log("confirm");
      }else{
        console.log("cancel");
      }
    });
  }
}
