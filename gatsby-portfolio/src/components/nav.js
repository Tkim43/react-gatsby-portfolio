import React, {Component} from 'react'
import './nav.css'

class Nav extends Component {
    state = {
        section:[
           {"name": "about"},
           {"name": "work"},
           {"name": "skills"},
           {"name": "hobbies"},
           {"name": "contact"},
        ]
    }
   
    render(){
        let section = (
            <ul id="MainNav">
                {this.state.section.map((section, index ) => {
                    return <li href="#" className="effect-1" key={index}><a>{section.name}</a></li>
                })}
            </ul>
        );

        return(
            <div>
            {section}
            <div><i className="far fa-bars"></i></div>
            </div>
        );
    }
}

export default Nav;