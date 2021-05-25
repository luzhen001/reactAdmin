import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createDeleteUserInfoAction} from '../../redux/creators/login_action'
class Admin extends Component {
    handleLogout = () => {
        this.props.deleteUserInfo();
    }
    render() {
        const {user,token,isLogin}  = this.props.userInfo;
        if(!isLogin){
            return <Redirect to="/login" />
        }else{
            return (
                <div>
                    Admin,从store中获取了数据啊{user.name}，Token：{token}
                    <button type="button" onClick={this.handleLogout}>退出</button>
                </div>
            )
        }
    }
}
export default  connect(
    state=>({userInfo:state.userInfo}),
    {
        deleteUserInfo:createDeleteUserInfoAction
    }
)(Admin)
