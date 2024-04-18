import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';

TestBed.configureTestingModule({
  imports: [HttpClientModule],
  providers: [AuthService]
});
