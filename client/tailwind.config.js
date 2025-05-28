export default {
    theme: {
        extend: {
            animation: {
                'pulse-bg': 'pulse-bg 2s infinite',
            },
            keyframes: {
                'pulse-bg': {
                    '0%, 100%': { backgroundColor: 'rgba(73, 119, 236, 0.4)' },
                    '50%': { backgroundColor: 'rgba(73, 119, 236, 0.7)' },
                },
            },
        },
    },
};
