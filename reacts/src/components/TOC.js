import React, {Component} from 'react';

class TOC extends Component{

    // 튜닝을 위한 shouldComponentUpdate
    shouldComponentUpdate(newProps, newState){
      console.log('===>TOC render shouldComponentUpdate'
      ,newProps.data
      ,this.props.data
      );
      if(this.props.data===newProps.data){
        return false;
      }
      return true;
    }
    // 1. render 이전에 shouldComponentUpdate가 호출된다
    // 2. return 값이 true라면 render가 호출, false라면 render가 호출X
    // 3. shouldComponentUpdate는 새롭게 바뀐 값과 이전의 값에 접근 가능.

    // 단, push 를 이용하면 원본이 훼손되므로 이용이 불가.

    render(){
      console.log("TOC is rendered");
      let data = this.props.data;
      let lists = [];
      let i = 0;
      while(i < data.length)
      {
        lists.push(

        <li key={data[i].id}>
          <a
          href={"/content/"+data[i].id}
          // data-id={data[i].id} 로도 가능
          onClick={function(id, e){
            e.preventDefault();
            this.props.onChangePage(id);
            // data-id 이용시 this.props.onChangePage(e.target.dataset.id);
          }.bind(this, data[i].id)}
          >{data[i].title}</a>
        </li>);

        i++;
      }
      return(
        <nav>
            <ul>
              {lists}
            </ul>
        </nav>
      );
    }
  }

export default TOC;