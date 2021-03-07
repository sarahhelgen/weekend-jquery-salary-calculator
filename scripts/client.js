$( document ).ready (onReady );

let employeeInfo = [];

function onReady(){
    console.log( 'in JQ');
    $( '#addSubmitButton ').on( 'click ', addEmployee );
}
//end onReady

function addEmployee(){
    console.log( 'in addEmployee ');
    //create object with user input
    let newEmployees = {
        firstName: $( '#firstNameIn').val(),
        lastName: $( '#lastNameIn' ).val(),
        id: $( '#idIn').val(),
        title: $( '#titleIn').val(),
        salary: $( '#salaryIn').val()
    }//end newEmployees
    //push the object into array
    employeeInfo.push ( newEmployees );
    //update DOM

    //empty text input
    $( '#firstNameIn').val('');
    $( '#lastNameIn' ).val( '');
    $( '#idIn').val( '');
    $( '#titleIn').val( '');
    $( '#salaryIn').val( '');

}//end addEmployee

