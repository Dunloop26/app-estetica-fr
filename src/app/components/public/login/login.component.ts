import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';

import { HostDirective } from 'src/app/directives/host.directive';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}
  @ViewChild(HostDirective, { static: true }) appHost!: HostDirective;

  ngOnInit(): void {
    this.loadSignIn();
  }

  loadSignIn() {
    this.loadComponent(SignInFormComponent);
  }

  loadSignUp() {
    this.loadComponent(SignUpFormComponent);
  }

  loadComponent<T>(componentType: Type<T>) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.appHost.viewContainerRef;

    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
