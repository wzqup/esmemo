import DataHelper from "./DataHelper";
import ItemData from '@/model/ItemData';
import Category from '@/model/CateEnum';

class ActionHelper {
    // 数据处理
    dataHelper: DataHelper = new DataHelper('memoData','id');
    // 笔记数组
    memoList!: Array<ItemData>;

    constructor() {
        // 读取本地数据 保存到memolist中
        this.memoList = this.readData();
    }

    // 读取本地数据,并返回itemData类型数组
    readData(): Array<ItemData> {
        // 读取本地数据
        let dataArr = this.dataHelper.readData();

        // 数组内的Object 转成 ItemData类型
        let itemArr = dataArr.map((ele:any) => {
            let item: ItemData = new ItemData();
            Object.assign(item,ele);
            return item;
        });
         return itemArr;
    }
    // 业务处理
    // 新增便签
    add(item: ItemData): number {
        // 将便签数据保持到本地 会返回id值
        item.id = this.dataHelper.addData(item);
        // 将新增笔记添加到memolist
        this.memoList.push(item);
        return item.id;
    }
    // 修改便签
    edit(item: ItemData): void {
        // 找出数组中id相同的对象
        let editItem: ItemData | undefined = this.memoList.find(ele => ele.id == item.id);
        if (editItem) {
            // 新数据对象覆盖旧的
            Object.assign(editItem,item);
            // 保存到本地
            this.dataHelper.saveData(this.memoList);
        }
    }
    // 删除笔记
    remove(id: number): void {
        let index: number = this.memoList.findIndex(ele => ele.id === id);
        if (index > -1){
            this.memoList.splice(index,1);
            this.dataHelper.saveData(this.memoList)
        }
    }
    // 获取对应分类的文字
    getCategoryName(categoryId: Category):string {
        let strArr = ['工作','生活','学习'];
        return strArr[categoryId]
    }
}

export default ActionHelper;