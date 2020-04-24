import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {getCategoryDataAction} from "./../../Store/actionCreators";

class CourseCategory extends Component {
    render() {
        const {categoryData} = this.props;
        return (
            <div className="container-fluid">
                <div className="body course-category">
                    <ol className="breadcrumb">
                        <li><Link to="/course/course">课程管理</Link></li>
                        <li className="active">课程分类</li>
                    </ol>
                    <div className="page-title">
                        <Link to="/course/category_add" className="btn btn-danger btn-sm pull-right">添加分类</Link>
                    </div>
                    <div className="panel panel-default">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th width="18%">分类名称</th>
                                <th>课程数量</th>
                                <th>是否显示</th>
                                <th>排序</th>
                                <th width="10%">操作</th>
                            </tr>
                            </thead>
                              {categoryData.map((category, index)=>{
                                  return (
                                      <tbody  key={index}>
                                          <tr className="active">
                                              <td className="text-left">{category.main_title}</td>
                                              <td>{category.main_total_count}</td>
                                              <td>{category.main_is_show === '1' ? '是' : '否'}</td>
                                              <td>{category.main_sort}</td>
                                              <td>
                                                  <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                                              </td>
                                          </tr>
                                          {
                                              category.sub_course.map((sub, index)=>{
                                                  return (
                                                      <tr key={index}>
                                                          <td className="text-left">&nbsp;&nbsp;├ {sub.sub_title}</td>
                                                          <td>{sub.sub_total_count}</td>
                                                          <td>{sub.sub_is_show === '1' ? '是' : '否'}</td>
                                                          <td>{category.sub_sort}</td>
                                                          <td>
                                                              <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                                                          </td>
                                                      </tr>
                                                  )
                                              })
                                          }
                                      </tbody>
                                  )
                              })}
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.reqCategoryData();
    }
}

const mapStateToProps = (state)=>{
    return {
        categoryData: state.categoryData
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        reqCategoryData(){
            const action = getCategoryDataAction();
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCategory);