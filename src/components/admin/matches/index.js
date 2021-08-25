import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CircularProgress, Tab } from '@material-ui/core';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reversedArray } from '../../ui/misc';
import { Link } from 'react-router-dom';

class AdminMatches extends Component {

    state = {
        isLoading: true,
        matches: []
    }

    componentDidMount() {
        firebaseMatches.once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);
            this.setState({
                isLoading: false,
                matches: reversedArray(matches)
            })
        })
    }

    render() {
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Match</TableCell>
                                    <TableCell>Result</TableCell>
                                    <TableCell>Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.matches ?
                                        this.state.matches.map((match, i) => (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    {match.date}
                                                </TableCell>
                                                <TableCell>
                                                    <Link to={`/admin_matches/edit_match/${match.id}`}>
                                                        {match.away}<strong>-</strong>{match.local}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    {match.resultAway}<strong>-</strong> {match.resultLocal}
                                                </TableCell>
                                                <TableCell>
                                                    {match.final == 'Yes' ?
                                                        <span className="matches_tag_red">Final</span>
                                                        : <span className="matches_tag_green">Not played yet</span>
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        : null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="admin_progress">
                        {this.state.isLoading ?
                            <CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
                            :
                            ''}
                    </div>
                </div>
            </AdminLayout>
        )
    }
}

export default AdminMatches;
