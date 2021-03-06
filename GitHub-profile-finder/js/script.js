let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
//let rep = document.querySelector('#rep');

//

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        //fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            if(data.message == 'Not Found'){
                ui.showAlert("User not found!", "alert alert-danger");
            } else{
              // console.log(data);
                ui.showProfile(data);
            }

        })
        fetch(`https://api.github.com/users/${userText}/repos`)
        .then(result => result.json())
        .then(data => {
            for (let i=0; i< data.length; i++){
                let val =  data[i];
                document.getElementById('rep').innerHTML = `${val}`;
            
            }
           /* for(x in data){
                let val = data[x];
               // return val.text();
            

           /* let  output = '<h2>users</h2>';
            datarep.forEach(function(user){
                output +=`
                ${user.datarep}
                
                `;
               
            });*/

           
           // console.log(val);
           /* for(x in data){
                let val = data[x];
              //  ui.repProfile(val);
                console.log( val);
      
                 
            }
        */
        })

    } else{
        //clear profile
        ui.clearProfile();
    }
});