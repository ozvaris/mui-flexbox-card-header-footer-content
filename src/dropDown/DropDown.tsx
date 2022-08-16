import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Box, Card, MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { debounce } from '@mui/material/utils'
import { FC, useEffect, useRef, useState } from 'react'
import FlexBox from '../FlexBox'

// styled components
// also used in the GrocerySearchBox component
export const SearchOutlinedIcon = styled(SearchOutlined)(
    ({ theme }) => ({
        color: theme.palette.grey[600],
        marginRight: 6
    })
)

// also used in the GrocerySearchBox component
export const SearchResultCard = styled(Card)(({ theme }) => ({
    position: 'absolute',
    top: '100%',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    width: '100%',
    zIndex: 99
}))

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
    borderTopRightRadius: 300,
    borderBottomRightRadius: 300,
    whiteSpace: 'pre',
    borderLeft: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down('xs')]: {
        display: 'none'
    }
}))

const SearchBox: FC = () => {
    const [category, setCategory] = useState('All Categories')
    const [resultList, setResultList] = useState<string[]>([])
    const parentRef = useRef()

    const handleCategoryChange = (cat: any) => () => {
        setCategory(cat)
    }

    const search = debounce(e => {
        const value = e.target?.value

        if (!value) {
            setResultList([])
        } else {
            setResultList(dummySearchResult)
        }
    }, 200)

    // const hanldeSearch = useCallback((event) => {
    //   event.persist()
    //   search(event)
    // }, [])

    const handleDocumentClick = () => {
        setResultList([])
    }

    useEffect(() => {
        window.addEventListener('click', handleDocumentClick)
        return () => {
            window.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    return (
        <Box
            position='relative'
            flex='1 1 0'
            maxWidth='300px'
            mx='auto'
            {...{ ref: parentRef }}
        >
            <TextField
                variant='outlined'
                placeholder='My Profile'
                fullWidth
                // onChange={hanldeSearch}
                InputProps={{
                    sx: {
                        height: 44,
                        borderRadius: 300,
                        paddingRight: 0,
                        color: 'grey.700',
                        overflow: 'hidden'
                    }
                    // endAdornment: <SearchOutlinedIcon fontSize="small"  style={{marginRight:25}}/>,
                    // startAdornment: <SearchOutlinedIcon fontSize="small" />,
                }}
            />

            {!!resultList.length && (
                <SearchResultCard elevation={2}>
                    {resultList.map(item => (
                        <MenuItem key={item}>{item}</MenuItem>
                    ))}
                </SearchResultCard>
            )}
        </Box>
    )
}

const categories = [
    'All Categories',
    'Car',
    'Clothes',
    'Electronics',
    'Laptop',
    'Desktop',
    'Camera',
    'Toys'
]

const dummySearchResult = [
    'Macbook Air 13',
    'Asus K555LA',
    'Acer Aspire X453',
    'iPad Mini 3'
]

export default SearchBox
