import React, { Component } from 'react';

import ItemComponent from '../item-component/item-component';

class ListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            character_list: [],
            api_info:{}
        }
    }

 
    async getCharacters (){
        let response = await (await fetch('https://rickandmortyapi.com/api/character/')).json()
        
        this.setState({
            character_list: response.results,
            api_info : response.info
        })
        //return response
        //console.log('this state:', this.state)
    }


    render() {

        this.getCharacters()
        //console.log(characters);

        return( 
            <ul>
            {
                this.state.character_list.map(c=>
                    {
                        return <li>
                            
                            <img src={c.image} alt={c.name}/>
                            <p>{c.name}</p>
                            </li>
                    })
            }
            </ul>
            //<ItemComponent character={this.state.character_list[0]}></ItemComponent>

        )

    }
}

export default ListComponent;