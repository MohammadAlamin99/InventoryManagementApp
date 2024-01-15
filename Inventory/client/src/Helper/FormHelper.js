import cogoToast from 'cogo-toast';

class FormHelper {

    IsEmpty(value){
        return value.length ===0;
    }

    errorTost(msg){
        cogoToast.error(msg, {position:"bottom-center"})
    }
    successTost(msg){
        cogoToast.success(msg, {position:"bottom-center"})
    }
        
}

export const {IsEmpty,IsEmail,IsMobile,errorTost,successTost,getBase64}= new FormHelper();