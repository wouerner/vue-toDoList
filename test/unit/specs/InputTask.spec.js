import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {
  let vm = {}

  beforeEach(function () {
    const Constructor = Vue.extend(InputTask)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    let task = vm.createTask('Comprar leite')
    expect(task.title).to.equal('Comprar leite')
    // expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1)
  })

  it('should create the task not completed', () => {
    let task = vm.createTask('Comprar leite')
    expect(task.completed).to.be.a('Boolean')
  })

  it('should clean the input', () => {
    vm.$el.querySelector('input').value = 'Comprar Leite'
    console.log(vm.$el)
    vm.clearField()
    expect(vm.$el.querySelector('input').value).to.equal('')
  })
})
