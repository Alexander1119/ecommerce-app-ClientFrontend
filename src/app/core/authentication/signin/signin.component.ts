import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../../Shared/Models/Cliente';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(
    private service: ServiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SigninComponent>
    ) { }

  hide = true;
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

  client: Cliente = new Cliente();
  signin(){
    this.client.idUser = 0;
    this.client.nicknameUser = this.nickName;
    this.client.name = this.firstName;
    this.client.secondName = this.secondName;
    this.client.lastName = this.firstLastName;
    this.client.secondLastName = this.secondLastName;
    this.client.mail = this.email;
    this.client.password = this.password;
    this.client.urlImage='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png';
    this.client.nameImage='image1';
    console.log(this.Cliente.value);


    if (this.client != null) {
      this.dialogRef.close();
      this.service.RegisterClient(this.client)
      .subscribe(data => {
        console.log('Success');
      });
    }else{
      console.log('Fail');
      
    }
    // this.service.RegisterClient(client)
    // .subscribe(data=>{
    //   this.snackBar.open('Se agrego correctamente ', '', {duration: 2000,})
    // });
  }
 
  ngOnInit(): void {
  }

}
