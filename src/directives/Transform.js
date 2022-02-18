import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {

      let current = 0;

      el.addEventListener('dblclick', function() {

        let incremento = binding.value || 90;
        let animate = false;

        if(binding.modifiers.reverse) {
          current-=incremento;
        } else {
          current+=incremento;
        }

        el.style.transform = `rotate(${current}deg)`; // pode usar this. no lugar do el
        if (binding.modifiers.animate) el.style.transition = "transform 0.5s";

      });
    }

});
