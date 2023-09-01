import { NgModule } from "@angular/core";
import {MatCardModule}  from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button"


export const material = [MatCardModule,MatButtonModule]

@NgModule({
    imports:[...material],
    exports :[...material]
})
export class MaterialModule{

}