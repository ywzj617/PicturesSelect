import React from 'react'

export default class PictureSelect extends React.Component {
    getAllCheckedValue = () => {
        if (this.props.value.length === 3) {
            return true
        }
        return false
    }

    getChecked = (id) => {
        const flag = this.props.value.some(item => item === id)
        return flag
    }


    render() {
        return <div>
            <input type="checkbox" checked={this.getAllCheckedValue()} onChange={this.props.checkAll} />
            <span>已选中{this.props.value.length}个文件</span>
            <div className="warp">
                {
                    this.props.pictures.map((item) => {
                        return <div className="check" key={item.id}>
                            <input type="checkbox" checked={this.getChecked(item.id)} onChange={() => { this.props.onChange(item.id) }} />
                            <img src={item.url} alt='' />
                            <p style={{ textAlign: "center" }}>{item.id}.jpg</p>
                        </div>
                    })
                }
            </div>
        </div>
    }
}