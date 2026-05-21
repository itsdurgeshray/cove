document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const html = document.documentElement;
    
    // Palette definitions for the UI display
    const palettes = {
        'palette-01': {
            primary: '#009393',
            accent: '#EADCB6',
            neutral: '#FCF9F5',
            dark: '#2E4143'
        },
        'palette-02': {
            primary: '#DE9079',
            accent: '#C6A28B',
            neutral: '#F2F7F7',
            dark: '#28393B'
        },
        'palette-03': {
            primary: '#C6A28B',
            accent: '#D9C3A2',
            neutral: '#F2F7F7',
            dark: '#28393B'
        },
        'palette-04': {
            primary: '#05828E',
            accent: '#DE9079',
            neutral: '#F9F9F9',
            dark: '#113236'
        },
        'palette-05': {
            primary: '#156565',
            accent: '#CB7B66',
            neutral: '#F3EBE3',
            dark: '#483A31'
        }
    };

    // DOM elements for hex display
    const hexDisplays = document.querySelectorAll('.active-palette-info .hex');

    function updateHexDisplay(theme) {
        const colors = palettes[theme];
        if (colors && hexDisplays.length === 4) {
            hexDisplays[0].textContent = colors.primary;
            hexDisplays[1].textContent = colors.accent;
            hexDisplays[2].textContent = colors.neutral;
            hexDisplays[3].textContent = colors.dark;
        }
    }

    // Initialize with default theme
    updateHexDisplay('palette-03');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get target theme
            const targetTheme = tab.getAttribute('data-target');
            
            // Update HTML data-theme attribute
            html.setAttribute('data-theme', targetTheme);
            
            // Update the hex labels
            updateHexDisplay(targetTheme);
        });
    });
});
