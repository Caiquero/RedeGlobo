import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { changeNotify } from '../../store/actions/notify.action';

const styles = {
    message: {
        display: 'flex',
        alignitems: 'center',
    },

    sucess: {
        backgroundColor: ''

    },

    error: {
        backgroundColor: '#2196f3'

    }


}

export class Notify extends Component {
    handleClose = () => {
        this.props.changeNotify({
            open: false

        })
    }
    
    render() {
        const { classes } =  this.props;
        const messageClasses = classNames({
            [classes[this.props.notify.class]] : this.props.notify.class 

        })

        return (
            <Snackbar 
            open={this.props.notify.open}
            anchorOrigin={{
                vertical: this.props.notify.vertical,
                horizontal: this.props.notify.horizontal

            }}
            autoHideDuration={this.props.notify.time}
            onclose={this.handleClose}>
                <SnackbarContent
                    className={messageClasses}
                 message={
                       <span className={classes.message}>{this.props.notify.msg}</span>
                    }
                />

            </Snackbar>
        )
    }
}

const mapStateToProps = (state) => ({
    notify: state.notifyReducer
})

const mapDispatchToProps = dispatch => ({
changeNotify: (value) => dispatch(changeNotify(value))

})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notify))
