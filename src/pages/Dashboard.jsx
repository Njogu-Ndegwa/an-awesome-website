import React, { Component } from 'react';
import BreakPoint, {BreakpointProvider} from 'react-socks';
import {ToastContainer} from 'react-toastify';

import Navbar from '../common/Navbar'

import mockApi from '../mockApi';

class Dashboard extends Component {
    state = {...mockApi}

    render() {
        const { frameworks, softSkills, stacks, stories, technicalSkills, userInfo 
        } = this.state;

        return (
            <BreakpointProvider>
              <ToastContainer />
              <Navbar />
            </BreakpointProvider>
        )
    }
}

export default Dashboard
