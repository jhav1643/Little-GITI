import React from "react";

class Card extends React.Component {
    render() {
        let {url, name, descreption, ownerLogin, forks_count,stars_Count, language } = this.props
        return (
            <div className='my-3' >
                <div className="card" style={{ justifyContent: 'space-around' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                         </span>

                    <div className="card-body">
                        <h5 className="card-title"><center>{name}</center></h5>

                        <p className="card-text d-flex justify-content-between" ><small className="text-muted">By {ownerLogin ? ownerLogin : "Unknown Owner"}</small>
                         <small>Language-{language}</small></p>
                        <p>
                        <small style={{marginLeft:'3px', marginRight: '63%'}}> Fork:{forks_count} </small>
                        <small> Stars:{stars_Count}</small>
                        </p>
                        <p>{descreption}</p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn">👉Let's Go</a>

                    </div>

                </div>


            </div>
        )
    }
}

export default Card