// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'
//import { threadId } from 'worker_threads';

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.addEventListener('keydown', (event) => {
            if(event.ctrlKey){
                if(event.key == "z")
                   this.props.canUndo() && this.props.undoCallback();
                else if(event.key == "y")
                   this.props.canRedo() && this.props.redoCallback();

                this.setState({}); // trigger a re-render so that buttons can be updated (aka disable redo/undo buttons as needed) 
            }
        });
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar 
                goToHomeCallback={this.props.goToHomeCallback} 
                deleteLogoCallback={this.props.deleteLogoCallback}
                logo={this.props.logo}
                 />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}   
                        redoCallback={this.props.redoCallback}                                       
                        canUndo={this.props.canUndo}   
                        canRedo={this.props.canRedo}                      
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen