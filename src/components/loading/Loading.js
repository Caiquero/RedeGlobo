import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeloading } from '../../store/actions/loading.action'
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'


const styles = {
    progress:{
        marginRight: '15px'

    },

    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'

    },

    paper:{
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection:'row',
        outline: 'none' 

    }

}


export class Loading extends Component {
   
    handleClose =  () => {


   }
   
    render() {
        

        return (
        <div>
            
        </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
    changeloading: (value) => dispatch(changeloading(value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
