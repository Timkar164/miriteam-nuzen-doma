import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  mas_str(mas){
   let st ='[';
    st=st+mas.join();
    st=st+']';
   return st
  }
  login(name,pas){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/login?log='+name+'&pas='+pas);
    return userar;
  }
  get_action(id){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_action?id='+id);
    return userar;
  }

  get_kurs(){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_kurs');
    return userar;
  }

  get_board(){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_board');
    return userar;
  }
  get_idea(){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_idea');
    return userar;
  }

  get_todo(){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_data?table=todo');
    return userar;
  }

  get_kontact(){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_data?table=contacts');
    return userar;
  }
  bot(text){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/bot?command='+text);
    return userar;
  }
  get_mes(id){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_message?user='+id);
    return userar;
  }

  get_dialog(mainuser,chat){
    const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/get_data?table=messages&sender=['+mainuser+','+chat+']&receiver=['+mainuser+','+chat+']');
    return userar;
  }
 set_message(mes,sender,receiver){
   const  userar = this.http.get('https://flask-api-miriteam.herokuapp.com/set_data?table=messages&sender='+sender+'&receiver='+receiver+'&date=10.59&text='+mes);
   return userar;
 }




}
