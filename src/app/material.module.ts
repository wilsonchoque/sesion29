import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
