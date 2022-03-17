import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  dadoLocalStorage:string []|null=[]
   tasks:string []=[]
   localStorage:string[] | null=[]
  dado:string | null=''

  ngOnInit():void{
    this.recuperarDadosDoLocalStorage()
  }
  salvarNoLocalStorage(valor: string): void {
    this.dadoLocalStorage?.push(valor)
    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
   
  }
 
  
  recuperarDadosDoLocalStorage():void{
    let storage=localStorage.getItem('dado')
    let arr=JSON.parse(storage|| '[]')
    this.dadoLocalStorage=arr
  }
  removerTodosOsDados():void{
    this.dadoLocalStorage=[];
    let dado=[]
   } 
       

  deletarDoLocalStorage(index: number): void {
    this.dadoLocalStorage?.splice(index, 1)

    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
  }
  
  
  recoverstorage():void{
   let storage= localStorage.getItem('task')
   let arr =JSON.parse(storage||'[]')
   this.dadoLocalStorage= arr
 } 
}