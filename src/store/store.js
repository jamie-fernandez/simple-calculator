import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// tutorials & examples
//  * https://flaviocopes.com/vuex/#create-the-vuex-store
//  * https://itnext.io/managing-state-in-vue-js-with-vuex-f036fd71f432
//  * https://mdbootstrap.com/snippets/jquery/ascensus/456902

export const store = new Vuex.Store({
    state: {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    },
    getters:{
        display: state => {
            return state.displayValue;
        }
    },
    mutations: {
        SET_VALUE_DISPLAY(state, answer) {
            state.displayValue = answer;
        },
        SET_FIRST_OPERAND(state, operand) {
            state.firstOperand = operand;
        },
        SET_WAITING(state, waiting) {
            state.waitingForSecondOperand = waiting;
        },
        SET_OPERATOR(state, operator) {
            state.operator = operator;
        }
    }
})
