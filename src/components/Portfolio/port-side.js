import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Portside=(props)=>{
    const Portlist= props.data.map(items =>{
return(
    <div>
        <div key={items.id} className="sidebar_thumbnail">
            <div className="sidebar_img">
                <img src={items.thumb_image_url}/>
            </div>
            <div className="textside">
        <div className="title">{items.name}</div>
        <div className="actions">
        <a className="action" onClick={() => props.handleedit(items)}>
        <FontAwesomeIcon icon="pen-fancy"/>
        </a>
        <a className="action"onClick={() => props.Deletebutton(items)}> 
      <FontAwesomeIcon icon="bomb"/>
        </a>
        </div>
        </div>
        </div>
    </div>
)
    })
return <div className="sidebar-list">
    {Portlist}
</div>;
}
export default Portside;