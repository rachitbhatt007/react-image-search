import React from 'react';
import unsplash from '../Apis/Unsplash'
import SearchBar from './SearchBar'
import Imagelist from './Imagelist'
class App extends React.Component{
	state={images:[]}
	onsearchSubmit=async (term)=>{
			const response=await unsplash.get('/search/photos',{
				params:{query:term},
				headers:{
					Authorization:'Client-ID pv9HXjFuh9pAudire_QwhYpoBhcn5g52DajVE4zZqgA' 
				}
			})
			this.setState({images:response.data.results})
	}



	render(){
	return (<div className="ui container" style={{marginTop:'10px'}}>
	<SearchBar onSubmit={this.onsearchSubmit}/>
	Found:{this.state.images.length} images
	<Imagelist images={this.state.images}/>
	</div>);
 }

};



export default App;