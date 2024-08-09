document.addEventListener("DOMContentLoaded", function() {
    const iframeContainer = document.getElementById('iframeContainer');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = .getElementById('errorMessage');
    const iframeSrc = 'https://codecast.france-ioi.org/v6/';
    let iframe;

    // Create and configure the iframe element
    function createIframe() {
        iframe = document.createElement('iframe');
        iframe.src = iframeSrc;
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.transition = 'opacity 0.3s ease';

        iframe.onload = () => {
            console.log('Iframe loaded successfully');
            loadingMessage.style.display = 'none'; // Hide loading message
            errorMessage.style.display = 'none'; // Hide error message
            iframe.style.opacity = '1'; // Ensure iframe is visible
        };

        iframe.onerror = () => {
            console.error('Iframe failed to load');
            loadingMessage.style.display = 'none'; // Hide loading message
            errorMessage.style.display = 'block'; // Show error message
        };

        iframeContainer.appendChild(iframe);
    }

    // Adjust iframe size on window resize
    function resizeIframe() {
        console.log('Resizing iframe');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
        }
    }

    // Handle window resize events
    function handleResize() {
        console.log('Window resized');
        resizeIframe(); // Adjust iframe size
    }

    // Add event listener for window resizing
    function addResizeListener() {
        window.addEventListener('resize', handleResize);
    }

    // Handle page visibility change
    function handleVisibilityChange() {
        if (document.hidden) {
            console.log('Page is hidden');
            // Optional: Pause or handle iframe if necessary
        } else {
            console.log('Page is visible');
            // Optional: Resume or reload iframe if necessary
        }
    }

    // Add event listener for page visibility changes
    function addVisibilityChangeListener() {
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    // Debugging information
    function logIframeInfo() {
        console.log('Iframe info:', {
            src: iframe ? iframe.src : 'Iframe not created',
            width: iframe ? iframe.style.width : 'N/A',
            height: iframe ? iframe.style.height : 'N/A',
            opacity: iframe ? iframe.style.opacity : 'N/A'
        });
    }

    // Function to simulate iframe load
    function simulateIframeLoad() {
        console.log('Simulating iframe load');
        setTimeout(() => {
            if (iframe) {
                iframe.onload(); // Trigger the onload event
            }
        }, 2000);
    }

    // Initialize iframe and event listeners
    function init() {
        addResizeListener();
        addVisibilityChangeListener();
        createIframe();
        logIframeInfo(); // Log initial iframe info
        simulateIframeLoad(); // Simulate iframe loading
    }

    // Initialize the script
    init();
});
