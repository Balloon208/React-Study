import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:"WEB", sub:"world wide web!"},
      welcome:{title:'Welcome', desc:"Hello React!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'HTML is for interactive'},
      ]
    }
  }

  getReadContent(){
    let i=0;

    while(i < this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
        return data;
      }
      i++;
    }
  }

  getContent(){
    let _title, _desc, _article;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id++;

        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );

        // push는 원본을 바꾸고, concat은 원본을 유지하여 복사본을 만든다.
        /*
          let _contents = Array.from(this.state.contents);
          contents.push({id:this.max_content_id, title:_title, desc:_desc});
          이랑 같다. 
        */

        let _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )

        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });

        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          let _contents = Array.from(this.state.contents);
          let i=0;
          while(i < _contents.length)
          {
            if(_contents[i].id === _id){
              _contents[i]={id:_id, title:_title, desc:_desc};
              break;
            }
            i++;
          }
          this.setState({
              contents:_contents,
              mode:'read'
            });

          console.log(_title, _desc);
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    return(
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('remove this?')){
              let _contents = Array.from(this.state.contents);
              let i=0;
              while(i < _contents.length)
              {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i++;
              }
              this.setState({
                contents:_contents,
                mode:'welcome'
              });
              alert('deleted!');
            }
          }
          else{
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
