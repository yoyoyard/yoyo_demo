import morphdom from 'morphdom'

const mountPoint = document.getElementById('app');
morphdom(mountPoint, '<div id="app">Hello World</div>');