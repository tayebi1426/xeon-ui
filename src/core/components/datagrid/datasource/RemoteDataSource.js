import XhrRequest from '../../../util/XhrRequest'

class RemoteDataSource {
    options;

    constructor(options) {
        this.options = options;
    }

    read = (page, pageSize, callback) => {
        let start = (page - 1) * pageSize;
        //console.log({page, pageSize});
        /*  return {
              data: [],
              total: 10
          };*/
        XhrRequest.postRequest(this.options['readUrl']).then(res => callback(res));
    };
}

export default RemoteDataSource