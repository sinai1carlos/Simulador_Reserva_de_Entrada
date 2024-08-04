import { Component, NgModule } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.username, this.email, this.password).subscribe(
      success => this.router.navigate(['/login']),
      error => console.error('Registration error', error)
    );
  }
}
