import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegister(form){
    this.authService.register(form.value).subscribe( res => {
      this.router.navigateByUrl('/home')
    })
  }

}
