import React, { Component } from 'react';

class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {
            receipes: [
                {
                    id:0,
                    name:'Dinner',
                    category:10,
                    image:'assets/images/Dinner.jpg',
                    description: "Dinner Recipes"
                },
                {
                    id:1,
                    name:'Lunch',
                    category:15,
                    image:'assets/images/lunch.jpg',
                    description: "Lunch Recipes"
                },
                {
                    id:2,
                    name:'breakfast',
                    category:8,
                    image:'assets/images/breakfast.jpg',
                    description: "Breakfast Recipes"
                },
                {
                    id:3,
                    name:'Salad',
                    category:12,
                    image:'assets/images/Salad.jpg',
                    description: "Salad Recipes"
                },
                {
                    id:4,
                    name:'Desserts',
                    category:11,
                    image:'assets/images/desserts.jpg',
                    description: "Desserts Recipes"
                }
            ]
        };
    }
    render(){
        const directory = this.state.receipes.map(receipe => {
            return(
                <div key={receipe.id} className="col">
                    <img src={receipe.image} alt={receipe.name}/>
                    <h2>{receipe.name}</h2>
                    <p>{receipe.description}</p>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;