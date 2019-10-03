import React, { Component } from 'react'

class SideBar extends Component {
    render() {
        return (
                <div className="card sidebar-card">
                    <div className="card-body">
                        <div className="alert alert-light sidebar-con active" role="alert">
                            <strong>All Customers Records</strong>
                        </div>
                        <div className="alert alert-light sidebar-con" role="alert">
                            <strong>Validated Records</strong><br/>
                            Records that has been validated by vendors
                        </div>
                        <div className="alert alert-light sidebar-con" role="alert">
                            <strong>Failed Records</strong><br/>
                            Users information that do not pass the validity test
                        </div>
                        <div className="alert alert-light sidebar-con" role="alert">
                            <strong>Vendors</strong><br/>
                            List of field agents
                        </div>
                        <div className="sidebar-line"></div>
                        <div className="alert alert-light sidebar-con" role="alert">
                            <strong>Create User</strong><br/>
                        </div>
                        <div className="alert alert-light sidebar-con" role="alert">
                            <strong>Reports</strong><br/>
                        </div>
                    </div>
                        
                </div>
        )
    }
}

export default SideBar
