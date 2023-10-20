
class Storage{

    getItem = (key:string)=>{
        const rest:any = localStorage.getItem(key);
        if(rest){
            try{
                return JSON.parse(rest);
            }catch (e){
                return rest
            }
        }
        return rest;
    }

    setItem = (key:string,value:any)=>{
        const v = typeof value === "object"?JSON.stringify(value):value;
        localStorage.setItem(key,v)
    }

    removeItem = (key:string)=>{
        localStorage.removeItem(key);
    }

    clear = ()=>{
        localStorage.clear();
    }

}
const selfStorage = new Storage()
export default selfStorage