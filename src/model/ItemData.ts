import Category from './CateEnum'

// 一条便签数据
class ItemData {
    id!: number;
    category!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
        this.id = id ;
        // 使用枚举类型代表笔记分类
        this.category = categoryId;
        this.title = title;
        this.content = content;
        // 时间戳转成时间字符串
        this.createTime = this.toSelfDateStr(Date.now());
    }

    toSelfDateStr(timeSpan: number): string{
        let date = new Date(timeSpan);
        let hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        let Minutes = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + hours + Minutes;
        return str;
    }
}

export default ItemData;