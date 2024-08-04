import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      success => this.router.navigate(['/home']),
      error => console.error('Login error', error)
    );
  }
}
