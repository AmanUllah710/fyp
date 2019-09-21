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
        MatPaginatorModule,
        MatDialogModule,
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
            MatPaginatorModule,
            MatDialogModule
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
            MatPaginatorModule,
            MatDialogModule
  ]
})

export class MaterialModule {}
