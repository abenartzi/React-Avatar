import React from 'react'



class Avatar extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h1>Hello Avatar {this.props.name}</h1>
                <img src={this.props.imgUrl} style={{width:this.props.width + "px",height:this.props.height + "px", borderRadius:this.props.shape + "%"}}  alt="#"/>


            </div>
        )
    }
}

export default Avatar;