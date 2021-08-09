import React, { Component } from 'react'
import { Table, Card, Button, message } from 'antd';
import { reqCategorys } from '../../api/index'
import { PlusOutlined,ArrowRightOutlined} from '@ant-design/icons';
import './index.less'
export default class Category extends Component {
    state = {
        columns: [],
        categorys: [],
        subCategorys: [],
        parentId: '0',
        parentName: '',
        loading: true
    }
    componentWillMount() {
        this.state.columns = [
            {
                title: '分类名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '操作',
                key: 'operation',
                render: (category) => (
                    <div>
                        <span className='defaultFont'>修改分类</span>
                         {this.state.parentId==0?<span className='defaultFont'  onClick={() => { this.showSubCategory(category) }}>查看分类</span>:null}  
                    </div>
                )
            },
        ];
    }
    componentDidMount() {
        this.getCategorys();
    }
    showSubCategory=(category)=>{
        console.log(this)
        this.setState({
            parentId: category._id,
            parentName: category.name
        }, () => {
            this.getCategorys();
        })
    }
    showCategory=()=>{
          this.setState({
              parentId:'0',
              subCategorys:[]
          })
    }
    getCategorys = async () => {
        this.setState({
            loading:true
        })
        let { data } = await reqCategorys(this.state.parentId);
        let categorys = data.data;
        if (data.status === 0) {
            if (this.state.parentId === '0') {
                this.setState({
                    categorys
                })
            } else {
                this.setState({
                    subCategorys: categorys
                })
            }

        } else {
            message.error('获取数据失败')
        }
        this.setState({
            loading: false
        })
    }
    render() {
        const { loading,categorys,subCategorys,columns,parentId,parentName} = this.state
        const extra = (
            <Button type='primary'>
                <PlusOutlined />
                <span>添加</span>
            </Button>
        )
        return (
            <div>
                <Card 
                title={parentId==='0'?"一级分类列表":
                <div>
                  <span onClick={this.showCategory} className='defaultFont'>一级分类列表</span>
                  <ArrowRightOutlined />
                  <span style={{'margin-left':'10px'}}>{parentName}</span>
                </div>} 
                extra={extra}>
                    <Table 
                    loading={loading}  
                    rowKey='_id' 
                    dataSource={parentId==='0'?categorys:subCategorys} 
                    columns={columns} 
                    scroll={{ y: 550 }} 
                    bordered
                     />
                </Card>
            </div>
        )
    }
}
