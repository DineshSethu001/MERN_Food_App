import './Home.css';
import Header from '../Header/Header';
import { useState } from 'react';

import ExploreMenu from '../ExploreMenu/ExploreMenu';

const Home = () => {
    const [category, setCategory] = useState("All")

    return(
        <div className="HomeSection">
            <Header />
            <ExploreMenu category = {category} setCategory = {setCategory}/>
        </div>
    )

}

export default Home;