import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>Navbar


        <AppBar>
            <Toolbar>
                <Typography>
                    Employee
                </Typography>
                <Button variant='contained' color='error'><Link style={{textDecoration:"none"}}to={'/'}>View Data</Link></Button>&nbsp;
                <Button variant='contained' color='success'><Link style={{textDecoration:"none"}} to={'/add'}>Add Data</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
