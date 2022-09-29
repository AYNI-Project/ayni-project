import { styled }   from '@mui/system';
import { Typography, Box } from '@mui/material';

export const FooterTitle = styled(Typography)(()  => ({
        textTransform: 'uppercase',
        marginBottom: '1em'
}));

export const FaQtitle = styled(Typography)(()  => ({
        fontSize:"14px",
        fontWeight:"bolder",
        margin:"10px",
        textAlign:"center",
        color:"#5BBCC0",
        fontFamily: "Poppins",
}));

export const FaQparraf = styled(Typography)(()  => ({
        fontSize:"14px",
        margin:"10px",
        textAlign:"justify",
        fontFamily: "Poppins",
}));

export const FaQBox = styled(Box)(()  => ({
        width:"80%"
}));