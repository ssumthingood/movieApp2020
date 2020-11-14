import React from 'react';

// function Detail(props){
//     console.log(props);
//     return <span>hello</span>;
// }

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }//props가 undefied인 경우 '/' 를 push하면서 home으로 돌아간다.

    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }//render가 componendDidMount보다 먼저 실행되기 때문에 props가 undefied인 경우 render메소드가 null을 리턴
}


export default Detail;