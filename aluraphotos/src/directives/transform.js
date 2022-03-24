import Vue from 'vue';

//uma diretiva pode ser aplicada em diferentes componentes

//como chamar v-my-transform
Vue.directive('my-transform' , {
    //hook da diretiva
    // binding -- referência a um valor passado para a diretiva
    // el -- refere-se ao elemento que aplica-se a diretiva
    bind(el, binding, vnode) {
        let current = 0;
        let effect;

        el.addEventListener('click', function(){
            let increment = binding.value || 90;
        
            if(! binding.arg || binding.arg == 'rotate'){
                if(binding.modifiers.reverse){
                    current -= increment;
                }else {
                    current += increment;
                }
                
                effect = `rotate(${current}deg)`;

            }else if (binding.arg == 'scale') {
                effect = `scale(${increment})`;
            }

            el.style.transform = effect;
            if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
        })
    }
});
