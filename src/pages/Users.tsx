import React from 'react';
import Layout from '../layout/layout';



const Users = () => {
    return ( 
        <Layout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h2>Section title</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                    </tr>
                
                </tbody>
                </table>
            </div>
            </main>
        </Layout>
    )
}

export default Users;
