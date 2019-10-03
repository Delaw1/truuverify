import React, { Component } from 'react'

class CustomerList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customers: [
                 {
                     name: 'Oluwakemisola Jayeoba',
                     company_
                 }
             ]
        }
    }
    
    render() {
        return (
            <div className="customer">
                <h2>All Customer Records</h2>
                <table className="table table-borderless">
                    <thead className="thead-light">
                        <tr>
                            <td >Name</td>
                            <td >Company Email</td>
                            <td >Latest Update</td>
                            <td >Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Signature</span></button></td>
                            <td><button type="button" className="btn btn-sm treat"><span>Not Treated</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>BVN</span></button></td>
                            <td><button type="button" className="btn btn-sm assigned"><span>Assigned</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Address</span></button></td>
                            <td><button type="button" className="btn btn-sm defect"><span>Defect</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Address</span></button></td>
                            <td><button type="button" className="btn btn-sm alat"><span>Treated Alat Lite</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Address</span></button></td>
                            <td><button type="button" className="btn btn-sm await"><span>Awaiting Approval</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Address</span></button></td>
                            <td><button type="button" className="btn btn-sm await"><span>Awaiting Approval</span></button></td>
                        </tr>
                        <tr>
                            <td>Oluwakemisola Jayeoba</td>
                            <td>oluwakemisolajayeoba@truudata.com</td>
                            <td><button type="button" className="btn btn-sm update"><span>Address</span></button></td>
                            <td><button type="button" className="btn btn-sm await"><span>Awaiting Approval</span></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList
