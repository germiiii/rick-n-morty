import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({myFavorites}) {
return (
    <div>
        {myFavorites?.map(({name,status,species,image,id}) => (
            <Card key={id} name={name} id={id} />
        )) }
    </div>
)
}

function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}
export default connect (mapStateToProps)(Favorites)