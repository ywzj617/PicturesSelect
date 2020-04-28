import React from 'react'
import { pictures } from '../component/pictures'
import PictureSelect from '../component/PictureSelect'
import './page.css'
export default class Page extends React.Component {

    state = {
        checkedArr: [],
    }

    checkAll = () => {
        if (this.state.checkedArr.length === 3) {
            this.setState({ checkedArr: [] })
        } else {
            this.setState({ checkedArr: ['1', '2', '3'] })
        }
    }
    changeCheck = (id) => {
        const selectedItem = this.state.checkedArr.find(item => item === id)
        if (selectedItem) {
            this.setState((state) => {
                const newArr = state.checkedArr.filter(item => item !== id)
                console.log(newArr)
                return { checkedArr: newArr }
            })
        } else {
            this.setState((state) => {
                const newArr = [...state.checkedArr, id]
                console.log(newArr)
                return { checkedArr: newArr }
            })
        }
    }


    render() {
        return (
            <PictureSelect onChange={this.changeCheck} value={this.state.checkedArr} pictures={pictures} checkAll={this.checkAll} />
        )
    }
}