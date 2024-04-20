import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from '../pages/pages-routing.module';



const AngularMaterial = [
  MatToolbarModule, MatButtonModule, MatIconModule,MatGridListModule,MatDividerModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AngularMaterial,
    FlexLayoutModule,
    FlexLayoutServerModule,
  ]
})
export class SharedModule { }
