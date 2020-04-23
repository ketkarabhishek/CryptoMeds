import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import RecordItem from 'components/RecordItem'

function LatestReports(props) {
    const {reports} = props
    return (
        <div>
            <Grid container spacing={3}>
                {reports.map((value, index) => (
                    <Grid item md={3} key={index}>
                        <RecordItem data={value}></RecordItem>
                    </Grid>
                ))}
                
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    reports: state.userData.labReports
})
export default connect(mapStateToProps)(LatestReports)
