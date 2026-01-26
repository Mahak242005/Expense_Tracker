export const validateExpense = (formData)=>{
    
    const errors ={};

    //check if description exists and is not empty
    if( !formData.description || formData.description.trim() === '' ){ //trim :- removes the extra spaces from string
        errors.description = 'Description is required';
    }

    //check is amount exist and is greater than 0
    if( !formData.amount || parseFloat(formData.amount) <=0){
        errors.amount = 'Amount must be greater than zero';
    }

    //return validation result
    return {
        //Object.keys(errors) :- gets an array of all the keys in the error object
        isValid : Object.keys(errors).length === 0,   //checks are there zero errors 
        errors //holds vaidation msg
    };

}