import React, {Component} from 'react';
import Search from './Search';
import NavBar from './Navigation';
import MovieForm from './MovieForm';
import CommonHeader from '../header/CommonHeader';

class AddMovieForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            group: ''
        };
    }
    componentDidMount(){
        this.setState({
            group: 'Movies'
        })
    }
    render(){
        console.log(this.props);
        return (
            <div id="FullMovieForm"> 
                <CommonHeader />
                <Search group={this.state.group} placeholder='Search for Movies' />
                <NavBar />
                <MovieForm /> 
            </div>
        );
    }
}
  
export default AddMovieForm;