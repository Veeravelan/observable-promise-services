import { FormGroup, FormControl } from "@angular/forms";
import { group } from "@angular/animations";

export class ValidatorsMethod {
    static yearValidator(){
        return (group:FormGroup):{[key:string]: boolean}=>{
            let joinDate = group.get('joindate').value;
            let endDate = group.get('enddate').value;
            if(parseInt(joinDate) < parseInt(endDate)){
                console.log("true");
                return {notvalidDate: true};
            }
            return null;
        }
    }
}