import morphdom from 'morphdom'

const mountPoint = document.getElementById('app');
morphdom(mountPoint, '<div class="hello-world">Hello World</div>');