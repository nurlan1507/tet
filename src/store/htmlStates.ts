import {makeAutoObservable, observable,action} from 'mobx'
class HtmlStates{
    activeMenu:boolean
    toggleActiveMenu(){
      this.activeMenu = !this.activeMenu
    }
    constructor() {
        this.activeMenu= false
        makeAutoObservable(this)
    }
}   

export default new HtmlStates()