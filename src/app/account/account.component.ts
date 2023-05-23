import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthSession, createClient } from '@supabase/supabase-js';
import { Profile, SupabaseService } from '../supabase.service';
import { environment } from 'src/environments/environment';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(
    private readonly supa: SupabaseService,
    private formBuilder: FormBuilder
  ) {
    
  }

  async ngOnInit(): Promise<void> {

  }


  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
