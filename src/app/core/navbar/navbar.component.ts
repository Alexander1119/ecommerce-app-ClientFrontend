import {ChangeDetectorRef, Component, OnDestroy, Output, EventEmitter,Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {LoginComponent } from '../authentication/login/login.component';
import { ServiceService } from '../Service/service.service';
import { SigninComponent } from '../authentication/signin/signin.component';
import { Cliente } from '../../Shared/Models/Cliente';
import { EditClientComponent } from '../Client/edit-client/edit-client.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export class ClientData {
  nicknameUser: string;
  password: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mobileQuery: MediaQueryList;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private service: ServiceService,
    private breakpointObserver: BreakpointObserver, 
    public dialog: MatDialog,
    public snackBar: MatSnackBar    ) {}


    dataClient: Cliente = new Cliente();

    nombreToolbar: string;

    displaylogin = true;


  login(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
          this.service.dataClientwithNickname(data)
          .subscribe(client => {
              this.dataClient = client;
              if (this.dataClient.name != null){
                console.log(client);
                console.log('usuario  encontrado');
                this.nombreToolbar = this.dataClient.name + ' ' + this.dataClient.lastName;
                this.snackBar.open('Bienvenido ' + data, '', {duration: 2000, });
                this.displaylogin =  false;

              }else{
                this.nombreToolbar = "";
                console.log(client);
                console.log('usuario no encontrado');
                this.snackBar.open('Los datos no son correctos ', '', {duration: 2000,});

              }
          });
      });

  }

  signin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    this.dialog.open(SigninComponent, dialogConfig);
    
  }

  
  newDataClient: Cliente = new Cliente();  

  editPerson(){
  
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '400px',
      data: {name: this.dataClient.nicknameUser, animal: this.nombreToolbar}
    });

    dialogRef.afterClosed().subscribe(
      data=>{
        this.service.dataClientwithNickname(this.dataClient.nicknameUser)
        .subscribe(newClient =>{
          this.newDataClient=newClient;
          this.snackBar.open('Se cambiaron realizaron los cambios ', '', {duration: 2000,});

          if (this.newDataClient.secondName==null && this.newDataClient.secondLastName==null) {
            this.nombreToolbar=this.newDataClient.name+' '+this.newDataClient.lastName;
          }if (this.newDataClient.secondName!=null && this.newDataClient.secondLastName==null) {
            this.nombreToolbar=this.newDataClient.name+' '+this.newDataClient.secondName+' '+this.newDataClient.lastName;
          }if (this.newDataClient.secondName==null && this.newDataClient.secondLastName!=null) {
            this.nombreToolbar=this.newDataClient.name+' '+this.newDataClient.lastName+' '+this.newDataClient.secondLastName;
          }else{
            this.nombreToolbar=this.newDataClient.name+'  '+this.newDataClient.secondName+' '+this.newDataClient.lastName+' '+this.newDataClient.secondLastName;
          }
        });
      }
    )
  }



  logout(){
    this.nombreToolbar='';
    this.displaylogin=true;
  }

  
}


