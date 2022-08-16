import { Box, Button, Card, CardProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid'

type CardFlexProps = {
    xs?: number
    md?: number
    lg?: number
    xl?: number
    height?: number
}

const ContentCard = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    height: 'calc(100% - 25px)',
    paddingLeft: '10px',
    backgroundColor: '#1E4670'
}))

const CardFlex = styled<React.FC<CardFlexProps & CardProps>>(
    ({ xs, md, lg, xl, height, ...rest }) => {
        const [staticHeader, setStaticHeader] = React.useState(false)
        const [openFooter, setOpenFooter] = React.useState(false)
        const [open, setOpen] = React.useState(false)
        const [maxWidth, setMaxWidth] =
            React.useState<DialogProps['maxWidth']>('lg')

        // const handleOpen = () => setOpen(true)
        const handleClose = () => setOpen(false)

        const modalForm = (
            <Dialog
                // sx={{ width: '500px' }}
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                maxWidth={maxWidth}
                fullWidth
            >
                <DialogContent>
                    <Card
                        {...rest}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: { height },
                            border: 0
                        }}
                    >
                        test Content
                    </Card>
                </DialogContent>
            </Dialog>
        )

        return (
            <Grid item xs={xs} md={md} lg={lg} xl={xl}>
                <Card
                    {...rest}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: { height },
                        border: 0
                    }}
                >
                    {modalForm}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: 0,
                            height: '100%',
                            position: 'inline-block'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#1E4675',
                                position: staticHeader
                                    ? 'static'
                                    : 'absolute',
                                border: 0,
                                width: '100%'
                            }}
                        >
                            Header{' '}
                            {staticHeader ? 'static' : 'absolute'}
                        </Box>

                        <Box
                            //
                            onMouseOver={() => setOpenFooter(true)}
                            onMouseLeave={() => setOpenFooter(false)}
                            sx={{
                                display: 'flex',
                                border: 0,
                                flex: 'auto'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    border: 0
                                }}
                            >
                                <Box>content top height 100%</Box>
                                <Box>
                                    <Button
                                        onClick={() => {
                                            // eslint-disable-next-line no-alert
                                            alert(
                                                `staticHeader val:${staticHeader}`
                                            )
                                            setStaticHeader(
                                                !staticHeader
                                            )
                                        }}
                                    >
                                        {staticHeader
                                            ? 'Static Header'
                                            : 'absolute header'}
                                    </Button>
                                </Box>
                                <Box>content bottom height 100%</Box>
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: '#1E4675',
                                    display: openFooter
                                        ? 'display'
                                        : 'none',
                                    border: 1,
                                    position: 'absolute',
                                    width: '100%',
                                    bottom: 0,
                                    zIndex: 10
                                }}
                            >
                                footer absolute show bottom 0
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        )
    }
)<CardFlexProps>(({ theme }) => ({
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(51,51,51,0.2)',
    position: 'relative',
    display: 'flex'
}))

CardFlex.defaultProps = {
    height: 240,
    xs: 12,
    md: 4,
    lg: 3,
    xl: 2
}

export default CardFlex
