import '../styles/style.less';

const Header = {
    template: '<header class="awesome-app-header">{{ appName }} <nav><span>Item 1</span><span>Item 2</span><nav> </header>',
    data: () => {
        return {
            appName: 'Architech'
        }
    }
};

const Gallery = {
    template: '<main class="awesome-app-gallery"></main>',
    data: () => {
        return {
            items: [
                {
                    image: 'http://placekitten.com/200/300',
                    name: 'Item 1',
                    description: 'Lorem ipsum dolor sit amet...'
                },
                {
                    image: 'http://placekitten.com/200/300',
                    name: 'Item 2',
                    description: 'Lorem ipsum dolor sit amet...'
                }
            ]
        }
    }
};

const Footer = {
    template: '<footer class="awesome-app-footer"><div class="made-with-love">{{ madeWithLove }}</div><div class="copyright">{{ copyText }}</div></footer>',
    data: () => {
        return {
            copyText: 'Architech©2017',
            madeWithLove: 'Made with love by exymax'
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'app-header': Header,
        'app-gallery': Gallery,
        'app-footer': Footer
    }
});