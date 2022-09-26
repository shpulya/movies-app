import React from "react"

import "./nav.scss"
import {Genres, selectOptions, TGenre} from "../../../models";

export default function Nav (props: any) {
    let activeTab: TGenre = 'All';

    const switchActiveTab = (genre:TGenre): any => {
        //props.handleGenreClick;
        activeTab = genre;
    }

    return (
       <nav className="nav">
           <div className="nav-left">
               {Genres.map(genre => <button className={`genre ${activeTab === genre ? 'active' : ''}`} onClick={switchActiveTab(genre)}>{genre}</button>)}
           </div>
           <div className="nav-right">
               <label className="select-label" htmlFor="orderSelect">sort by</label>
               <select className="select" name="" id="orderSelect">
                   {selectOptions.map(option => <option className="select-option" value={option.value}>{option.name}</option>)}
               </select>
           </div>
       </nav>
    )
}
