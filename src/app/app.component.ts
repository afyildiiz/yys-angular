import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Json } from 'src/schema';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { yys } from './yys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // session = this.supa.session;
  
  // supabase= createClient(environment.supabaseUrl,environment.supabaseKey)

  // data:yys={
  //   item_type: '',
  //   code: '',
  //   title: '',
  //   item_order: 0,
  //   parent_id: '',
  //   dsc: '',
  //   quality_standard_id: '',
  //   answer_type: '',
  //   answer_detail: {},
  //   score: 0,
  //   maturity_level: {}
  // }



  // myform!:FormGroup

  constructor(private readonly supa: SupabaseService,private http:HttpClient,private fb:FormBuilder) {}

  ngOnInit() {
    // // this.takeData()
    // this.myform=this.fb.group({
    //   item_type:new FormControl(this.data.item_type,Validators.required),
    //   code:new FormControl(this.data.code,Validators.required),
    //   title:new FormControl(this.data.title,Validators.required),
    //   item_order:new FormControl(this.data.item_order,Validators.required),
    //   // parent_id:new FormControl(this.data.parent_id,Validators.required),
    //   dsc:new FormControl(this.data.dsc,Validators.required),
    //   answer_type:new FormControl(this.data.answer_type,Validators.required),
    //   // answer_detail:new FormControl(this.data.answer_detail,Validators.required),
    //   score:new FormControl(this.data.score,Validators.required),
    //   // maturity_level:new FormControl(this.data.maturity_level,Validators.required),
    //   quality_standart_id:new FormControl(this.data.item_order,Validators.required)
      

    // })
    // this.getInfo()
    // this.subscription()
  }

  // async getInfo(){
  //   let { data: profile, error } = await this.supabase
  //   .from('quality_stardarts_items')
  //   .select('*')
  //   console.log('aa',JSON.stringify(profile))
  // }

  // async onSubmit() {
  //   const formData = this.myform.value
  //   const jsondata = JSON.stringify(formData)
  //   console.log('json hali: ',jsondata)
  //   console.log(formData)
  //   this.supabase
  //     .from('quality_stardarts_items') // Göndermek istediğiniz tablonun adını buraya girin
  //     .insert([formData])
  //     .then(response => {
  //       console.log('Veri başarıyla gönderildi:', response);
  //     })
      
  // }

  // async takeData(){
  //   let {data:quality,error}=await this.supabase
  //   .from('quality_standarts_items')
  //   .select('*')
  //   console.log(JSON.stringify(quality))
  // }

  

  // async subscription(){
  //   const profile = this.supabase.channel('custom-all-channel')
  //     .on(
  //       'postgres_changes',
  //       { event: '*', schema: 'public', table: 'tenants' },
  //       (payload) => {
  //       console.log('Change received!', payload)
  //       }
  //       )
  //     .subscribe()
  //      }

  //      async deleteInfo(){
  //       const { data, error } = await this.supabase
  //       .from('tenants')
  //       .delete()
  //       .eq('id', '10154135-9a37-49eb-ba89-611c64a796c7')
  //       console.log('deleted!',data)
  //      }

  //      async updateInfo(){
  //       const {data,error}= await this.supabase
  //       .from('tenants')
  //       .update({
  //         name:'aykut guven'
  //       })
  //       .eq('id','00154135-9a37-49eb-ba89-611c64a796c8')
  //      }
       
}
