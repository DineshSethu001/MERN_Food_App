
import './ExploreMenu.css'
import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id="explore-menu" >
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a dechtable or techtable
                array of dishers our vision is too</p>


            <div className="explore-menu-list">
                {menu_list.map((item: {
                    menu_name: string; menu_image: string | undefined;
                }, index: React.Key | null | undefined) => {
                    return (
                        <div onClick = {() => setCategory((prev: string) => prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu;