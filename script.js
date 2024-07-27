let add_button = document.querySelector("#purple-button") ; 
let calender_click = document.querySelector("#schedule-button1");
let date_changer = document.querySelector(".hidden-date-input1");

let clock_click = document.querySelector("#schedule-button2");
let time_changer = document.querySelector(".hidden-date-input2");

// creating function to add 

const tasks = [];

const addTask = (date_value_as_key, to_do_task, time_value_deadline, is_done = false) => {
    const ta = {
        message: to_do_task,
        time: time_value_deadline,
        is_done: is_done,
    };
    const task = [] ; 
    task.push(ta); 
    const taskObject = {};
    taskObject[date_value_as_key] = task;
    tasks.push(taskObject); // Add task object with date_value_as_key as the key
    // return task; // Return the added task if needed
}



const isKeyExists = (key) => {
    return tasks.some(task => key in task);
}


function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  }


 
  
// calender_click.addEventListener("click", (event)=>{
    
//     date_changer.style.display = "block"; 
//     date_changer.click();
//     // date_changer.focus();
// });

// clock_click.addEventListener("click", (event)=>{
//     time_changer.style.display = "block"; 
//     time_changer.click();
// });

// document.getElementById('schedule-button1').addEventListener('click', () => {
//     let datePicker = document.getElementById('date-picker');

//     datePicker.style.display = 'block';
//     datePicker.focus(); 
// });

document.getElementById('date-picker').addEventListener('click', () => {
    let datePicker = document.getElementById('date-picker');
    // datePicker.style.display = 'none';
});

// document.getElementById('schedule-button2').addEventListener('click', () => {
//     let timePicker = document.getElementById('time-picker');
//     timePicker.style.display = 'block';
//     timePicker.focus(); // Open the date picker
// });
 
document.getElementById('time-picker').addEventListener('click', () => {
    let timePicker = document.getElementById('time-picker');
    // timePicker.style.display = 'none';
});


// const hideMenu = () => {
    
// };


add_button.addEventListener("click", (event)=>{

    // retrieve date value ;
    let date_get = date_changer.value; 
    // time_data.textContent = date_get ;

    let list_data = document.querySelector(".all-notes") ; 
    let list_message = document.querySelector("#add-text-space");

    let task_to_add = document.createElement("div") ; 
    task_to_add.classList.add("inside_note_content") ;


    let check_mark = document.createElement("div") ; 
    let to_do_message = document.createElement("div") ; 
    let time_icon = document.createElement("div") ; 
    let time_data = document.createElement("div") ; 
    let three_dot = document.createElement("div") ;

    // check_mark.style.border;
    to_do_message.style.backgroundColor = getRandomColour();
    time_icon.style.backgroundColor = getRandomColour(); 
    time_data.style.backgroundColor = getRandomColour();
    three_dot.style.backgroundColor = getRandomColour();
    
    check_mark.id="ele1" ; 
    to_do_message.id="ele2";
    time_icon.id="ele3";
    time_data.id="ele4";
    three_dot.id="ele5";

    three_dot.classList.add("edit_del");
    three_dot.classList.add("dropdown");
    three_dot.classList.add(`dropdown${date_get}`);
    

    let dot_three = document.createElement("button");


    dot_three.innerHTML = "<span class='material-symbols-outlined'>more_horiz</span>";
    // dot_three.innerHTML = "<span class='material-symbols-outlined'>delete</span>";
    dot_three.id = "action-button"; 
    dot_three.className="icon-button";
    dot_three.classList.add("dropbtn");
    dot_three.classList.add(`dropbtn${date_get}`);

//     <div class="dropdown">
    //   <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    //   <div id="myDropdown" class="dropdown-content">
    //     <a href="#">Link 1</a>
    //     <a href="#">Link 2</a>
    //     <a href="#">Link 3</a>
    //   </div>
    // </div> 

    let drop_div = document.createElement("div");
    drop_div.classList.add("dropdown-content");
    drop_div.classList.add(`dropdown-content${date_get}`);
    drop_div.id= "myDropdown";
    // drop_div.id= `myDropdown${date_get}`;

    let edit_btn = document.createElement("div");
    edit_btn.innerHTML = "<span class='material-symbols-outlined'>edit</span>";
    let del_btn = document.createElement("div");
    del_btn.innerHTML = "<span class='material-symbols-outlined'>delete</span>";

    drop_div.appendChild(edit_btn);
    drop_div.appendChild(del_btn);
    

    time_icon.innerHTML = "<span class='material-symbols-outlined'>schedule</span>";

    let check_element = document.createElement("input");
    check_element.type = "checkbox";
    check_element.id = "checker" ; 
    check_element.classList.add("circular-checkbox");


    let message = list_message.value ;
    list_message.value ="";
    to_do_message.textContent = message ; 

    to_do_message.style.justifyContent= "left" ;
    to_do_message.style.overflow = "auto";
    // date_changer.value

    let time_get = time_changer.value; 
    time_data.textContent = time_get ;

    // const className_1 = date_get.replace(/-/g, "_");
    drop_div.classList.add(`dropdown-content${date_get}${time_get.replace(":","-")}`);

   

    if(isKeyExists(date_get)){
        const date2Object = tasks.find(obj => date_get in obj);

        // If the "date2" object is found and it contains an array
        if (date2Object && Array.isArray(date2Object[date_get])) {
            // Push the new object into the array
            date2Object[date_get].push({ message: message, time: time_get, is_done: false });
        }

        let big_div_1 = document.querySelector(`.date-${date_get}`);

        
        three_dot.appendChild(dot_three);
        three_dot.appendChild(drop_div);
        // three_dot.innerHTML = "<span class='material-symbols-outlined'>more_horiz</span>";

        check_mark.appendChild(check_element) ; 

        task_to_add.appendChild(check_mark);
        task_to_add.appendChild(to_do_message);
        task_to_add.appendChild(time_icon);
        task_to_add.appendChild(time_data);
        task_to_add.appendChild(three_dot);

        // task_to_add.textContent = message ; 
        big_div_1.appendChild(task_to_add);
        date_changer.value="";
        time_changer.value="";

        

        // edit - delete  key


        // dot_three.addEventListener("click", (event)=>{
        //     // document.getElementById(`myDropdown${date_get}`).classList.toggle("show");
        //     event.target.parentElement.parentElement.parentElement.remove();

        // });

        // big_div_1.addEventListener("click", (event)=>{
        //     // event.target.remove();
        //     event.target.remove();
        // })


        // grabbing the big div 
        
        let child_node = Array.from(big_div_1.children);
        let qub = document.querySelector(`.icon-button-dropdown_in_action${date_get}-row span` );
        qub.innerHTML = "arrow_drop_down";
        child_node.forEach(ele =>{
            ele.classList.remove("hide_list");
        });
        


       

    }
    else{
        addTask(date_get,message,time_get,false) ; 
        let big_div = document.createElement("div");

        let date_tab = document.createElement("div");
        date_tab.classList.add(`date-${date_get}-row`);
        date_tab.style.display="flex";

        let drop_down = document.createElement("div");
        let date_of_row = document.createElement("div");
        let del_icon = document.createElement("div");

        drop_down.id = "ele1";
        date_of_row.id="ele2";
        del_icon.id = "ele5";

        
        
        date_tab.style.justifyContent="space-between";

        date_of_row.style.flex= "1";
        date_of_row.style.justifyContent = "left";
        del_icon.style.flexShrink="0";

        date_tab.classList.add("inside_note_content");

    
        // drop_down.innerHTML="<span class='material-symbols-outlined'>arrow_drop_down</span>";
        // del_icon.innerHTML = "<span class='material-symbols-outlined'>delete</span>";

        // Create the drop down button element
        let drop_down_button = document.createElement("button");

        // Add class to style the button
        drop_down_button.classList.add("icon-button");
        drop_down_button.classList.add(`icon-button-dropdown_in_action${date_get}-row`);

        
        // Add the icon HTML to the button
        drop_down_button.innerHTML = "<span class='material-symbols-outlined'>arrow_drop_down</span>";

        // Append the button to the drop_down div
        drop_down.appendChild(drop_down_button);
        drop_down.classList.add(`dropdown_in_action${date_get}-row`);
        // drop down done

        // Create the button element
        let del_button = document.createElement("button");

        // Add class to style the button
        del_button.classList.add("icon-button");
        del_button.classList.add(`del_in_action${date_get}-row`);

        // Add the icon HTML to the button
        del_button.innerHTML = "<span class='material-symbols-outlined'>delete</span>";

        // Append the button to the del_icon div
        del_icon.appendChild(del_button);
        // del button created 


        let heading_for_tab = document.createElement("h3");
        heading_for_tab.textContent = `${date_get}`;
        // heading_for_tab.style.cssText = "font-family: Bebas Neue, sans-serif;font-weight: 400;font-style: normal; border-bottom: 1px solid grey ;box-shadow: 5px 5px 10px rgba(50, 50, 90, 0.25); border-radius: 5px" ;

        // let drop_down = document.createElement("input");
        // drop_down.type="button";

        big_div.classList.add(`date-${date_get}`);
        // three_dot.classList.add(`date-${date_get}-delete`);
        date_of_row.appendChild(heading_for_tab);

        date_tab.appendChild(drop_down);
        date_tab.appendChild(date_of_row);
        date_tab.appendChild(del_icon);

        big_div.appendChild(date_tab) ; 
        list_data.appendChild(big_div) ; 
        three_dot.appendChild(dot_three);

        three_dot.appendChild(drop_div);
        // three_dot.innerHTML = "<span class='material-symbols-outlined'>more_horiz</span>";

        check_mark.appendChild(check_element) ; 

        task_to_add.appendChild(check_mark);
        task_to_add.appendChild(to_do_message);
        task_to_add.appendChild(time_icon);
        task_to_add.appendChild(time_data);
        task_to_add.appendChild(three_dot);

        // task_to_add.classList.add(`del-sub-task${date_get}-row`);

        // task_to_add.textContent = message ; 
        big_div.appendChild(task_to_add);
        date_changer.value="";
        time_changer.value="";






        

        // edit - delete  key

        // drop - down in action 


        // delete the day in action 

        let del_action = document.querySelector(`.del_in_action${date_get}-row`);
        del_action.addEventListener("click", (event)=> {
            del_action.parentElement.parentElement.parentElement.remove();

            // Find the index of the element with the specified date key
            let indexToRemove = tasks.findIndex(task => task.hasOwnProperty(date_get));

            // Check if the element exists in the array
            if (indexToRemove !== -1) {
                // Remove the element from the array
                tasks.splice(indexToRemove, 1);
            }


        // drop down in action 

        

        


        


            // checking if tasks array is empty
            let png = document.querySelector(".no-element-present");
            if (tasks.length === 0) {
                if (png) { // Check if the element exists
                    png.style.display="flex";
                    png.style.justifyContent = "center";
                } else {
                    console.warn("Element with id 'no-element-present' not found.");
                }
            } else {
                if (png) { // Check if the element exists
                    png.style.display = "none";
                } else {
                    console.warn("Element with id 'no-element-present' not found.");
                }
            }

            // checking if tasks array is empty 

            // hiding task and showing 
            // const drp = document.querySelector(`dropdown_in_action`);
            // drp.addEventListener("click", (event)=>{
            //     window.alert("d");
            // });


        });

        date_changer.value="";
        time_changer.value="";
                // delete the day in action


        // edit deleter button in action 

        // dot_three.addEventListener("click", (event)=>{
        //     // document.getElementById(`myDropdown${date_get}`).classList.toggle("show");
        //     event.target.parentElement.parentElement.parentElement.remove();

        // });
        let drop_down_action1 = document.querySelector(`.dropdown_in_action${date_get}-row button span`);
        // console.log(`.dropdown_in_action${date_get}-row`);
            drop_down_action1.addEventListener("click", (event)=>{
                console.log("hel");
                const prp = Array.from(event.target.parentElement.parentElement.parentElement.parentElement.children);
                let count = 0;
                event.stopPropagation();
                prp.forEach(ele =>{
                    
                    if(count!==0){
                        ele.classList.toggle("hide_list");
                        drop_down_action1.innerHTML = "arrow_drop_up";
                        console.log("hi");
                    }
                    else{
                        count++ ;
                        console.log("bie");
                    }
                    console.log("thanks");
                    if(count>0 && !ele.classList.contains("hide_list")){
                        drop_down_action1.innerHTML = "arrow_drop_down";
                    }
    
                });
                event.stopPropagation();
                
            });

        
    }

    // dot_three.addEventListener("click", (event)=>{
    //     // document.getElementById(`myDropdown${date_get}`).classList.toggle("show");
    //     event.target.parentElement.parentElement.parentElement.remove();

    // });
    
    // let drop_down_action1 = document.querySelector(`.dropdown_in_action${date_get}-row .icon-button`);
    // // console.log(`.dropdown_in_action${date_get}-row`);
    //     drop_down_action1.addEventListener("click", (event)=>{
    //         console.log("hel");
    //         const prp = Array.from(event.target.parentElement.parentElement.parentElement.parentElement.children);
    //         let count = 0;
            
    //         prp.forEach(ele =>{
    //             if(count!==0){
    //                 ele.classList.toggle("hide_list");
    //                 console.log("hi");
    //             }
    //             else{
    //                 count++ ;
    //                 console.log("bie");
    //             }
    //             console.log("thanks");

    //         });
    //         event.stopPropagation();
            
    //     });

    

    //drop down in action 
    dot_three.addEventListener("click", ()=>{
        const opt = document.querySelector(`.dropdown-content${date_get}${time_get.replace(":","-")}`);
        // opt.classList.remove("hide_list");
        opt.classList.toggle("show");
        // if(opt.classList.contains("show")){
        //     opt.classList.remove("show");
        // }
        // else {
        //     opt.classList.add("show")
        // }

        const edt = opt.firstChild;
        const delt = opt.lastChild ;
        edt.addEventListener("click",(event)=>{
            // window.alert("h");
            // event.target.parentElement.parentElement.parentElement.parentElement.remove();

            // event.stopPropagation();
            // const mes = document.querySelector("#ele2");
            
        
            drp = Array.from(event.target.parentElement.parentElement.parentElement.parentElement.children);
            // console.log(drp.length);
            // drp.forEach(ele => {
            //     if(ct!==0){
            //         console.log("j");
            //         // console.log(drp.length);
                    
            //     }else{
            //         ct++;
            //     }
            // });
            // Selecting the xop div
            event.stopPropagation();

            console.log(drp[1]);
            const xopDiv = document.querySelector('.xop');
            const xopDivinput = document.querySelector('.xop input');
            const xd = document.querySelector('.xop button span');


            xopDivinput.focus();
            xopDiv.classList.toggle('active');

            xd.addEventListener("click", ()=>{
                drp[1].innerHTML = xopDivinput.value;
                xopDiv.classList.remove('active');
                // opt.classList.add("hide_list");
                event.stopPropagation();


            });
            xopDivinput.value="";


            

            // edt.removeEventListener();
            

            


            // Adding click event listener
            
            // Toggle the 'active' class on click
            
            event.stopPropagation();


        });
        delt.addEventListener("click",(event)=>{
            // window.alert("i");
            // event.stopPropagation();
            event.target.parentElement.parentElement.parentElement.parentElement.remove();

            event.stopPropagation();

        });

        event.stopPropagation();

        
    });

    

    let png = document.querySelector(".no-element-present");
    if (tasks.length === 0) {
        if (png) { // Check if the element exists
            png.style.display = "inline";
        } else {
            console.warn("Element with id 'no-element-present' not found.");
        }
    } else {
        if (png) { // Check if the element exists
            png.style.display = "none";
        } else {
            console.warn("Element with id 'no-element-present' not found.");
        }
    }
    
});




// let del_key = Array.from(document.querySelectorAll(`.date-${date_get}-delete`));

//         del_key.forEach(del => 
//             big_div.addEventListener("click", (event)=>{
//                 // event.target.remove();
//                 if(del.className === `date-${date_get}-delete`)
//                     big_div.remove();
//             })
//         );


// let dot_menu = document.querySelector("#ele5");
// dot_menu.addEventListener("click", (event)=>{
//     event.target.remove();
// })


// Get the elements


// document.addEventListener("click", function(e){
//     const actionButton = e.target.closest("#action-button"); // Or any other selector.
  
//     if(actionButton){
//             // Do something with `target`.
//             //   window.alert("hi");
            
//         // const actionButton = document.querySelector('#action-button');
//         const popupBox = document.getElementById('popupBox');
//         const editOption = document.getElementById('editOption');
//         const deleteOption = document.getElementById('deleteOption');

//         // Function to toggle the visibility of the popup box
//         function togglePopup() {
//             popupBox.style.display = (popupBox.style.display === 'block') ? 'none' : 'block';
//         }

//         // Position the popup box near the button
//         function positionPopup() {
//             const rect = actionButton.getBoundingClientRect();
//             popupBox.style.top = `${rect.bottom + window.scrollY}px`;
//             popupBox.style.left = `${rect.left + window.scrollX}px`;
//         }

//         // Event listener for the button click
//         actionButton.addEventListener('click', () => {
//             positionPopup();
//             togglePopup();
//         });

//         // Event listeners for the popup options
//         editOption.addEventListener('click', () => {
//             alert('Edit option selected');
//             popupBox.style.display = 'none';
//         });

//         deleteOption.addEventListener('click', () => {
//             alert('Delete option selected');
//             popupBox.style.display = 'none';
//         });

//         // Close the popup if clicked outside
//         window.addEventListener('click', (event) => {
//             if (!popupBox.contains(event.target) && event.target !== actionButton) {
//                 popupBox.style.display = 'none';
//             }
//         });
//         }
// }); 

  


// const actionButton = document.querySelector('#action-button');
// const popupBox = document.getElementById('popupBox');
// const editOption = document.getElementById('editOption');
// const deleteOption = document.getElementById('deleteOption');

// // Function to toggle the visibility of the popup box
// function togglePopup() {
//     popupBox.style.display = (popupBox.style.display === 'block') ? 'none' : 'block';
// }

// // Position the popup box near the button
// function positionPopup() {
//     const rect = actionButton.getBoundingClientRect();
//     popupBox.style.top = `${rect.bottom + window.scrollY}px`;
//     popupBox.style.left = `${rect.left + window.scrollX}px`;
// }

// // Event listener for the button click
// actionButton.addEventListener('click', () => {
//     positionPopup();
//     togglePopup();
// });

// // Event listeners for the popup options
// editOption.addEventListener('click', () => {
//     alert('Edit option selected');
//     popupBox.style.display = 'none';
// });

// deleteOption.addEventListener('click', () => {
//     alert('Delete option selected');
//     popupBox.style.display = 'none';
// });

// // Close the popup if clicked outside
// window.addEventListener('click', (event) => {
//     if (!popupBox.contains(event.target) && event.target !== actionButton) {
//         popupBox.style.display = 'none';
//     }
// });


