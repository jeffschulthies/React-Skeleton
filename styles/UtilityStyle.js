import { StyleSheet } from 'aphrodite/no-important'

const UtilityStyle = StyleSheet.create({
    u_fullWidth: {
    	width: '100%',
    	boxSizing: 'border-box'
    },
    u_maxFullWidth: {
    	maxWidth: '100%',
    	boxSizing: 'border-box'
    },
    u_pullRight: {
    	float: 'right'
    },
    u_pullLeft: {
    	float: 'left'
    },

    // Custom Styles
    u_maxHeight: {
    	height: '100%'
    },

    u_constrainXY: {
        overflowX: 'hidden',
        overflowY: 'hidden',
    },

    u_justifyRight: {
        textAlign: 'right',
    }
});

export default UtilityStyle
