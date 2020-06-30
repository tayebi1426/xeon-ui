
class LocalDataSource {

    read = (page, pageSize) => {
        let start = (page - 1) * pageSize;
        return {
            data: this.data.slice(start, start + pageSize),
            total: this.data.length
        }
    };

    constructor(data) {
        this.data = data;
    }
}

export default LocalDataSource