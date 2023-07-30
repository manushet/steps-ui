const App = {
    data() {
        return {
            activeIndex: 0,
            resetClicked: false,
            steps: [
                {
                    id: 0,
                    title: 'Основы', 
                    text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
                    done: false
                },   
                {
                    id: 1,
                    title: 'Компоненты', 
                    text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
                    done: false
                },
                {
                    id: 2,
                    title: 'Роутер', 
                    text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
                    done: false
                },
                {
                    id: 3,
                    title: 'Vuex', 
                    text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
                    done: false
                },
                {
                    id: 4,
                    title: 'Composition', 
                    text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
                    done: false
                },
            ]
        }
    },
    methods: {
        prev() {
            if (this.activeIndex > 1) {
                this.activeIndex -= 1;
            }
            else {
                this.activeIndex = 0;
            }
            this.setStepsDone();
        },
        nextOrFinish() {
            if (this.activeIndex < this.steps.length - 1) {
                this.activeIndex += 1;
            }
            else {
                this.activeIndex = this.steps.length - 1;
                this.finishBtnClicked();
            }  
            this.setStepsDone();      
        },
        reset() {
            this.activeIndex = 0;
            this.setStepsDone();
            this.resetClicked = false;
        },        
        setActive(id) {
            this.activeIndex = id;
            this.setStepsDone();
        },
        setStepsDone() {
            this.steps = this.steps.map(item => {
                const is_done = (item.id <= this.activeIndex) ? true : false;
                return {
                    ...item,
                    done: is_done
                };
            });
        },
        isStepActive(id) {
            const item = this.steps.find(step => step.id == id);
            return item.id === this.activeIndex;
        },
        isStepDone(id) {
            const item = this.steps.find(step => step.id == id);
            return item.done;
        },
        finishBtnClicked() {
            this.resetClicked = true;
        },       
    },
    computed: {
        activeStepDescription() {
            const item = this.steps.find(step => step.id == this.activeIndex);
            return item.text;
        }
    }
};

Vue.createApp(App).mount('#app');