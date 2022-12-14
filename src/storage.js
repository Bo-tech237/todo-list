import database from "./database";

function saveToLocalStorage(){
    
    localStorage.setItem('Todo-List', JSON.stringify(database));
}


export default saveToLocalStorage;