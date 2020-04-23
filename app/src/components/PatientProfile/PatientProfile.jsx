import React from 'react'
import { Grid, Card, CardContent, Avatar, Typography, Chip, List, ListItem, ListItemIcon, ListItemText, CardHeader, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Phone, Mail } from '@material-ui/icons'
import mavatar from '../../assets/mavatar.png';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },

  }));

function PatientProfile(props) {
    const {user, allergies, conditions} = props;

    const classes = useStyles();
    dayjs.extend(relativeTime)
    return (
        <div>
            <Grid container spacing={3}>
                   <Grid item md={4} sm={12}>
                        <Card>
                            <CardContent>
                                <Grid container justify="center" alignItems="center" direction="column">
                                    <Avatar src={mavatar} className={classes.large}></Avatar>
                                    <Typography variant="h4" align="center">{user.name} </Typography>
                                    <Chip size="small" label="lhk4j346b34kj2bkjbk3j5b234jkb" />
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon><Phone/></ListItemIcon>
                                            <ListItemText primary={user.phone} />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon><Mail/></ListItemIcon>
                                            <ListItemText primary={user.email} />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </CardContent>
                        </Card>
                   </Grid>
                   <Grid item md={8} sm={12}>
                       <Grid container spacing={3}>
                           <Grid item sm={12}>
                               <Card >
                                    <CardContent>
                                        <Grid container spacing={4}>
                                            <Grid item sm={4}>
                                                    <Typography color="primary" variant="body2">Age</Typography>
                                                    <Typography variant="h5">{
                                                        
                                                        dayjs(user.dateOfBirth).fromNow(true)
                                                        } </Typography>
                                            </Grid>
                                            <Grid item sm={4}>
                                                    <Typography color="primary" variant="body2">Gender</Typography>
                                                    <Typography variant="h5">{user.gender} </Typography>
                                            </Grid>
                                            <Grid item sm={4}>
                                                    <Typography color="primary" variant="body2">Blood Group</Typography>
                                                    <Typography variant="h5">{user.bloodType} </Typography>
                                            </Grid>
                                            
                                        </Grid>
                                        
                                    </CardContent>
                                </Card>
                           </Grid>
                           <Grid item md={6} sm={12}>
                                <Card>
                                    <CardHeader title="Allergies"></CardHeader>
                                    <Divider variant="middle" />
                                    <List>
                                        {allergies.map((value, index) => (
                                            <ListItem button key={index}>
                                                <ListItemText primary={value.title}></ListItemText>
                                            </ListItem>
                                        ))}
                                        
                                    </List>
                                </Card>
                           </Grid>

                           <Grid item md={6} sm={12} xs={12}>
                                <Card>
                                    <CardHeader title="Diseases"></CardHeader>
                                    <Divider variant="middle" />
                                    <List>
                                        {conditions.map((value, index) => (
                                            <ListItem button key={index}>
                                                <ListItemText primary={value.title}></ListItemText>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Card>
                           </Grid>
                       </Grid>
                       
                   </Grid>
                   
               </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userData.user,
    allergies: state.userData.allergies,
    conditions: state.userData.conditions,
})

export default connect(mapStateToProps)(PatientProfile);