import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// tutorials & examples
//  * https://flaviocopes.com/vuex/#create-the-vuex-store
//  * https://itnext.io/managing-state-in-vue-js-with-vuex-f036fd71f432
//  * https://mdbootstrap.com/snippets/jquery/ascensus/456902

export const store = new Vuex.Store({
    state: {
        calculator: {
            displayValue: '0',
            firstOperand: null,
            waitingForSecondOperand: false,
            operator: null,
          },
          performCalculation: {
            '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
            '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
            '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
            '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
            '=': (firstOperand, secondOperand) => secondOperand
          },
    },
    getters: {
        display: state => {
            return state.calculator.displayValue;
        }
    },
    actions: {
        inputDigit(context, digit) {
            const { displayValue, waitingForSecondOperand } = context.state.calculator;

            if (waitingForSecondOperand === true) {
                context.commit('SET_VALUE_DISPLAY', digit);
                context.commit('SET_WAITING', false);
            } else {
                context.commit('SET_VALUE_DISPLAY', displayValue === '0' ? digit : displayValue + digit);
            }
        },
        inputDecimal(context, dot) {
            if (!context.state.calculator.displayValue.includes(dot)) {
              context.commit('SET_VALUE_DISPLAY', context.state.calculator.displayValue += dot);
            }
        },
        handleOperator(context, nextOperator) {
            const { firstOperand, displayValue, operator } = context.state.calculator
            const inputValue = parseFloat(displayValue);

            if (operator && context.state.calculator.waitingForSecondOperand)  {
                context.commit('SET_OPERATOR', nextOperator);
                return;
            }

            if (firstOperand == null) {
                context.commit('SET_FIRST_OPERAND', inputValue)
            } else if (operator) {
              const currentValue = firstOperand || 0;
              const result = context.state.calculator.performCalculation[operator](currentValue, inputValue);

              context.commit('SET_VALUE_DISPLAY', String(result));
              context.commit('SET_FIRST_OPERAND', result);
            }

            context.commit('SET_WAITING', true);
            context.commit('SET_OPERATOR', nextOperator);
          },
          resetCalculator(context) {
            context.commit('SET_VALUE_DISPLAY', '0');
            context.commit('SET_FIRST_OPERAND', null);
            context.commit('SET_WAITING', false);
            context.commit('SET_OPERATOR', null);
          }
    },
    mutations: {
        SET_VALUE_DISPLAY(state, answer) {
            state.calculator.displayValue = answer;
        },
        SET_FIRST_OPERAND(state, operand) {
            state.calculator.firstOperand = operand;
        },
        SET_WAITING(state, waiting) {
            state.calculator.waitingForSecondOperand = waiting;
        },
        SET_OPERATOR(state, operator) {
            state.calculator.operator = operator;
        },
        SET_RESET(state) {
            state.calculator.displayValue = '0';
            state.calculator.firstOperand = null;
            state.calculator.waitingForSecondOperand = false;
            state.calculator.operator = null;
        }
    }
})
