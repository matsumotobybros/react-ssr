import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id} style={
        {
          padding: 10,
          margin: 10,
          color: 'rgb(255, 96, 96)',
          borderColor: 'rgb(255, 96, 96)',
          border:'1px solid',
        }
      }>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul style={{display:'flex'}}>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
