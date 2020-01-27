import React from 'react';
import { Button } from '../components/Popover'
import Popover from 'react-simple-popover';
import './ComponentsStyles.css'
export default class PopoverDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
    }
   
    handleClick(e) {
        console.log("clicked");
        
      this.setState({open: !this.state.open});
    }
   
    handleClose(e) {
      this.setState({open: false});
    }
    render() {
        return (
          <div>
            <Button
              href="javascript:void(0)"
              className="button"
              ref="target"
              onClick={this.handleClick.bind(this)}>Bottom</Button>
              
            <Popover
              placement={this.props.position}
              container={this}
              target={this.refs.target}
              show={this.state.open}
              onHide={this.handleClose.bind(this)} >
              <p>This is popover</p>
            </Popover>
          </div>
        );
      }
    }