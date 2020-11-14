import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginClient } from '../../../Shared/Models/login';
import { Cliente } from '../../../Shared/Models/Cliente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private service: ServiceService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public snackBar:MatSnackBar) { }

   password: string;
   hide = true;

  // cliente = new FormGroup({
  //   nickname: new FormControl(''),
  //   password: new FormControl('')
  // });

  // client: Cliente = new Cliente();
  ngOnInit(): void {
    
  }
  
  contador = 0;

  client =new Cliente();

  clienReturn= new Cliente();

 login(){
    this.client.nicknameUser = this.data;
    this.client.password = this.password;

    this.service.loginClient(this.client)
    .subscribe(data => {
      if (data != null) {
        this.clienReturn = data;
      console.log(data);
        console.log('Bienvenido ' + this.clienReturn.lastName);

      }else{

        // this.contador++;
        // if (this.contador>3) {
        //   this.snackBar.open('No puede ingresar al sistema', '', {duration: 2000,});
        // }
      }
    });

  }
  cancelar() {
  
    this.dialogRef.close();
  }
}
