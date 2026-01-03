export const API_KEY = 'AIzaSyAR7Ncc65fii622_u5YnXTFGUAws3Tvu8I';

 export const value_converter = ( value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value >=1000){
         return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}