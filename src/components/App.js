import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
            Authorization: 'Client-ID Uieq933-Mc81rfaW5VBiwT0MTevH1g7Dt7E7Jd9Wqi4'
        }    
        });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}


export default App;