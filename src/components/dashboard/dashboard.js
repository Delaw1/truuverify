import React, { Component } from 'react'
import SideBar from './SideBar'
import CustomerList from './CustomerList'

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fliud dashboard">
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar/>
                    </div>
                    <div className="col-sm-7">
                        <CustomerList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
