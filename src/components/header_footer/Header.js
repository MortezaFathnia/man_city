import React, { Component } from 'react'

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { CityLogo } from '../ui/icons';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: '#98c5e9',
                        bozShadow: 'none',
                        padding: '10px 0',
                        borderBottom: '2px solid #00285e'
                    }}
                >
                    <Toolbar style={{ display: 'flex' }}>
                        <div
                            style={{ flexGrow: 1 }}
                        >
                            <div
                                className="header_logo">
                                <CityLogo
                                    link="/"
                                    width="70px"
                                    height="70px"
                                />
                            </div>
                        </div>

                        <Link to="/the_team">
                            <Button color="inherit">
                                The team
                            </Button>
                        </Link>

                        <Link to="/the_matches">
                            <Button color="inherit">
                                The Matches
                            </Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;
