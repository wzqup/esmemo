// 负责 localStorage 操作
class DataHelper {
    dataKey: string;
    primaryKey: string;

    constructor(dataKey: string, primaryKey: string){
        this.dataKey = dataKey;
        this.primaryKey =  primaryKey;
    }

    // 读取数据
    readData(): any {
        let data: string | null = localStorage.getItem(this.dataKey);
        // 取到数据转成数组对象,否则返回空数组
        let arrData: any = data == null ? [] : JSON.parse(data);
        return arrData;
    }

    // 存入数据
    saveData(arrData:Array<Object>): void {
        let str : string  = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    }

    // 新增数据
    addData(newDataObj: any): number {
        // 读取本地数据
        let dataArray = this.readData();

        // 生成新数据ID
        let newId = dataArray.length > 0 ? dataArray[dataArray.length - 1][this.primaryKey] + 1 : 1;
        newDataObj[this.primaryKey] = newId;

        // 新数据追加到数组并重新保存
        dataArray.push(newDataObj);
        this.saveData(dataArray)
        return newId;
    }
    // 删除数据
    removeDataById(id: string | number): boolean {
        let arr = this.readData();
        // 查找要删除对象的下标
        let index = arr.findIndex((ele:any) =>{
            return ele[this.primaryKey] == id
        });
        if(index > -1){
            arr.splice(index,1);
            this.saveData(arr);
            return true;
        }
        return false;
    } 

}

export default DataHelper;