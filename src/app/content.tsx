'use client'
import React from 'react'
import UserInfoMation from './components/user-info-mation'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Content() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h1>USER INFORMATION</h1>
        <UserInfoMation />
      </LocalizationProvider>
    </div>
  )
}
