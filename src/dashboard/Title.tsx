import Typography from '@mui/material/Typography'
import * as React from 'react'

interface TitleProps {
    children?: React.ReactNode
}

export default function Title(props: TitleProps) {
    const { children } = props
    return (
        <Typography
            component='h2'
            variant='h6'
            color='primary'
            gutterBottom
        >
            {children}
        </Typography>
    )
}
