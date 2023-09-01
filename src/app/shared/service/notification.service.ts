import { Injectable } from "@angular/core"

@Injectable({
   providedIn : 'root'
})
export class NotificationService{
   
   product = "mobile"
    msgalert(){
       alert('your data has been saved') 
    }
}



export class BackendData{
    sweetalert(){
        alert("service introduction")
    }
}