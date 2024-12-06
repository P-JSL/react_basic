import { Component } from "react"

class Mynav extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log('shouldComponentUpdate 작동')
    
    if(newProps.data === this.props.data){
      return false;
    }
    return true;
  }
    render(){
      console.log('Mynav 실행')
        let lists = [];
        let data = this.props.data;
        
        data.forEach(item => {
            lists.push(
                <li key={item.id}>
                  <a href="/"
                    onClick={e => {
                      e.preventDefault();
                      this.props.onChangePage(item.id)
                    }}
                >{item.title}</a></li>
            )
        });

      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      )
    }
  }

  export default Mynav;