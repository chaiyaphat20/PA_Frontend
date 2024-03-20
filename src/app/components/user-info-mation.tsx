'use client'
import { Box, Button, Card, CardActions, CardContent, TextField, Typography, styled } from '@mui/material'
import React from 'react'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ResponsiveCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    minWidth: 500,
    width: 600,
  },
  [theme.breakpoints.up('md')]: {
    minWidth: 800,
    width: 1200,
  },
}));

export default function UserInfoMation() {
  return (
    <ResponsiveCard className='relative'>
      <div className='bg-pink-100 w-full h-60'>
      </div>
      <div className='rounded-full w-40 h-40 bg-slate-400 absolute top-[160px] left-16'></div>
      <div className='flex flex-row justify-end mt-4 p-5'>
      <div className='h-[350px]'>
        <div className='flex flex-col w-96'>
        <TextField  label="USERNAME" variant="outlined" className='my-2'/>
        <TextField  label="FIRST NAME" variant="outlined"  className='my-2'/>
        <TextField  label="POSITION" variant="outlined"  className='my-2'/>
        <TextField  label="TELEPHONE NUMBER" variant="outlined"  className='my-2'/>
        </div>
      </div>
      <div className='h-[350px] ml-4'>
        <div className='flex flex-col w-96'>
        <TextField  label="NICK NAME" variant="outlined" className='my-2'/>
        <TextField  label="LAST NAME" variant="outlined"  className='my-2'/>
        <TextField  label="NATIONALITY" variant="outlined"  className='my-2'/>
        <TextField  label="START DATE" variant="outlined"  className='my-2'/>
        </div>
      </div>
      
      </div>
    </ResponsiveCard>
  )
}
