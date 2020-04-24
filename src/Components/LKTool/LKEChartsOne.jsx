import React, {Component} from 'react';
import echarts from 'echarts'
import {connect} from "react-redux";

class LKEChartsOne extends Component {
    render() {

        return (
            <div id="main1" style={{height:400}} />
        );
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        let order_counter = nextProps.order_counter;
        if(order_counter !== undefined){
            let main1 = echarts.init(document.getElementById('main1'));
            let option = {
                title: {
                    text: '订单统计'
                },
                tooltip: {},
                legend: {
                    data:['购买数量']
                },
                xAxis: {
                    data: Object.keys(order_counter)
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: Object.values(order_counter)
                }]
            };
            main1.setOption(option);
        }
    }

    componentDidMount() {
       /* let main1 = echarts.init(document.getElementById('main1'));
        let option = {
            title: {
                text: '订单统计'
            },
            tooltip: {},
            legend: {
                data:['购买数量']
            },
            xAxis: {
                data: ["Web全栈","JavaEE","Python","React实战","Vue实战","Node实战"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [45, 10, 26, 29, 23, 33]
            }]
        };
        main1.setOption(option);*/
    }
}

const mapStateToProps = (state)=>{
    return {
        order_counter: state.homeData.order_counter
    }
};

export default connect(mapStateToProps, null)(LKEChartsOne);