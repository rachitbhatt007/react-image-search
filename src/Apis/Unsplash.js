import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
			Authorization:'Client-ID pv9HXjFuh9pAudire_QwhYpoBhcn5g52DajVE4zZqgA' 
			}
})


