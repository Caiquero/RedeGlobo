export default  {
    auth:{
        token:{},
        credentials: {
            username: '',
            password: '',

        },

       
       },

       register: {

        data:{
            
        name: '',
        email: '',
        password:'',

        },
        error: {},
        sucess: false,

       },

       loading: {
            
            open: false,
            msg: ''
        },

        notify:{
            open: false,
            class:'success',
            vertical: 'top',
            horizontal: 'center',
            time: 3000,
            msg:''

        }

    
}