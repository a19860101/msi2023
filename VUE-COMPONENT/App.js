import Btn from './components/Btn.js';
import AppNav from './components/Nav.js';
export default {
    data(){
        return {
            title: 'Hello VUE'
        }
    },
    components:{
        // 'Btn':Btn
        AppNav,
        Btn,
    }
}