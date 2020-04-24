import React, {Component} from 'react';
import avatar from './../../Common/uploads/avatar.png'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const IMG_PRE = 'http://localhost:1688/uploads/';

class LKAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_flag: 'one'
        }
    }

    render() {
        const {userData} = this.props;
        const {selected_flag} = this.state;
        return (
            <div className="aside">
                <div className="profile">
                    <div className="avatar img-circle">
                        <img src={userData.icon_url ? IMG_PRE + userData.icon_url : avatar}/>
                    </div>
                    <h4>{userData.real_name}</h4>
                </div>
                <div className="navs">
                    <ul className="list-unstyled">
                        <li>
                            <Link onClick={()=>this._dealWithClick('one')} to="/" className={selected_flag === 'one' ? 'active' : ''}>
                                <i className="fa fa-area-chart"></i>
                                数据分析
                            </Link>
                        </li>
                        <li>
                            <Link to="/user"  onClick={()=>this._dealWithClick('two')}  className={selected_flag === 'two' ? 'active' : ''}>
                                <i className="fa fa-users"></i>
                                用户中心
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;" onClick={()=>this._dealWithClick('three')}  className={selected_flag === 'three' ? 'active' : ''}>
                                <i className="fa fa-object-group"></i>
                                课程管理
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/course/add">
                                        课程添加
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/list">
                                        课程列表
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/category">
                                        课程分类
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/topic">
                                        课程专题
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/"  onClick={()=>this._dealWithClick('four')}  className={selected_flag === 'four' ? 'active' : ''}>
                                <i className="fa fa-bars"></i>
                                运营中心
                            </Link>
                        </li>
                        <li>
                            <Link to="/sowing/list"  onClick={()=>this._dealWithClick('five')} className={selected_flag === 'five' ? 'active' : ''}>
                                <i className="fa fa-calculator"></i>
                                轮播图中心
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;"  onClick={()=>this._dealWithClick('six')}  className={selected_flag === 'six' ? 'active' : ''}>
                                <i className="fa fa-cog"></i>
                                设置中心
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li><a href="javascript:;">站点设置</a></li>
                                <li><a href="javascript:;">用户设置</a></li>
                                <li><a href="javascript:;">角色管理</a></li>
                                <li><a href="javascript:;">课程设置</a></li>
                                <li><a href="javascript:;">运营设置</a></li>
                                <li><a href="javascript:;">财务设置</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    _dealWithClick(flag){
        this.setState({
            selected_flag: flag
        })
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
};

export default connect(mapStateToProps, null)(LKAside);
