import { NgModule } from "@angular/core";

import {MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatRippleModule,
        MatStepperModule,
        MatBadgeModule,
        MatPaginatorModule
        } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule ({
  imports: [MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTableModule,
            MatSidenavModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            MatButtonModule,
            MatCardModule,
            MatRippleModule,
            MatStepperModule,
            ReactiveFormsModule,
            FormsModule,
            MatBadgeModule,
            MatPaginatorModule
           ],
  exports: [MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTableModule,
            MatSidenavModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            MatButtonModule,
            MatCardModule,
            MatRippleModule,
            MatStepperModule,
            ReactiveFormsModule,
            FormsModule,
            MatBadgeModule,
            MatPaginatorModule
  ]
})

export class MaterialModule {}
