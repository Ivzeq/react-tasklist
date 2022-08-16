

function DataService (){{
    const data =
        [
            {
              "id": 1,
              "title": "First Task",
              "completed": true
            },
        
            {
              "id": 2,
              "title": "Second Task",
              "completed": true
            },
        
            {
              "id": 3,
              "title": "Third Task",
              "completed": false
            }
        ];
    /*let getTaskPromise = new Promise((resolve, reject) =>{
        let a = 2
        if (a==2){
            resolve(DataService)
        }else{
            reject('Failed')
        }
    })*/

    return data;
}}

export default DataService;