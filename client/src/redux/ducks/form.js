const FORM_DATA = 'formData';
const INITIAL_DATA = 'initialFormData';

export const formData = (postData) => ({
    type: FORM_DATA,
    postData
});

export const initialFormData = () => ({
    type: INITIAL_DATA,
    initialtData : {
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    }
})

const initialState = {
    postData : {
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case FORM_DATA: 
            const { postData } = action
            return{...state, postData}
        case INITIAL_DATA: 
            const { initialtData } = action
            return {...state, postData: initialtData}
        default:
            return state
    }
}