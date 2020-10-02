import React from 'react';
import {Table, Button} from 'semantic-ui-react';

export default class Row extends React.Component{

    changeToEditMode = (event) => {
        this.props.changeToEditMode(event.target.name);
    }

    changeToRemoveMode = (event) => {
        this.props.changeToRemoveMode(event.target.name);
    }


    render(){
        return(
            <Table.Row>
                <Table.Cell>{this.props.item.productName}</Table.Cell>
                <Table.Cell>{this.props.item.quantity}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
                <Table.Cell>{this.props.item.productColor}</Table.Cell>
                <Table.Cell>{<img src={this.props.item.productImage} className="img-fluid" alt="" />}</Table.Cell>
                <Table.Cell><Button
                    name={this.props.item._id}
                    onClick={this.changeToRemoveMode}
                    className="btn-danger"
                >Remove</Button></Table.Cell>
                <Table.Cell><Button
                className="btn-success"
                name={this.props.item._id}
                onClick={this.changeToEditMode}
                >Edit</Button></Table.Cell>
            </Table.Row>
        )
    }
}