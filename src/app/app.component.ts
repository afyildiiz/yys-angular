import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management';

  session = this.supa.session;
  
  supabase= createClient(environment.supabaseUrl,environment.supabaseKey)

  constructor(private readonly supa: SupabaseService) {}

  ngOnInit() {
    // this.supa.authChanges((_, session) => (this.session = session));
    // this.insertInfo() 
    // this.updateInfo()
    // this.deleteInfo()
    this.getInfo()
    this.subscription()
  }

  async getInfo(){
    let { data: profile, error } = await this.supabase
    .from('profile')
    .select('*')
    console.log(profile)
  }

  async insertInfo(){
    const { data, error } = await this.supabase
      .from('tenants')
      .insert([
      { created_at: '2023-04-10T04:04:13+00:00',dsc: "Textil san", id: "10154135-9a37-49eb-ba89-611c64a796c7",name: "YILDIZ A.Ş",status: "active",tenant_admin_user_id: "8fc28d7a-368d-4f86-bdbb-663f8ac379ba",tenant_type: "yys customer" },
      ])
      console.log(data)
      console.log(error)
  }

  async subscription(){
    const profile = this.supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tenants' },
        (payload) => {
        console.log('Change received!', payload)
        }
        )
      .subscribe()
       }

       async deleteInfo(){
        const { data, error } = await this.supabase
        .from('tenants')
        .delete()
        .eq('id', '10154135-9a37-49eb-ba89-611c64a796c7')
        console.log('deleted!',data)
       }

       async updateInfo(){
        const {data,error}= await this.supabase
        .from('tenants')
        .update({
          name:'aykut guven'
        })
        .eq('id','00154135-9a37-49eb-ba89-611c64a796c8')
       }
       
}
