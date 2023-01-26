import React, {Component} from 'react';

class TOC extends Component{
    render(){
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